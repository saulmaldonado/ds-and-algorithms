from typing import Match
from urllib.request import urlopen, Request, HTTPError
import os
import json
import re


event_path = os.environ["GITHUB_EVENT_PATH"]
token = os.environ["GITHUB_TOKEN"]
release_endpoint = (
    "https://api.github.com/repos/saulmaldonado/ds-and-algorithms/releases"
)


class PullRequest:
    def __init__(self):
        self.event_path = event_path
        self.event = self.__get_event_payload()
        self.type, self.title, self.number = self.__get_ref()
        self.path = self.__get_path()

    def __get_event_payload(self):
        with open(self.event_path) as fp:
            return json.load(fp)

    def __get_path(self):
        file_endpoint = f"https://api.github.com/repos/saulmaldonado/ds-and-algorithms/pulls/{self.number}/files"

        files = json.load(urlopen(file_endpoint))

        filenames = [file["filename"] for file in files]

        for filename in filenames:
            match = re.match(
                r"(?P<topic>[\w]+)\/(?P<name>[\w!-)\-]+)\/(?P<filename>README\.md|\2(?:\.js|\.ts|\.go|\.java))",
                filename,
            )
            if match != None:
                return f"{match.group('topic')}/{match.group('name')}"

    def __get_ref(self) -> str:
        ref = self.event["pull_request"]["head"]["ref"]
        number = self.event["number"]
        match = re.match(r"(?P<branch_type>feat|fix)\/(?P<name>[\w!-)\-]+)", ref)
        if match == None:
            raise Exception(
                "Pull request ref does not match convention, (feat|fix)/(branch name)"
            )

        title = self.__format_title(match)
        return (match.group("branch_type"), title, number)

    def __format_title(self, match: Match) -> str:
        branch_type = match.group("branch_type")
        name = match.group("name")

        title = re.sub("-", " ", name)
        if branch_type == "feat":
            return re.sub(r"\b\w", lambda match: match.group(0).upper(), title)
        else:
            return title.capitalize()


class Version:
    def __init__(self, release_endpoint):
        self.__get_recent_tag(release_endpoint)

    def __get_recent_tag(self, release_endpoint):
        recent_tag = ""

        releases = json.load(urlopen(release_endpoint))

        if len(releases) == 0:
            recent_tag = "v0.0.0"
        else:
            recent_tag = releases[0]["tag_name"]

        match = re.match(r"v(?P<major>[\d]+)\.(?P<minor>[\d]+)", recent_tag)

        self.major = int(match.group("major"))
        self.minor = int(match.group("minor"))

    def bump_major(self):
        self.major += 1
        self.minor = 0

    def bump_minor(self):
        self.minor += 1

    def get_tag(self):
        return "v" + ".".join((str(self.major), str(self.minor)))

    def bump_to_next(self, pull_request):
        if pull_request.type == "feat":
            self.bump_major()
        else:
            self.bump_minor()


class Release:
    def __init__(self, release_endpoint):
        pr = PullRequest()
        v = Version(release_endpoint)
        v.bump_to_next(pr)

        self.tag_name = v.get_tag()
        self.name = pr.title
        self.body = self.get_body(pr.path)

    def get_payload(self):
        return json.dumps(
            {"tag_name": self.tag_name, "name": self.name, "body": self.body}
        )

    def get_body(self, path):
        if path == None:
            return ""
        return f"[{self.name}](https://github.com/saulmaldonado/ds-and-algorithms/tree/main/{path})"

    def new_release(self):
        req = Request(
            release_endpoint,
            self.get_payload().encode("utf-8"),
            {
                "Authorization": "Bearer " + token,
                "Accept": "application/vnd.github.v3+json",
                "Content-Type": "application/json",
            },
        )

        try:
            res = urlopen(req)
            print(f"{res.reason} {res.code}")
        except HTTPError as err:
            print(f"{err.reason} {err.code}")


if __name__ == "__main__":
    release = Release(release_endpoint)
    release.new_release()

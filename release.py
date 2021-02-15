from typing import Match, Tuple, Union
from urllib.request import urlopen, Request, HTTPError
from string import Formatter
import os
import json
import re


EVENT_PATH = os.environ["GITHUB_EVENT_PATH"]
TOKEN = os.environ["GITHUB_TOKEN"]
RELEASE_ENDPOINT = (
    "https://api.github.com/repos/saulmaldonado/ds-and-algorithms/releases"
)
FILES_ENDPOINT = (
    "https://api.github.com/repos/saulmaldonado/ds-and-algorithms/pulls/{}/files"
)

MARKDOWN_LINK = "[{}](https://github.com/saulmaldonado/ds-and-algorithms/tree/main/{})"


class PullRequest:
    def __init__(self, event_path: str, files_endpoint: Formatter):
        self.files_endpoint = files_endpoint
        self.event_path = event_path
        self.event = self.__get_event_payload()
        self.type, self.title, self.number = self.__get_ref()
        self.path = self.__get_path()

    def __get_event_payload(self):
        with open(self.event_path) as file_pointer:
            return json.load(file_pointer)

    def __get_path(self) -> Union[str, None]:
        files_url = self.files_endpoint.format(self.number)

        files = json.load(urlopen(files_url))

        filenames = [file["filename"] for file in files]

        for filename in filenames:
            match = re.match(
                r"(?P<topic>[\w!-)\-]+)\/(?P<name>[\w!-)\-]+)\/(?P<filename>README\.md|\2(?:\.js|\.ts|\.go|\.java))",
                filename,
            )
            if match is not None:
                return f"{match.group('topic')}/{match.group('name')}"
            return None

    def __get_ref(self) -> str:
        ref = self.event["pull_request"]["head"]["ref"]
        number = self.event["number"]
        match = re.match(r"(?P<branch_type>feat|fix)\/(?P<name>[\w!-)\-]+)", ref)
        if match is None:
            raise Exception(
                "Pull request ref does not match convention, (feat|fix)/(branch name)"
            )

        title = PullRequest.format_title(match)
        return (match.group("branch_type"), title, number)

    @staticmethod
    def format_title(match: Match) -> str:
        branch_type = match.group("branch_type")
        name = match.group("name")

        title = re.sub("-", " ", name)
        if branch_type == "feat":
            return re.sub(r"\b\w", lambda match: match.group(0).upper(), title)
        else:
            return title.capitalize()


class Version:
    def __init__(self, release_endpoint: str):
        self.major, self.minor = Version.get_recent_version(release_endpoint)

    @staticmethod
    def get_recent_version(release_endpoint) -> Tuple[int, int]:
        recent_tag = ""

        releases = json.load(urlopen(release_endpoint))

        if len(releases) == 0:
            recent_tag = "v0.0.0"
        else:
            recent_tag = releases[0]["tag_name"]

        match = re.match(r"v(?P<major>[\d]+)\.(?P<minor>[\d]+)", recent_tag)

        return int(match.group("major")), int(match.group("minor"))

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
    def __init__(
        self, release_endpoint: str, mardown_link: Formatter, pull_req: PullRequest
    ):
        self.release_endpoint = release_endpoint
        self.pull_req = pull_req
        self.markdown_link = mardown_link

        ver = Version(self.release_endpoint)
        ver.bump_to_next(self.pull_req)

        self.tag_name = ver.get_tag()
        self.name = self.pull_req.title
        self.body = self.get_body(self.pull_req.path)

    def get_payload(self):
        return json.dumps(
            {"tag_name": self.tag_name, "name": self.name, "body": self.body}
        )

    def get_body(self, path):
        if path is None:
            return ""
        return self.markdown_link.format(self.name, path)

    def new_release(self, token):
        req = Request(
            self.release_endpoint,
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
    pr = PullRequest(EVENT_PATH, FILES_ENDPOINT)
    release = Release(RELEASE_ENDPOINT, MARKDOWN_LINK, pr)
    release.new_release(TOKEN)

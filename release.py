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
        self.path = self.__get_path(self.number)

    def __get_event_payload(self):
        with open(self.event_path) as fp:
            return json.load(fp)

    def __get_path(self, pr_number):
        file_endpoint = f"https://api.github.com/repos/saulmaldonado/ds-and-algorithms/pulls/{pr_number}/files"

        filename = json.load(urlopen(file_endpoint))[0]["filename"]
        match = re.match(r"([\w\-]+)\/([\w\-]+)\/(README.md)", filename)

        if match == None:
            return None
        return f"{match.group(1)}/{match.group(2)}"

    def __get_ref(self) -> str:
        ref = self.event["pull_request"]["head"]["ref"]
        number = self.event["number"]
        match = re.match(r"(feat|fix)\/(.+)", ref)
        if match == None:
            raise Exception(
                "Pull request ref does not match convention, (feat|fix)/(branch name)"
            )

        title = re.sub("-", " ", match.group(2))
        title = re.sub(r"\b\w", lambda match: match.group(0).upper(), title)

        return (match.group(1), title, number)


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

        match = re.match(r"v([\d]+)\.([\d]+)", recent_tag)

        self.major = int(match.group(1))
        self.minor = int(match.group(2))

    def bump_major(self):
        self.major += 1

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
            return None
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
            print("{} {}".format(res.reason, res.code))
        except HTTPError as err:
            print("{} {}".format(err.reason, err.code))


if __name__ == "__main__":
    release = Release(release_endpoint)
    release.new_release()

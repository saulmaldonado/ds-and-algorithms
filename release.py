from urllib.request import urlopen, Request
import os
import json
import re

event_path = os.environ["GITHUB_EVENT_PATH"]
token = os.environ["GITHUB_TOKEN"]
release_endpoint = (
    "https://api.github.com/repos/saulmaldonado/ds-and-algorithms/releases"
)


class PullRequest:
    def __init__(self, event_path):
        with open(event_path) as fp:
            self.event = json.load(fp)
            self.type, self.title = self.__get_ref()

    def __get_ref(self) -> str:
        ref = self.event.pull_request.head.ref
        match = re.match("(feat|fix)\/(.+)", ref)
        if match == None:
            raise Exception(
                "Pull request ref does not match convention, (feat|fix)/(branch name)"
            )

        title = re.sub("-", " ", match.group(2))
        title = re.sub(r"\b\w", lambda match: match.group(0).upper(), title)

        return (match.group(1), title)


class Version:
    def __init__(self, release_endpoint):
        self.__get_recent_tag()

    def __get_recent_tag(self):
        recent_tag = ""

        releases = json.load(urlopen(release_endpoint))

        if len(releases) == 0:
            recent_tag = "v0.0.0"

        recent_tag = releases[0].tag_name

        match = re.match("v([\d]+)\.([\d]+)", recent_tag)

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
    def __init__(self):
        pr = PullRequest(event_path)
        v = Version()
        v.bump_to_next(pr)
        self.tag_name = v.get_tag()
        self.name = pr.title

    def to_payload(self):
        return json.dumps({"tag_name": self.tag_name, "name": self.name})

    def new_release(self):
        req = Request(
            release_endpoint,
            self.to_payload().encode("utf-8"),
            {
                "Authorization": "Bearer " + token,
                "Accept": "application/vnd.github.v3+json",
                "Content-Type": "application/json",
            },
        )
        res = json.load(urlopen(req))
        print(res)


if __name__ == "__main__":
    release = Release()
    release.new_release()

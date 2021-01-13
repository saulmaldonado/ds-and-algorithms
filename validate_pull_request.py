import json
import re
from urllib.request import urlopen
from os import environ

# check for the directory of the new problem
# we'll need to fetch the pull request and extract the name and topic
# need problem topic and name
# probably need to convert them to the appropriate case (kabab)

# read the readme and validate it
# check for proper title
# check for difficulty
# check something in problem
# check for something in solutions
# check for valid links to solutions


pr_number = environ["INPUT_PR_NUMBER"]


pr_data = json.load(
    urlopen(
        "https://api.github.com/repos/saulmaldonado/ds-and-algorithms/pulls/{}".format(
            pr_number
        )
    )
)


# mock request
# pr_data = json.load(
#         urlopen("https://api.github.com/repos/saulmaldonado/ds-and-algorithms/pulls/24")
# )


def get_field(field: str, body: str) -> str:

    field_patterns = {"title": r"(# Title(\r\n){2,})([\w ]+)"}

    try:
        title_match = re.match(field_patterns[field], body)
        assert title_match != None
        return title_match.group(3)
    except AssertionError:
        raise Exception(
            "{} was not found in pull request body. Refer to the PULL_REQUEST_TEMPLATE.".format(
                field.capitalize()
            )
        ) from None
    except:
        raise


problem_data = {"title": get_field("title", pr_data["body"])}
print(problem_data)

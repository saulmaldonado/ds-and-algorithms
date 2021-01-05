from functools import reduce
import os
import re

path_to_template = "./README-TEMPLATE.md"
problem_template = """<li>
  <a href="{2}/{1}">
    {0}
  </a>
</li>"""

topic_template = """<details>
  <summary>{}</summary>
    <ul>
      {}
    </ul>
</details>"""

dirs_to_exclude = [".git", ".github"]

data = []
readme_template = ""
problems_count = 0

dirs = os.listdir(os.getcwd())


def to_title_case(str):
    if len(str) == 0:
        return str
    new_str = re.sub("-", " ", str)
    return re.sub(r"\b\w", lambda match: match.group(0).upper(), new_str)


def to_kebab_case(str):
    if len(str) == 0:
        return str
    new_str = re.sub(r"\b\w", lambda match: match.group(0).lower(), str)
    return re.sub(r"\W", "-", new_str)


for dir in dirs:
    if not os.path.isdir(dir) or dir in dirs_to_exclude:
        continue

    problems = os.listdir(os.path.join(os.getcwd(), dir))

    for problem in problems:
        p_map = {"name": to_title_case(problem), "topic": to_title_case(dir)}
        data.append(p_map)

with open(path_to_template) as template_file:
    readme_template = template_file.read()


def map_problem(map, problem):
    global problems_count

    key = problem["topic"]
    if key not in map:
        map[key] = []
    map[key].append(problem["name"])
    problems_count += 1
    return map


problems_per_topic = reduce(map_problem, data, {})

problemsHTML = ""

for topic in problems_per_topic:
    list_of_problems = problems_per_topic[topic]
    all_problems_for_topic = reduce(
        lambda html, problem: html
        + problem_template.format(
            problem, to_kebab_case(problem), to_kebab_case(topic)
        ),
        list_of_problems,
        "",
    )
    problemsHTML += topic_template.format(topic, all_problems_for_topic)

new_readme = re.sub("\$\{problems\}", problemsHTML, readme_template)
new_readme = re.sub("\$\{number-of-problems\}", str(problems_count), new_readme)


with open("README.md", "w") as r:
    r.write(new_readme)

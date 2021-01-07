# Contributing

You can contribute by:

- Submitting new problems and solutions
- Submitting additional solutions to existing problems
- Revising current solutions

## We Use [Github Flow](https://guides.github.com/introduction/flow/index.html), So All Code Changes Happen Through Pull Requests

Pull requests are the best way to propose changes to the codebase (we use [Github Flow](https://guides.github.com/introduction/flow/index.html)). We actively welcome your pull requests:

1. [Fork it](https://help.github.com/articles/fork-a-repo/)
2. Clone it
3. Create new branch (Refer to `Naming Your Branch` for branch naming conventions
4. Add new problem following `Adding New Problem` for naming, file structure and documentation convention.
5. Stage and commit changes following [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) spec
6. Push and [Create new Pull Request](https://help.github.com/articles/creating-a-pull-request/) following the pull request template.

## Adding New Problem

### Problem file structure

Problems are organized by topic. Each topic directory contains sub-directories for every problem. Every problem contains a README for solution/problem explanation and solution files for each language.

The repo follows the following file structure:

```
.
├── {problem-topic}
│   ├── {problem-name}
│   │   ├── README.md
│   │   ├── {problem-name}.go
│   │   ├── {problem-name}.java
│   │   ├── {problem-name}.js
│   │   └── {problem-name}.ts
│   ├── {problem-name}
│   │   ├── README.md
│   │   ├── {problem-name}.go
│   │   ├── {problem-name}.java
│   │   ├── {problem-name}.js
│   │   └── {problem-name}.ts

```

### Problem and topic naming conventions

All problems files/topic directory and file names should be in `kebab-casing`

### Problem documentation

All problems must have `README.md` files in the problem's directory. All READMEs must follow [PROBLEM-TEMPLATE](./PROBLEM-TEMPLATE.md)

## Naming your branch

Branches should be named after the name of the problem, in `kebab-case`, prefixed with the type of change intended to be made and a `/`

| Branch                | Description                                                             |
| --------------------- | ----------------------------------------------------------------------- |
| `feat/{problem-name}` | New problem                                                             |
| `fix/{problem-name}`  | Additional solution to problems, Revision to existing problem solutions |

## Coding Style

There is not strict code style. Using the project's `.editorconfig` is highly encouraged. You can use it with Vscode using the [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) Extension

## License

By contributing, you agree that your contributions will be licensed under its MIT License.

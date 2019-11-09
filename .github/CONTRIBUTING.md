# Contribution guidelines

## Table of Contents

- [Contribution guidelines](#contribution-guidelines)
  - [Table of Contents](#table-of-contents)
  - [How can I help?](#how-can-i-help)
    - [Documentation](#documentation)
    - [Issues](#issues)
      - [Submitting an issue](#submitting-an-issue)
    - [Code](#code)
      - [Dev environment](#dev-environment)
  - [Commiting](#commiting)
    - [Why all these rules?](#why-all-these-rules)
  - [Submitting a pull request](#submitting-a-pull-request)

## How can I help?

Here are some ways you can help along with some guidelines.

### Documentation

While documenting, try to keep things simple and clear.

### Issues

#### Submitting an issue

- Please search for similar issues before opening a new one;
- Use one of the corresponding issue templates;
- Include as much information as possible by filling out the provided issue
  template;

### Code

You can use issue labels to discover issues you could help out with:

- [`bug` issues](https://github.com/arrieguadev/codetictac/labels/bug)
  are known bugs we'd like to fix;
- [`enhancement` issues](https://github.com/arrieguadev/codetictac/labels/enhancement)
  are features we're open to include.

#### Dev environment

When developing, prefer using **Node** ≥ 8 and **yarn**. Writing code with the latest stable Node versions allows us to use newer developer tools.

This project uses [Prettier](http://prettier.io/) for code formatting. Consider installing an [editor plugin](https://prettier.io/docs/en/editors.html) for the best experience, but code will also be formatted with a precommit script (using [lint-staged](https://github.com/okonet/lint-staged)).

## Commiting

A commit message can consists of a **header**, **body** and **footer**. The header is the only mandatory part and consists of a type and a subject. The body is used to fully describe the change. The footer is the place to reference any issues or pull requests related to the commit. That said, we end with a template like this:

```
<type>: <subject>

[optional body]

[optional footer]
```

To ensure that a commit is valid, easy to read, and changelog-ready, we have a hook that lints the commit message before allowing a commit to pass. This linter verifies the following:

- Type should be one of the following:  
  - feat (new feature)
  - fix (bug fix)
  - docs (changes to documentation)
  - style (formatting, missing semi colons, etc; no code change)
  - refactor (refactoring production code)
  - test (adding missing tests, refactoring tests; no production code change)
  - chore (updating grunt tasks etc; no production code change)
- Subject should use imperative tone and say what you did.
- The body should go into detail about changes made.
- The footer should contain any issue references or actions.

You also should follow these general guidelines when committing:

- Use the present tense ("Add feature" not "Added feature");
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...");
- Try to answer the following questions:
  - Why is this change necessary?
  - How does it address the issue?
  - What side effects (if any) does this change may have?

Example of a commit message:

```
type: commit message style guide for Git

The first line of a commit message serves as a summary.  When displayed
on the web, it's often styled as a heading, and in emails, it's
typically used as the subject. As such, you should specify a "type" and
a "subject". The type must be lowercase and one of: chore, ci, docs,
feat, fix, test. For the subject you'll need capitalize it and
omit any trailing punctuation. Aim for about 50 characters, give or
take, otherwise it may be painfully truncated in some contexts. Write
it, along with the rest of your message, in the present tense and
imperative mood: "Fix bug" and not "Fixed bug" or "Fixes bug".
Consistent wording makes it easier to mentally process a list of
commits.

Oftentimes a subject by itself is sufficient. When it's not, add a
blank line (this is important) followed by one or more paragraphs hard
wrapped to 72 characters. Git is strongly opinionated that the author
is responsible for line breaks; if you omit them, command line tooling
will show it as one extremely long unwrapped line. Fortunately, most
text editors are capable of automating this.

Issues and pull request can be referenced on the footer: #3 #12
```

### Why all these rules?

We try to enforce these rules for the following reasons:

- Automatically generating changelog;
- Communicating in a better way the nature of changes;
- Triggering build and publish processes;
- Automatically determining a semantic version bump (based on the types of commits);
- Making it easier for people to contribute, by allowing them to explore a more structured commit history.

## Submitting a pull request

Before submitting a pull request, please make sure the following is done:

- [Fork](https://help.github.com/en/articles/fork-a-repo) the repository and create your branch from `master`.
  - Example: `feature/my-awesome-feature` or `fix/annoying-bug`;
- Run `yarn` in the repository root;
- If you’ve fixed a bug or added code that should be tested, **add tests**;
- Ensure the test suite passes;
- Ensure your commit is validated;


This contributing guideline was adapted from [Unform](https://github.com/Rocketseat/unform).
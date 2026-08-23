---
name: deploy-website
description: Deploy the Fahrenheit Robotics website (fahrenheitrobotics.org) — build the Docusaurus site and publish it plus the root index.html/img/app.css onto the main branch, which GitHub Pages serves live. Use whenever the user asks to deploy, publish, push, or release the site, or says changes are ready to go live. Full process is documented at site/docs/marketing/website/website-deploy.md.
---

# Deploy the website

Publishes whatever is currently on the working branch (normally `docusaurus`)
to `main`, which is what GitHub Pages actually serves at
https://fahrenheitrobotics.org. There are two parts of the site that both get
published: the Docusaurus guides under `site/`, and the plain static
`index.html` (+ `img/`, `app.css`) at the repo root.

Full background/rationale is documented at
`site/docs/marketing/website/website-deploy.md` — read it if anything below is
unclear or the doc has since changed.

## Preconditions

- Working tree on the source branch (usually `docusaurus`) must be clean —
  check with `git status`. If there are uncommitted changes, stop and ask the
  user whether to commit them first (never commit without being asked).
- Push the source branch to origin too (`git push origin <branch>`) so the
  remote reflects the work, even though the doc doesn't explicitly call this
  out — it's cheap insurance before switching branches.

## Step 1 — Build the Docusaurus site

```bash
./scripts/deploy0.sh
```

This runs `yarn && yarn build` inside `site/`, producing `site/build/`.
Confirm it exits cleanly before continuing — a broken build means don't
proceed.

## Step 2 — Stage a copy of everything to publish

```bash
./scripts/deploy1.sh
```

Copies `site/build/`, `img/`, `index.html`, `app.css`, `README.md`, and
`CHANGELOG.md` into `../temp-site` (sibling of the repo, outside git). This
snapshot survives the branch switch in the next step.

## Step 3 — Switch to main and bring it up to date

```bash
git checkout main
git pull --ff-only origin main
```

Local `main` is rarely checked out day-to-day, so it can be stale relative to
`origin/main` — always fast-forward it before swapping files in, or the
replace step will silently be based on old content.

## Step 4 — Replace the published files and bump the tag

`scripts/deploy2.sh` lives only on `main` (it's intentionally excluded from
the replace-list inside itself, so it survives every deploy). Open it and
bump the `TAG` variable to the next version before running it — check
`git tag --sort=-creatordate | head -5` for the last one and increment sanely
(patch bump for small content changes like new photos/docs, minor bump for
actual features).

```bash
./scripts/deploy2.sh
```

This replaces `site/`, `img/`, `index.html`, `app.css`, `README.md`, and
`CHANGELOG.md` in the working tree with the staged copies from `../temp-site`.

## Step 5 — Commit, push, and tag

```bash
git add -A
git commit -m "Deploying version $TAG"
git push origin main
git tag $TAG
git push origin $TAG
```

(`$TAG` is whatever you set inside `deploy2.sh` in Step 4 — match it exactly
so the commit message and tag agree.)

## Step 6 — Return to the source branch

```bash
git checkout docusaurus
```

Leaves the working directory back on the normal editing branch after the
deploy is done.

## Step 7 — Verify the live site

GitHub Pages can take a minute or two to propagate. Check that the new
content is actually being served, e.g.:

```bash
curl -sI https://fahrenheitrobotics.org/ | head -5
curl -s -o /dev/null -w "%{http_code}\n" https://fahrenheitrobotics.org/img/<a new file added this deploy>
```

A `200` on a newly-added image is strong confirmation the deploy propagated.
Since GitHub Pages caching can occasionally lag even after the origin has the
new files, always ask the user to load https://fahrenheitrobotics.org/ in
their own browser (hard refresh) and confirm the expected changes are visible
before considering the deploy fully done.

---
sidebar_label: 'How to deploy'
sidebar_position: 4
---

# Deploying (Publishing) Changes

When you're happy with the changes, you will need to push the changes up to github. 

:::note
When you use `git` to upload changed files, the command that is run is called `git push`. So, that's why it's called  `pushing` code for a release.
:::

There are 2 parts to our site: 
1. [index.html](https://github.com/Fahrenheit6882/Fahrenheit6882.github.io/blob/docusaurus/index.html) is a basic html page that defines the landing page for [https://fahrenheitrobotics.org/](https://fahrenheitrobotics.org/)
2. The [site](https://github.com/Fahrenheit6882/Fahrenheit6882.github.io/tree/docusaurus/site) directory contains a [docusaurus](https://docusaurus.io/) site which contains our team guides.

There are a few steps to deploy changes to the live site: 

:::note
This is a bit complicated so I wrote some scripts to automate it.  
:::

1. Run `yarn build` to create a `build` directory containing docusaurus site files

Take a look at [deploy0.sh](../../../../scripts/deploy0.sh). This contains the commands to build the docusaurus files into static html/css/javascript. 

2. Make a copy of the `build` directory, as well as the `index.html` and `app.css` files. 

Take a look at [deploy1.sh](../../../../scripts/deploy1.sh). This contains the commands to make a copy of the static files.

3. Switch to the `main` branch

```shell
git checkout main
```

4. Replace everything in the `site` directory of the main branch with contents of the copy of the `build` directory
5. Replace `index.html` and `app.css` files
```shell
export TEMP_SITE="../temp-site"
rm -rf site/
mv $TEMP_SITE/site site
rm -rf img/
mv $TEMP_SITE/img img
mv $TEMP_SITE/index.html index.html
mv $TEMP_SITE/app.css app.css
mv $TEMP_SITE/README.md README.md
mv $TEMP_SITE/CHANGELOG.md CHANGELOG.md
```
6. Push to github

```shell
git push origin main
```

7. Create a git tag for the release. 
```shell
git push origin <NEW_TAG>
```

Whenever new or changed files are pushed to github, then the "Live" site available here will show the changes: 

[https://fahrenheitrobotics.org](https://fahrenheitrobotics.org)


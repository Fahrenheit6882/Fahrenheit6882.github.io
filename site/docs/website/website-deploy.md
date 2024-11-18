---
sidebar_label: 'How to deploy'
sidebar_position: 5
---

# Deploying (Publishing) Changes

## Start a Development Server to test local changes

After you edit the files in VS Code installed on your computer, you can run a server that will serve the site locally on your computer. This is great for testing and to make sure the changes look good before publishing them out to the live site. 

:::note
TODO: describe how to install `nvm` and how to use `nvm` to install Node.js and `npm`. Then show how to use `npm` to install `yarn`. 
:::

:::note
Node.js 23.x didn't work for me, I run into a known issue of [Unexpected end of JSON input](https://github.com/facebook/docusaurus/issues/10684). `npm use 22.3` works for me. 
:::

In order to build the website you'll need a tool called `yarn`. To install yarn, follow the guide [here](https://yarnpkg.com/getting-started). 

Once you have `yarn` installed, use the following commands to build and start a server that will serve the site on your computer: 

```shell
cd site
yarn
yarn start
```

If all goes well, a browser window should open to show the site. You can also open a browser and go to [http://localhost:3000/site/docs/welcome](http://localhost:3000/site/docs/welcome). 

## Deploy Changes

When you're happy with the changes, you will need to push the changes up to github. 

:::note
When you use `git` to upload changed files, the command that is run is called `git push`. So, that's why it's called  `pushing` code for a release.
:::

There are 2 parts to our site: 
1. [index.html](https://github.com/Fahrenheit6882/Fahrenheit6882.github.io/blob/docusaurus/index.html) is a basic html page that defines the landing page for [https://fahrenheitrobotics.org/](https://fahrenheitrobotics.org/)
2. The [site](https://github.com/Fahrenheit6882/Fahrenheit6882.github.io/tree/docusaurus/site) directory contains a [docusaurus](https://docusaurus.io/) site which contains our team guides.

There are a few steps to deploy changes to the live site: 

:::note
This is a bit complicated. It would be great for someone to write a script to automate these steps ;-) 
:::

1. Run `yarn build` to create a `build` directory containing docusaurus site files
2. Make a copy of the `build` directory, as well as the `index.html` and `app.css` files. 

Here's a script (that's very much a WIP!)
```shell
export TEMP_SITE="../temp-site"
rm -rf $TEMP_SITE
mkdir -p $TEMP_SITE
cp -R site/build/ $TEMP_SITE/site
cp -R ./img/ $TEMP_SITE/img
cp ./index.html $TEMP_SITE/index.html
cp ./app.css $TEMP_SITE/app.css
cp README.md $TEMP_SITE/README.md
cp CHANGELOG.md $TEMP_SITE/CHANGELOG.md
```

3. Switch to the `main` branch
4. Replace everything in the `site` directory of the main branch with contents of the copy of the `build` directory
5. Replace `index.html` and `app.css` files
6. Push to github
7. Create a git tag for the release. 

Whenever new or changed files are pushed to github, then the "Live" site available here will show the changes: 

[https://fahrenheitrobotics.org](https://fahrenheitrobotics.org)


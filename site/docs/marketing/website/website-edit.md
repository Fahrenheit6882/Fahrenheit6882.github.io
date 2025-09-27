---
sidebar_label: 'How to make changes'
sidebar_position: 3
---

# How to make changes

Make sure that you are viewing the `docusaurus` git branch. 

:::note
TODO: Add a section to [git docs](../../software/git.mdx) to show how to list and change branches
:::

Edit `index.html` to change the Homepage. 

Or, edit any of the files under the `site` directory to and and update the Guides and Blogs. 

For example, you could add a whole new guide by creating a new folder under the `site/docs` folder. And then add some markdown files under the new folder. See the `site/docs/website` folder for a sample. 

## Start a Development Server to see your changes

After you edit the files in VS Code installed on your computer, you can run a server that will serve the site locally on your computer. This is great for testing and to make sure the changes look good before publishing them out to the live site. 

In order to build the website you'll need a tool called `yarn`. To install yarn, follow [our team guide here](../../software/javascript.mdx). 

:::note
Node.js 23.x didn't work for me, I run into a known issue of [Unexpected end of JSON input](https://github.com/facebook/docusaurus/issues/10684). `npm use 22.3` works for me. 
:::

Once you have `yarn` installed, use the following commands to build and start a server that will serve the site on your computer: 

```shell
cd site
yarn
yarn start
```

If all goes well, a browser window should open to show the site. You can also open a browser and go to [http://localhost:3000/site/docs/welcome](http://localhost:3000/site/docs/welcome). 


## Make quick changes from your browser

If needed, it's also possible to make quick changes directly from your browser on github.

:::warning
It's easy to break the website using this technique. It's much better to test changes on your own computer first before publishing to the live site. Making quick changes as described below should only be done for small spelling or style fixes, or when it's very inconvenient to use VS Code. 
:::

The files in the `main` branch are what are displayed on the public website. Click to open any files in the `main` branch and then click the pencil icon to make changes. When finished, click the `Commit Changes` button. 

:::warning
Any changes you make will be overwritten the next time we deploy the site. So make sure to also make your changes to the `docusaurus` branch. 
:::

For example, click to open [index.html](https://github.com/Fahrenheit6882/Fahrenheit6882.github.io/blob/main/index.html) in your browser, and then click the pencil icon in the upper left to [edit the file in place](https://github.com/Fahrenheit6882/Fahrenheit6882.github.io/edit/main/index.html). Make your changes and click `Commit Changes...` 

After a few minutes, your changes will be live.  
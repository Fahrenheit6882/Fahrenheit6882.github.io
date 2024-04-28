---
sidebar_label: 'How to make changes'
sidebar_position: 3
---

# How this site is organized

The `index.html` and `app.css` files at the root of our git repository are displayed in your browser when you browse to [https://fahrenheitrobotics.org](https://fahrenheitrobotics.org)

You can change these files by simply opening them in an editor (such as VS Code). When they are saved and commited back to our git repository, then they will be hosted by [Github Pages](https://pages.github.com/) and available for everyone on the internet to see. 

It is also possible to add more `html` pages as needed and either link to them from `index.html`, or create subfolders that will appear as paths in our url. 

However, everytime you want to create a new `html` page, you will need to copy the existing `index.html`. Let's say for example that we were to create two more html files, one named `sponsors.html` that would display all of our sponsors, and a second named `calendar.html` to show our team calendar. 

That could work fine. But, then imagine we want to update the links displayed across the top of our website. We would need to edit all 3 html files (`index.html`, `sponsors.html`, and `calendar.html`) to add a new link. You can see how this will become tedious!

So, we're using a project call [Docusaurs](https://docusaurus.io/) to help us manage the them and look and feel of our site. 

Docusaurus is a content management system and a static site generator. 

All the files found inside the [site](../../../site/) directory are part of [Docusaurs](https://docusaurus.io/). 

## Download and install VS Code

All the files in this repository are simple text files. You can use any text editor program you want to change these files. But, we suggest you use VS Code, which is a editor program built specficially to edit source code text files. 

Learn how to Download and Install VS Code here: 

https://code.visualstudio.com/docs/introvideos/basics

## Download files using VS Code and git

Once you have VS Code installed, you will need to download the files you see here to your computer and then open the files inside your editor.

We can click on each file and click download, but that is tedious and it will also be difficult to know if someone else has changed a file since we downloaded our copy. 

There's a program called [git](https://git-scm.com/) that was invented to help people edit text files together. 

When you download all files from a github repository to your own computer using `git`, that's called `cloning` a repository. 

:::note
`git` is an example of a Source Control Manager. There are other source controls managers as well, such as [subversion](https://subversion.apache.org/) and [perforce](https://www.perforce.com/). But, these days, `git` is the most popular. 
:::

It's possible to use `git` by itself (outside of VS Code), but we can also use `git` right from inside VS Code which is a little easier. 

The first time you open VS Code, you'll see a page like the image below. Click on `Clone Git Repository` as shown here: 

![VS Code Git Clone](img/readme-vs-code1.png)

:::note
In 2008, a group of people thought it would be cool if they could share their `git` repositories online and so they created `Github`. There is another popular site for sharing git repositories called [Gitlab](https://about.gitlab.com/)
:::

There are many repositories on github. Here's the url for our team's website's `git repository`:

[https://github.com/Fahrenheit6882/Fahrenheit6882.github.io.git](https://github.com/Fahrenheit6882/Fahrenheit6882.github.io.git)

Copy and paste that link into VS Code like this: 

![VS Code Git Clone URL](img/readme-vs-code2.png)

:::note  
Our Github Repository is private. Please let a mentor know if you need access. 
:::

The next step is to choose which folder on your computer to download the files into. I created a folder named `website`. You can create whatever folder that you want. After you create and choose the folder where you want to save the files, click `Select as Repository Destination`. 

Click the buttons to say that you trust this code, and that's it! You now have the code for our website open in VS Code. 

## Make quick changes from your browser

If needed, it's possible to make quick changes directly from your browser on github.

:::warning
It's easy to break the website using this technique. It's much better to test changes in VS Code on your own computer first before publishing to the live site. Making quick changes as described below should only be done for small spelling or style fixes, or when it's very inconvenient to use VS Code. 
:::

Click to open any files in github and then click the pencil icon to make changes. When finished, click the `Commit Changes` button. 

For example, click to open [index.html](https://github.com/Fahrenheit6882/Fahrenheit6882.github.io/blob/main/index.html) in your browser, and then click the pencil icon in the upper left to [edit the file in place](https://github.com/Fahrenheit6882/Fahrenheit6882.github.io/edit/main/index.html). Make your changes and click `Commit Changes...` 

After a few minutes, your changes will be live.  
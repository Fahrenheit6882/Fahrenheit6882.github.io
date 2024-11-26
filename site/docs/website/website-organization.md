---
sidebar_label: 'How the site is organized'
sidebar_position: 6
---

# How this site is organized

There are 2 parts to our site: 

1. [The Home Page](#home-page)
2. [All the other stuff (Guides, etc)](#guides)

## Home Page

The [index.html](https://github.com/Fahrenheit6882/Fahrenheit6882.github.io/blob/docusaurus/index.html) and [app.css](https://github.com/Fahrenheit6882/Fahrenheit6882.github.io/blob/docusaurus/app.css) files at the root of our git repository are displayed in your browser when you browse to [https://fahrenheitrobotics.org](https://fahrenheitrobotics.org)

You can change these files by simply opening them in an editor (such as VS Code). See [this page](/site/docs/website/website-edit) for more details on how to edit the site. 

It is also possible to add more `html` pages as needed and either link to them from `index.html`, or create subfolders that will appear as paths in our url. 

However, everytime you want to create a new `html` page, you will need to copy the existing `index.html`. Let's say for example that we were to create two more html files, one named `sponsors.html` that would display all of our sponsors, and a second named `calendar.html` to show our team calendar. 

That could work fine. But, then imagine we want to update the links displayed across the top of our website. We would need to edit all 3 html files (`index.html`, `sponsors.html`, and `calendar.html`) to add a new link. You can see how this will become tedious!

So, we're using a project call [Docusaurs](https://docusaurus.io/) to help us manage the other parts of the site. 

## Guides

The [Guides](https://fahrenheitrobotics.org/site/docs/welcome) section of our site is built using [Docusaurs](https://docusaurus.io/) which is a content management system and a static site generator. 

A `content management system` is a fancy term to describe software that helps you write and manage blog posts, guides, tutorials, images, and other "content". 

A `static site generator` is software that is capable of taking files such as [markdown](https://www.markdownguide.org/) and compile them into `html`, `css`, and `javascript` which can then be served to browsers. 

So, all the files found inside the [site](../../../site/) directory are part of [Docusaurs](https://docusaurus.io/). 

We will be able to use Docusaurus to easily publish blog posts and guides. 


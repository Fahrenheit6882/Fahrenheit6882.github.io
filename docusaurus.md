# Docusaurus

[Docusaurus](https://docusaurus.io/) is a [static site generator](https://en.wikipedia.org/wiki/Static_site_generator). This is a fancy way of saying that it's a program that is used to to produce `html`, `css`, and `javascript` code based on a bunch of text files you have written to describe how you want your website to look and behave. 

## Node.js

Docusaurus is written using Javascript. Javascript code must be interpreted in order to do stuff. A web browser can interpret and execute javascript code. Node.js can also interpret and execute javascript code. 

In order to use Docusaurus, you must have Node.js installed on your computer. 

## How I setup docusaurus for the first time

I ran run the following command to install docusaurus (this requires Node.js and `npm`)

```
npx create-docusaurus@latest site classic --typescript
```

## How to start development server

Starting a [development server](https://docusaurus.io/docs/installation#running-the-development-server) is a convenient way to host a full copy of the website on your laptop. This way, you can make changes to files and then immediately see what the new site will look like. No one else will see the changes until you deploy the changes to github.

To start a development server, run the following: 

```
cd site
npm run start
```


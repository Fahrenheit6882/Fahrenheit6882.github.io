---
sidebar_label: 'Web Technologies'
sidebar_position: 5
---

# Website Technologies 

## HTML 

HTML stands for `Hyper Text Markup Language`. 

`html` files are text files that contain html source code. These text files end in `.html` and contain plain text that must match the html syntax [defined here](https://www.w3.org/TR/2011/WD-html5-20110405/). 

HTML uses a concept of `tags`. Here's an example of a Heading (`<h1>`) tag and a Paragraph (`<p>`) tag: 

```html
<h1>This is a Heading</h1>
<p>And this is a paragraph</p>
```

If you were to copy and paste that text into a file named `whatever-you-want.html` and then open that file in your favorite browser, you will see a heading and a paragraph. 

Here's a tutorial to learn about HTML: https://www.w3schools.com/html/default.asp

## CSS

CSS stands for `Cascading Style Sheets`

`css` files are text files that contain css source code. These text files end in `.css` and contain text that must match the css syntax [defined here](https://www.w3.org/TR/CSS2/) 

CSS is used to control what the html should look like. For example, we could change the colors and size the HTML above using the following `css`. In this example, we set the background color of the Heading to `red`, and we change the font size of the paragraph to `20px`: 

```css
h1 {
    background-color: red;
}

p {
    font-size: 20px; 
}
```

Here's a tutorial to learn about CSS: https://www.w3schools.com/css/default.asp

## Markdown

HTML and CSS are great, but it can be a bit tedious to write guides like this using html and css. Mark down is another document format that makes it easier to write content for websites. 

`Markdown` files are text files that end in `.md`. Markdown files contain text that must match the css syntax [described here](https://www.markdownguide.org/basic-syntax/)

For example, we can represent the same HTML above using markdown: 

```markdown
# This is a Heading

And this is a paragraph
```

Markdown files are then converted to html, which can then be understood by a web browser. 


## Javascript

So far, all the technologies we have discussed are simple ways to describe static content. When you need to make things come alive, you need more power :-) 

Javascript is a full programming language. This means that you can use javascript to write just about any program that you can dream up. Other popular programming languages include: `Java`, `C#`, `Go`, `Python`, `Php`, and lots of others. 

Web browsers can run "client side" javascript. This means that they can't quite take advantage of the full power of javascript, but they can run a lot of it. 

Node.js is another javascript runtime environemnt. Node.js can run all of javascript completely unrestricted. We often call this "server side" javascript. 

As you can imagine, if we allowed Web Browsers to run any program, it would be very difficult to stop hackers from running viruses on everyone's computers. That's why they are limited as to what pieces of javascript they're allowed to run. 

See [our team's guide here](../../software/javascript.mdx) on how to setup your computer to run javascript. 

## Version Control

Version Control is a strategy to allow multiple people to collaborate and edit the same files and track changes to files over time. [Here's an overview about Version Control](https://www.atlassian.com/git/tutorials/what-is-version-control)

## Git

Git is a version control system. [Here's a tutorial about Git](https://www.w3schools.com/git/default.asp) 





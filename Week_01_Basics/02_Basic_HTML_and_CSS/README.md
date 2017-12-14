# Intro to HTML and CSS

### Learning Objectives
- Understand what HTML is.
- Understand what HTML elements are and how they are used to structure web pages.
- Identify HTML elements within an HTML document.
- Recall some common HTML tags.
- Use HTML elements to create a simple web page.
- Understand what CSS is and how styles "cascade".
- Understand what CSS selectors are.
- Recall basic CSS properties.
- Use CSS selectors and basic CSS properties to style a simple web page.

## HTML - The blueprint language of web pages

What happens when you visit a website? Every time you enter a URL into the address bar of your web browser or click on a link, a type of message called an HTTP request gets sent from your computer across the internet to another computer called a web server. The job of a web server is to respond to this message by sending back an HTTP response which contains files that tell your web browser how to create the web page and display it to you.

Some of these files sent back by web servers contain a type of code called [HTML](https://en.wikipedia.org/wiki/HTML). HTML stands for Hypertext Markup Language. You can think of HTML files as the blueprints for web pages. Just as architectural blueprints provide construction teams with detailed information on how to structure buildings, HTML files provide your web browser with detailed information on how to structure the graphical elements of the web pages you request. When your web browser receives an HTML file from a web server, it reads the HTML code contained within the file and uses the instructions described by the code build your web page.

![web request](https://img.webnots.com/2013/06/HTTP-Request-and-Response-Over-Web-1.png)

## HTML Elements - the building blocks of web pages

Let's look at some simple HTML code.

```html
<html>
  <head>
    <title>My first website</title>
  </head>
  <body>
    <h1>Hello, world</h1>
  </body>
</html>
```

If you have never seen HTML before, the code above will probably seem foreign and meaningless. But rest assured, HTML is quite easy to understand once you are familiar with *HTML elements*. HTML elements are the building blocks that we use to construct HTML documents.

### HTML element anatomy

#### Tags

An HTML element must contain at least one "tag". You can think of tags as the outer shell of an HTML element. Just like the shell of an egg is part of the egg itself, the tags of an element are also part of the element. We denote tags by using angle brackets - `<` and `>` - to surround the "tag name". If we consider our code above, the first tag we see looks like this:

```html
<html>
```

Remember, the tag name is the text in between the opening and closing angle brackets of a tag. According to that rule, we would call this an "html tag".

There are two types of tags which we will use in HTML documents to create HTML elements.
1. Opening tags
2. Closing tags

The html tag we just looked at is an example of an *opening tag*. Opening tags are used to signify the beginning of an element.

If we look at the bottom of our HTML code, we can see there is another html tag, but it has a forward slash immediately before the tag name. This type of tag is called a *closing tag* and is used to signify the end of an element.

#### Content

The content of an HTML element is simply everything between the opening and closing tags of that element. If we look at our code, we will notice that the content of an HTML element can include plain text as well as other HTML elements. Placing elements inside of one another is a concept known as "nesting", and it is how we can build rich user interfaces with only one class of building block.

![html element anatomy](https://mdn.mozillademos.org/files/9347/grumpy-cat-small.png)

### Check for Learning

Use your new understanding of HTML element anatomy to:

1. Count the total number of HTML elements in the code snippet above.

2. Count the total number of elements that are nested inside of at least two other elements.

##### Answers

1. You should have counted five elements - one `html` element, one `head` element, one `title` element, one `body` element, and one `h1` element.

2. There are two elements that are nested inside of at least two other elements. The `title` element is nested inside of the `head` element, which is nested inside of the `html` element. The `h1` element is nested inside of the `body` element, which is also nested inside of the `html` element.

## HTML semantics and common tag types

All HTML files need at least three elements in order to be properly displayed by a web browser. There must be exactly one `html` element and it must not be nested within any other element. The `html` element must contain exactly two "children" elements - a `head` element and a `body` element. The content of the `head` element contains metadata about the web page while the `body` element contains instructions for creating the visual elements of the web page. All of the content that we want to display to the end user must be located within the `body` element.

There exist [many different types of tags](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) which we can use to display information on our websites. The plethora of tag types allows us to incorporate semantic meaning into the code we write. The concept of semantic HTML is pretty straightforward - use a tag type that properly describes the content it will be wrapping. Let's look as some examples of common HTML tag types to get a better understand of how we can use various tags to create semantic meaning.

### Header tags - `h1`, `h2`, `h3`, `h4`, `h5`, `h6`

Header tags should be used to encapsulate content that is intended to serve as a heading of some sort. There are six header tags - `h1` through `h6` - h1 being the largest and h6 being the smallest. If I wanted to add a header with a subheading, I might use an `h1` for the main header and then a smaller header tag (possibly h2 or h3) for the subheading.

```html
<h1>This is the heading</h1>
<h3>This is the subheading</h3>
```

### Paragraph tags - `p`

Paragraph tags should be used to encapsulate long-form text. You would use multiple paragraph tags to break up a long block of text into various paragraphs.

```html
<p>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</p>
<p>
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
```

### Anchor tags - `a`

Anchor tags are used to create hyperlinks (links) to other web pages. An anchor element that links to google.com might look like this:

```html
<a href="https://google.com">Visit Google</a>
```

You will notice that the opening anchor tag looks different than other tags we've seen before. after the tag name, this is this code: `href="https://google.com"`. This known as an HTML element ***attribute***.

An attribute is a bit of code that gives the element some additional information about how to work properly. All attributes have two parts - 1) the attribute name which is located on the left of the equals sign and 2) the attribute value which is located inside the quotes on the right of the equals sign.

In order for anchor tags to work as links to other web pages, we need to include an `href` attribute in the opening tag. The value of the href attribute will be the the URL of the web page we want the link to redirect to. In our anchor tag above, the value of the href attribute is `https://google.com`, so when a user clicks that link their browser will navigate to that web page.

### Image tags - `img`

An image tag is used to display an image. Like anchor tags, image tags need to have an attribute to work propery. The source attribute (`src`) of image tags tells the web browser where on the internet it must go to find the image you which to display on your page. The value of the source attribute can either be a URL or the relative path to an image if it is coming from the same web server.

```html
<img src="http://thecatapi.com/api/images/get">
```

Notice that the image element directly above does not contain a closing tag. There are many HTML elements that can exist with only opening tags because they do not have any content. In order to display an image, the only information we need is placed in the opening tag as an attribute.

### Div tags - `div`

Divs are generic tags that are mostly used for organizational purposes. Let's say that you're creating a web page that has a bunch of user reviews for a product. Each review might have an `h1` tag for the review title, an `h5` tag for the reviewer's name, and a `p` tag for the review text itself. If you have three reviews in a row, your code might look something like this.

```html
<h1>Awesome product!</h1>
<h5>Lola M.</h5>
<p>I love this thing. It makes life so easy.</p>
<h1>I've had better</h1>
<h5>Rachel B.</h5>
<p>Just okay. Nothing special.</p>
<h1>Life changing</h1>
<h5>Jamal Y.</h5>
<p>I'm a completely different person after using this.</p>
```

As you can see, it's kind of difficult to tell where one review ends and the next begins. As we add more and more reviews, this problem only grows. To help us better organize this code, we can use div tags to wrap all of the elements that make one review, so we just have one element that represents each review.

```html
<div>
  <h1>Awesome product!</h1>
  <h5>Lola M.</h5>
  <p>I love this thing. It makes life so easy.</p>
</div>
<div>
  <h1>I've had better</h1>
  <h5>Rachel B.</h5>
  <p>Just okay. Nothing special.</p>
</div>
<div>
  <h1>Life changing</h1>
  <h5>Jamal Y.</h5>
  <p>I 'm a completely different person after using this.</p>
</div>
```

Now that's a little easier to read! There is no limit to how intricate you can get using divs and other structural elements to make your code cleaner and easier to reason about.

### Additional Elements

There are far too many HTML element types to cover in this lesson document. Rather than me repeating technical documentation, take a few minutes to look through a [comprehensive reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) of all of the element types available to you.

## Independent Practice - Cookie Recipe

Now that you have an understanding of HTML and HTML elements work, it's time to create a web page.

1. Create a directory in your filesystem called `cookie-recipe` and create an `index.html` file inside of it.
2. Copy and paste the following code into the file:
  ```html
  <html>
    <head>
      <title>How to make cookies</title>
    </head>
    <body>

    </body>
  </html>
  ```
4. Using at least five distinct element types and at least ten elements in total, create a web page that provides instructions for how to make cookies. (If you're not a baker, just make up the steps). Remember, all of your elements will be nested within the `body` tags.
5. After saving your file, view your work by right clicking the file and choosing the option to view in your browser.

## CSS - Cascading Style Sheet

CSS the the language we use for front end developers use to style the elements of a web page. HTML and CSS work in tandem to provide both the structure and appearance of the webpages we view.

### Linking a CSS file

In your cookie-recipe directory, create a file called `main.css`. Then add the following line inside of the `head` element of your `index.html` file.

```html
<link rel="stylesheet" type="text/css" href="main.css">
```

This will tell your web browser to import the `main.css` file and apply the style that we will define within the file.

### Defining styles for elements

When we define styles for an element, there are three critical pieces of information we must provide: 1) a `selector` that indicates which element we want to style, 2) the property name and 3) the value for that property.

Let's start out by changing the font of our webpage. Open up your `main.css` file in your editor and add the following code.

```css
body {
  font-family: Helvetica;
}
```

##### Selectors and the "C" in CSS

The `body` keywork in the CSS file is known as a CSS selector. Here we are defining styles for the `body` element. Because of this, ever element nested within the body element will also have the style that we define within these curly braces `{}`. This is because style "cascade" down the element tree to all children of the elements we define styles for. Styles inherited form parent elements can be overwritten by defining styles explicitly.

##### CSS properties and values

CSS properties are things like background color, text color, text size, font, margin and padding. In our example, the property is `font-family` and the value is `Helvetica`. The possible values for a property are specific to the property itself. A comprehensive list of basic CSS properties can be found [here](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference). To find possible values for each property, Google `CSS [property name] examples`.

## Independent Practice - Styling your cookie recipe

Apply three styles (property-value pairs) to five elements in your cookie recipe site. Try to use a wide variety of properties to get practice with the possible values.

# Lesson 03 - Box Model & Nested HTML Elements

### LEARNING OBJECTIVES
*	Define CSS Box Model, and demonstrate the ability to properly manipulate the "box" around tags.
*	Select nested elements to apply styling.
*	Apply inline and block attributes to a page.

## The CSS Box Model
Every visible HTML element that is rendered to the viewport of a web browser is represented as a box. If you open up the developer tools for your web browser and inspect the HTML elements by hovering over them in the `Elements` tab, you will see their corresponding graphical elements highlighted in the viewport.

There are four components to each element's box:

* **Content** - The area containing the content (text and/or child elements) of an element.
* **Padding** - The area between the content edge and the interior border edge.
* **Border** - The area between the padding of an element and the space outside of the element.
* **Margin** - The area between an element and other elements and/or the edge of the viewport.

For a more detailed analysis of the box model components, see this [reference document](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model).

## Inline VS Block Elements
Although every element displayed in the viewport is represented as a box, not all boxes behave the same. Boxes can be displayed in different ways. The two most common display types are `block` and `inline`.

#### Block Elements
Block elements can be thought of as "structural" elements. They are used to section off content and fill the entire width of their parent element by default. Some examples include `div`, `p`, `main`, `h1` - `h6`, `section`.

#### Inline Elements
Inline elements are meant to be displayed within text. They allow you to apply semantic meaning and/or styles to sections of text that appear within block elements. Some examples include `a`, `em`, `strong`, `span`.

For a more detailed analysis of block and inline elements, see this [reference document](https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements).

## Sizing and Units of measure in CSS
Spacial manipulation is a common practice of a front end web developer. We are regularly altering the sizes of text, content boxes, paddings, borders, and margins. There are four primary units of measurement that we can utilize to affect the sized of various elements.

- **Pixels [px]** - A pixel is equal to one dot on the device screen.
- **Ephemeral units [em]** - A unit based on the default font size. If font size is 16px, 1em = 16px.
- **Root ephemeral units [rem]** - Same as `em`, but with reference to the default font size of the root element, not the immediate element.
- **Percentages [%]** - Percent of the parent element.

For a more detailed analysis of these units of measurement, see this [reference document](https://www.webhostdesignpost.com/webdesign/css-sizing-differences.html)

## Styling Nested Elements
There will be many situations in which we will want to style an element type differently depending on its context. There are a few ways of modifying our HTML elements or CSS selectors to accomplish this. Today, we will be examining a method of leveraging hierarchical relationships between elements to apply styles to them.

#### Child Combinator
To select the child of an element, we will use the `>` operator. For example. If we want to apply a style to a paragraph tags that are children of div tags, we would use the following selector:

```css
div > p {
  margin: 10px;
}
```

If we wanted to style span tags that are children of p tags that are children of divs, we would use the following selector:

```css
div > p > span {
  padding-top: 1.2em;
}
```

If we want to style p tags that are decendents of div tags but are not necessarily direct children, we would use the following selector:

```css
div p {
  border: 1px solid pink;
}
```

For a more detailed analysis of CSS selectors and combinators, see this [reference document](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)

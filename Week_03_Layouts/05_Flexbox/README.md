# Lesson 05 - Flexbox

### Learning Objectives
- Define what Flexbox is and describe how it helps simplify layout creation.
- Become familiar with most common Flexbox CSS properties.
- Play Flexbox Froggy 🐸 to practice using Flexbox CSS properties.
- Recreate layouts layouts from design specs using Flexbox.

#### Flexbox - An alternative to floating

Until now, If we wanted to arrange elements side-by-side, we had to rely on the CSS `float` property. As we have seen, floating, although effective, comes with some inhibiting limitations and quirks. Flexbox is a relatively new set of CSS properties that provide us with virtually all of the same conveniences of floating without the many drawbacks.

## The Flex Parent

Let's say we're after the following layout:

![flex example](https://mdn.mozillademos.org/files/13408/flexbox-example2.png)

And we have the following HTML:

```html
<section>
  <div>
    <h1>First article</h1> ...
  </div>
  <div>
    <h1>Second article</h1> ...
  </div>
  <div>
    <h1>Third article</h1> ...
  </div>
</section>
```

If we want the divs inside of the section to be arranged in columns next to each other, we just have to assign a Flexbox property to their parent (the section)

```css
section {
  display: flex;
}
```

## Flex Items

The Flex items are all of the children of the Flex parent that are being arranged. There are many Flex properties that we can utilize to manipulate the arrangement of Flex items.

### `flex-direction`

###### `row` or `column`

This is the property which dictates if items are lined up horizontally or vertically. *Default: `row`*

It is also important to note the when we use the `display: flex;` property on the Flex parent the "main axis" (the axis that is defined by the flex-start and flex-end edges) is the horizontal or row axis. When the `flex-direction` is changed to column, then the start and end edges are moved to the top and bottom and the main axis is reassigned to the vertical access.

![flex axis](https://mdn.mozillademos.org/files/3739/flex_terms.png)

### `justify-content`

###### `flex-start`, `flex-end`, `center`

This is the property which dictate where in the flex parent the flex items are going to be located.

## Independent Practice - Flexbox Froggy

[How far can you get?!](http://flexboxfroggy.com/)

## Layout Lab

This week you will be recreating the same layouts from last week utilizing the Flexbox set of CSS properties instead of the `float` css property.

As before, the all of the designs are provided in the `layout.pdf` file in the starter_code directory. Starter code has also been provided for designs 2 and 3. You will have to create HTML and CSS files for the more advanced designs (4 and 5).

Solutions have been provided for designs 2 and 3. Consult with Paris if you would like to discuss your approach or solution to designs 4 and 5.

## References

- [Flexbox cheat sheet](http://flexbox.malven.co/)
- [Flexbox full walkthrough](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)
- [Flexbox Froggy](http://flexboxfroggy.com/)

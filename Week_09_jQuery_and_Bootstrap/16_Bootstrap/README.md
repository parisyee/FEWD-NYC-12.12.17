# Lesson 16 - Bootstrap

### Learning Objectives
- Identify the biggest, most over arching concepts of the Bootstrap library.
- Discuss syntax for most common utility helpers.
- Become familiar with the organization of Bootstraps documentation.

## A CSS and Javascript Library

We are already familiar with the concept of a Javascript library thanks to jQuery. Bootstrap is a very popular CSS and Javascript library created by Twitter and now open sourced.

Bootstrap is extremely successful because it leverages CSS classes to provide a robust set of styling tools that can be applied to any element. It is very flexible and extremely consistent. Global values for font size and dimensions of padding and margin are utilized to maintain an even look and feel throughout all of your elements that are using Bootstrap classes.

There are a few main 'umbrellas' or 'sections' of classes that address different needs. We will discuss four of them.

## Layout

The most important part of the `Layout` umbrella are the grid utilities. Bootstrap made its debut before Flexbox or CSS Grid really took off. It could be argued that the grid is really what made Bootstrap famous.

Each grid is a collection of row which have in them a collection of columns. Column elements within a row will appear horizontally and we can easily control the relative sizes of the columns by assigning values between 1 and 12. A row consists of 12 columns.

## Content

The classes provided under the `Content` umbrella all pertain to the manipulation of the content of an element. This includes typography, text alignment and other text utilities. There is some overlap of responsibilities between the `Content` section and the `Utilities` section when it comes to styling text. It's best to review both sections to make sure you finding the perfect match for your needs.

## Utilities

The classes provided under the `Content` umbrella all pertain to the manipulation of an element itself. These are things like margin, padding, border, color and display.

## Components

So far, all of the classes have provided very granular modifications - a margin here, a padding there - but for the most part, we have still been responsible coming up with the over all design and structure of the elements on our pages.

Component go one step further. These are elements that work in tandem with each other to produce a structure that has been predefined. You can think of components as complex templates for complete UI pieces.

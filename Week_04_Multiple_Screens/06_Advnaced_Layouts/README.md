# Lesson 06 - Multi-Page Website Development

### LEARNING OBJECTIVES

- Describe the concept of “relative paths” and how we use them to reference files in our web development projects.
- Utilize anchor tags to allow users to navigate between website pages.
- Improve the organization of a codebase by breaking our CSS up into multiple files.
- Recreate a sophisticated multi-page website from a design spec.

## Today's Project

Today we will be creating a website with multiple pages linked together. Open up the `index.html` file in the `solution/startup_matchmaker_solution` directory and take a few minutes to familiarize yourself with the site we will be building today.

For your convenience, there are also screen shots of the finished site in the `starter_code/startup_matchmaker` directory to refer to.

## Lecture Notes

[View slides here.](https://docs.google.com/presentation/d/1DYrFQqwQdtNFoFIhGp59bvzIH1rZtbxCdAlRSvgxzhQ/edit?usp=sharing)

## Independent Practice 1

1. Create a new GitHub repo called `startup_matchmaker` and clone it to your local machine.

2. Create the following files:
  - `index.html`
  - `blog.html`
  - `team.html`
  - `how.html`
  - `developers.html`
  - `designers.html`

3. In your `index.html` file, add HTML boilerplate code.

4. Create a header navigation bar with links to the five other pages and a logo image linking to the home page (`index.html`). * **Note:** Do not add any styles yet. Your header should be purly functional at this point. We will take care of styling in the next section.*

5. Add an `h1` tag with the content "INDEX" below the header element.

6. Copy and paste the header navigation to the five other pages and include an `h1` to indicate which page you are currently viewing.

## Independent Practice 2

1. Create a `header.css` file.

2. Link the `header.css` file to your `index.html` file.

3. Add styles for the header navigation. Try to mimic the mock up as closely as possible.

4. Once you are satisfied with your header styles, link your `header.css` file to the rest of your pages.

5. Create a file called `footer.css` and follow the same steps for styling the footer and linking the `footer.css` file to all of the HTML pages.

6. You might have noticed there there are a bunch of style rules - header, footer, general things like font, etc. - that you want to have present on each page. In these cases, it is acceptable to consolidate these CSS rules into a single file (possibly called `main.css`). However, keeping them in separate files might still be preferred if it keeps the size of individual files smaller and easier to reason about. We are now getting into the realm of personal preference. 

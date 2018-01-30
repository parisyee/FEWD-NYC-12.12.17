// 1
//- Select the `<body>`
console.log(document.body);

// 2
//- Select the `<header>`
console.log(document.querySelector('header'));

// 3
//- Select all of the elements with class "quote"
console.log(document.querySelectorAll('.quote'));

// 4
//- Select all of the subject elements
console.log(document.querySelectorAll('.subject'));

// 5
//- Select the navigation links
console.log(document.querySelectorAll('nav > ul > li > a'));

// 6
//- Select all the quotes in the "life" section.
console.log(document.querySelectorAll('section.subject.life > article.quote'));

// 7
//- Using relative selection, select the `<p>` element containing the second Mark Twain quote
console.log(
  document.
  body.
  children[1]. // main
  children[1]. // section.subject.life
  children[2]. // second article
  children[0]. // blockquote
  children[0]  // p
);

// 8
//- Do the same using a query selector
console.log(document.querySelector('blockquote#mark-twain-second > p'));

// 9
//- Select the 'Quotes About Motivation' heading
console.log(document.querySelector('section.motivation > h2'));

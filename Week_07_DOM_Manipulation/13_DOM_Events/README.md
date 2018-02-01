# Lesson 13 - DOM Events

### Learning Objectives

- Utilize native javascript event listeners to execute code at specific times.
- Respond to user input by manipulating the DOM.

## DOM Events

DOM Events are sent to notify code of interesting things that have taken place. Each event is represented by an object which is based on the Event interface, and may have additional custom fields and/or functions used to get additional information about what happened. Events can represent everything from basic user interactions to automated notifications of things happening in the rendering model. - [MDN](https://developer.mozilla.org/en-US/docs/Web/Events)

Usually we will be listening for user interactions in the form of mouse and keyboard events - clicking on an element, typing in a form input, etc.

### Event Listeners

Event listeners functions that allow our programs to listen for specific events. To set up an event listener, we will use the `addEventListener` method on an element.

```javascript
var button = document.querySelector('button');

button.addEventListener('click', function() {
  console.log('clicked!');
});
```

In this code, we are storing a reference to the button in the `button` variable. Then we are calling the `addEventListener` method on the button element. This method takes two arguments - the event that we want to listen for, and a function to execute when the event occurs.

When out page loads and out javascript file is evaluated, the event listener will be set up. Then, whenever we click on the button, the string `'clicked!'` will log to our console.

### Event Handlers

Event handlers are the functions that we provide as the second argument to event listeners. These functions are all the "stuff we want to happen" when an event occurs. In our previous example, our event handler was defined inline as an anonymous function. We can also define event handlers as named functions. Here's our previous example using a named function.

```javascript
var button = document.querySelector('button');

function logMessage() {
  console.log('clicked!');
}

button.addEventListener('click', logMessage);
```

Notice that we are not calling the function, we are only passing it into our event listener by name. It is not our job to call event handlers. The javascript runtime will call them when the events we are listening for occur.

#### The `event` object

When our event handlers are called, they are actually called with an argument. This argument is the event object that is created when an event occurs. The object represents the event and has properties and values that are unique to the event that they represent.

```javascript
var button = document.querySelector('button');

function logEvent(event) {
  console.log(event);
}

button.addEventListener('click', logEvent);
```

> Note: You do not have to include the `event` as a parameter in your event handler functions. The is only necessary if you need to gather any information about the event itself!

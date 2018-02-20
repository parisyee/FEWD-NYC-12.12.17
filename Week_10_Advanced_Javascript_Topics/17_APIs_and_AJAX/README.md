# Lesson 17 - API calls and AJAX

### Learning Objectives
- Explain what a REST API is and how API calls differ from the HTTP requests we're used to.
- Define JSON.
- Make requests to API endpoints using our web browser address bar.
- Add data to our requests using query strings.
- Use AJAX to make API requests.
- Use jQuery to display API response data to the DOM.

## A New Paradigm - Making Web Requests with Javascript

Don't send HTML. Just send data and let your javascript code do all of the rendering.

## What is an API?

Application Programming Interface. A set of rules for how to use a system. We when use the temp 'API' we usually mean [REST API](https://restfulapi.net/).

## JSON - Javascript Object Notation

A string of text that is in in the form of a Javascript object which, upon reaching our javascript code, can be converted to a javascript object. This is one way we send raw data across the web.

## Independent Practice 1 - Our first API call

[Starter Code](./starter_code/github_users)

## Query Strings - Adding data to our API calls

Often, we will have to send some additional data along with our API requests in order for them to be processed properly.

Let's take a look at the [News API](https://newsapi.org/). When we make requests to this API we have to include our API key so the server knows who the request is coming from. This is vary common to keep servers more secure.

First, register for an API key.

Now we need a way to provide that API key when we make a request to the news api servers. One way to provide data in a request is in the form of a [query string](https://en.wikipedia.org/wiki/Query_string).

Query strings start with a question mark (`?`) after the url. A query string is a set of key-value pairs which are also known as parameters. Each value is assigned to its key via an `=` sign, and we use `&` to delimit pairs. So if we want to make a request for top headlines, we would construct a url like this.

```
https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_API_KEY_HERE
```

Notice there are two (2) parameters in this query string - `country` and `apiKey`.

## Independent Practice 2 - Adding data with query strings
> NOTE: Activation of the API key for open weather takes 10 minutes

Complete **part 1** of the [weather app](./starter_code/weather_app).

## `$.ajax` - Making API calls with Javascript

```javascript
$.ajax({
  url: 'https://api.example.com/resource',
  method: 'GET'
}).done(function(data) {
  console.log(data);
});
```

For now, we will always use `'GET'` as our request method.

The `.done()` function takes a function as an argument. This function describes what we want to do when when the API response comes back. When it is called, a response data object will be provided as an argument, so we want to set up our callback with a parameter to represent that object so we can do stuff with it within the function.

## Independent Practice 3 - Using AJAX and jQuery to fetch and present data

Complete **part 2** of the [weather app](./starter_code/weather_app).

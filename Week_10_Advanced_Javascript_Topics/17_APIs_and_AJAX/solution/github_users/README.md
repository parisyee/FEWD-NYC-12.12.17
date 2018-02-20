# GitHub API Practice

We are going to use the GitHub API to experiment with making api calls. Remember, a call to an API server is just a regular web request and only differs in the type and structure of the data it returns - JSON strings instead of HTML files. Because if this fact, we can make our first API calls by entering URLs into our browser address bar.

### Instructions

1. Read the documentation for [root endpoint](https://developer.github.com/v3/#root-endpoint). This will be the 'base' of all of the urls we construct to request data from the GitHub api.

1. Read the documentation for [getting a single user](https://developer.github.com/v3/users/#get-a-single-user)

1. Construct a url to get user data for your own GitHub user account. Paste that url into the address bar of your browser. You should get a JSON string as a response.

1. Copy the JSON from your browser viewport and paste it into the `index.js` file. Store this in a variable of an appropriate name.

1. Use `console.log` to print three (3) properties of the GitHub user object to the console.

1. Repeat the previous steps for two other members of the class.

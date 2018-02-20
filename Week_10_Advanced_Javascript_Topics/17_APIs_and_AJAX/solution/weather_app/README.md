The default temp is in Kelvin. Check out the [units format](https://openweathermap.org/current#format) documentation to get the temp in either C or F degrees

# Weather API App

We are going to use the [Open Weather Map API] (https://openweathermap.org/api) to build a little Javascript weather app!

## Part 1 - Getting our API key and setting up helper functions

1. [Sign up](https://home.openweathermap.org/users/sign_up) to get your API key. Issuing your key can take up to 10 minutes. Move on to the next steps while you wait.

1. Create a function called `requestUrl`. This function should get the value from the `#zip` input and store it in a variable. Then it should return a string for the request url according to [this format](https://openweathermap.org/current#zip) to get the weather data for the provided zip code. Make sure you include your API key in the `apiKey` variable and include that in your request url string as well.

1. Create a submit handler for the form element. When the form is submitted, `console.log(requestUrl());`.

1. Use the form to generate urls for different zip codes. Copy the generated string from the console and paste them into the browser address bar. Try getting the temperature and weather description from the response object.

## Part 2 - Using Ajax

1. Create a function called `displayWeatherData` that takes a `data` object as a property. Just put a `debugger` here for now.

1. In your form submit handler, make an Ajax request to the request url. In the `done` function, provide the `displayWeatherData` as the argument.

1. Add a zip code in the input and submit the form. Your debugger should catch. Inspect the data object. Now alter your code to display the values for the temperature, weather title and weather description to to he `#weather-report` card in your html. Lastly, show the `#weather-report` element which is hidden by default.

## Part 3 - Adding GIFs

1. Use the [Giphy Search API](https://developers.giphy.com/docs/) to display a gif of the weather in the weather report card.

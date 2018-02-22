# Bitcoin Price Chart - An Exercise in Javascript Libraries

In this lab we are going to use the [GDAX](https://www.gdax.com) (Global Digital Asset Exchange) api to fetch and display recent price data for Bitcoin!

We want to get price data for a specific time interval. We are going to provide a `start` and `end` time as query string parameters. We are also going to specify a `granularity` parameter which will indicate (in seconds) how we want our data broken up. For example, if we want our interval to start at midnight and end at noon and give us price data for each hour in that interval, we can us a start time of midnight, an end time of noon and a granularity of 3600 (60 sec/min * 60 min/hour).

The catch is that we have to provide our times in the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.

ISO time format:
```
2018-02-22T13:15:30-05:00
yr   mo d   h  m  s time zone
```

If we want to get price data for each our between midnight and 10 am, we are going to have to include the following parameters in our query string:

```
start=2018-02-22T00:00:00-05:00

end=2018-02-22T12:00:00-05:00

granularity=3600
```

That's a long query string! instead of having a really messy bit of string concatenation code, we can use the a javascript library built specifically for the purpose of parsing and constructing query strings to and from javascript objects. The [qs library](https://github.com/ljharb/qs) is a pretty good choice for out purposes today.

## Part 1 - `requestUrl`

Create a function called `requestUrl`. This function will take no arguments and will return a string representing the request url. The request url should be an assembly of the following pieces:

1. The [root GDAX url](https://docs.gdax.com/#api)
1. The [endpoint for the currency price](https://docs.gdax.com/#get-historic-rates) data we want. Use the product-id `BTC-USD` to get Bitcoin/USD data.
1. The query string which includes the start and end times as well as the granularity. Use the [`Qs.stringify()`](https://github.com/ljharb/qs#stringifying) method to make your query string!

> Note: In the documentation, the query string methods are namespeced under the `qs` object, however, if you are getting errors, try accessing them through the `Qs` namespace.

## Part 2 - Get the data

Now that you have a function to construct your request url, let's use it to make an Ajax call to get the price data.

Put a debugger in your `done` function so that you can inspect the data that is sent back in the response. Make sure you refer back to the api documentation for this api endpoint to make sense of the data.

## Part 3 - Parsing the response data

We are going to need two arrays to build our chart - one with all of the times for each price price point, and one with all of the prices for each price point. Let's create two functions that we can use to do this for us.

We are going to have to iterate through the data array that is returned from the server and return a new array. When every we want to create a new array from operations we perform on the items of a starting array, we can use the [map array method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map).

#### `parseTimesForChart()`

1. Make a function called `parseTimesForChart` that take a price data point array as an argument.
1. Map over the data array with the `map` method and return a new array that consists only of the timestamps for each price point. Refer to the documentation to find out which item represents the timestamp.

> Note: The times returned from the GDAX api are in UNIX timestamp format but are in units of seconds, not milliseconds. In order for them to format correctly later on, we're going to have to convert them to milliseconds by multiplying them by 1000!!!

#### `parsePricesForChart()`

1. Make a function called `parsePricesForChart` that take a price data point array as an argument.
1. Map over the data array with the `map` method and return a new array that consists only of the close price for each price point. Refer to the documentation to find out which item represents the close price.

## Part 4 - Drawing the chart

Now that we have the data in the format we need, we can us [C3](http://c3js.org/) to paint the chart. C3 is a Javascript charting library that is built on top of [D3](https://d3js.org/), a very powerful drawing library that is used for creating all sorts of numerically based graphics. C3 helps us draw charts with less lines of code than we'd need to use if we were using D3 directly and it's a little quicker to learn.


Take a look at this [simple example](http://c3js.org/samples/simple_xy.html) for how to draw a line graph using C3.

Now that we have some example code, let's try to draw a graph of our price data.

```javascript
var chart = c3.generate({
    bindto: '#chart',
    data: {
        x: 'x',
        columns: [
            ['x', 30, 50, 100, 230, 300, 310],
            ['data1', 30, 200, 100, 400, 150, 250],
            ['data2', 130, 300, 200, 300, 250, 450]
        ]
    }
});

// http://c3js.org/samples/simple_xy.html
```

1. Copy the code above into the `done` function of your Ajax call.

1. Change the `data.x` property of the config object to `'time'`. This is going to tell C3 which data set to use for the x axis.

1. The `data.columns` array has to have two arrays, one with all of our prices and the other with all of our timestamps. Notice the string (`'x'`, `'data'`, `'data2'`) that occupy the zeroth index in the example? Those represent the axis id that the data in the column array should match up to. We want ours to have ids of `'time'` and `'price'`. Well use the [array concat method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) along with the `parseTimesForChart` and `parsePricesForChart` functions we just created to make arrays that have the correct axis ids.

```javascript
['time'].concat(parseTimesForChart(data));
```

You should have a chart drawn on your web page at this point!

## Part 5 - Adjusting chart appearance

1. Checkout how to change the format of the [y axis](http://c3js.org/samples/axes_y_tick_format.html)

1. ... and the [x axis](http://c3js.org/samples/axes_x_tick_format.html). For the `tix.format` property you can use the following format string:

```javascript
'%m/%d/%y %H:%M'
```

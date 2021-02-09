"use strict"

// ------- Query the Weather Map API ----------------------------------------------

// // String Method:
// // Excluding minutely and hourly
// // Changing kelvins to imperial: Fahrenheit
//
// $.get("https://api.openweathermap.org/data/2.5/onecall?lat=29.4241&lon=-98.4936&units=imperial&exclude=minutely,hourly&appid=" + OWM_TOKEN).done(function(data) {
//     console.log(data);
// });

// String and Object Method: Using this method for the sake of readability
// Excluding minutely and hourly.
// Changing kelvins to imperial: Fahrenheit

$.get("https://api.openweathermap.org/data/2.5/onecall", {
    APPID: OWM_TOKEN,
    lat: 29.4241,
    lon: -98.4936,
    units: "imperial",
    exclude: ["minutely", "hourly"]
}).done(function(data) {
    console.log(data);
});
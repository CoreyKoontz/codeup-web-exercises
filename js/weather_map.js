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
//
// $.get("https://api.openweathermap.org/data/2.5/onecall", {
//     APPID: OWM_TOKEN,
//     lat: 29.4241,
//     lon: -98.4936,
//     units: "imperial",
//     exclude: ["minutely", "hourly"]
// }).done(function(data) {
//     console.log(data);
// });
// Having issues with the string and object method of pulling the data. Even though I've included the "exclude: ["minutely", "hourly"]" I'm still seeing it in my console. I'd like to get rid of what we don't need just to keep things clean.


// ------- Embedding html into the daily weather display boxes -----------------------

// setting up variables to call the data from Weather Map

// Get all Data:
$.get("https://api.openweathermap.org/data/2.5/onecall", {
     APPID: OWM_TOKEN,
     lat: 29.4241,
     lon: -98.4936,
     units: "imperial",
     exclude: "minutely, hourly"
 }).done(function(data) {
     console.log(data)
     handleResponse(data)
 });

// Setting up handle response to iterate through the returned data and populate the html:
function handleResponse (data) {
let days = data.daily;
let html = "";
for(var i = 0; i < 5; i++) {
    // let date = ;
    let iconCode =
        days[i].weather[0].icon;
    let tempHigh = Math.round(days[i].temp.max);
    let tempLow = Math.round(days[i].temp.min);
    let description = days[i].weather[0].description;
// Embedding into the HTML using string method:
    let itemHtml = "<div class='card'>"
    itemHtml += '<h3>' + iconCode + '</h3>';
    itemHtml += '<h3>' + tempHigh + '</h3>';
    itemHtml += '<h3>' + tempLow + '</h3>';
    itemHtml += '<h3>' + description + '</h3>';
    itemHtml += '</div>';

    html += itemHtml;

    }
    $('#insertWeatherBoxes').html(html);
}

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
}).done(function (data) {
    handleResponse(data)
});

// Setting up handle response to iterate through the returned data and populate the html:
function handleResponse(data) {
    let days = data.daily;
    let html = "";
    for (var i = 0; i < 5; i++) {
        let date = dateMaker(i);
        let iconCode = days[i].weather[0].icon;
        let tempHigh = Math.round(days[i].temp.max);
        let tempLow = Math.round(days[i].temp.min);
        let description = days[i].weather[0].description;
// Embedding into the div.card element using string method:
        let itemHtml = "<div class='card' style='width: 17rem'>"
        itemHtml += '<span>' + date + '</span>';
        itemHtml += "<img src='img/weather-map-icons/" + iconCode + ".jpg'>" // Refactored the image names of the local icons to work with this
        itemHtml += '<h5>' + 'H ' + tempHigh + '</h5>';
        itemHtml += '<h5 class="text-muted">' + 'L ' + tempLow + '</h5>';
        itemHtml += '<p class="card-footer my-1">' + description + '</p>';
        itemHtml += '</div>';

        html += itemHtml;

    }
    $('#insertWeatherBoxes').html(html);
}

// Trying to manipulate the date() object to work with the weather cards.
// Pass the dateMaker function the index number (i) in the handleResponse.
// The setDate() method sets the day of the Date object relative
// to the beginning of the currently set month. -MDN
// The getDate() method returns the day of the month for the specified
// date according to local time. -MDN
function dateMaker(num) {
    let date = new Date();
    date.setDate(date.getDate() + num)
    return date.toDateString().slice(0, 10);
}

// Change the background of the Weather Cards depending on the weather conditions
//
// $('.card').css(
//     if (iconCode === "01d") {
//         "background-image": "linear-gradient(45deg, skyblue, gray)"
//     }
// )

//------- Map -----------------------------------------------------

mapboxgl.accessToken = MAPBOX_TOKEN
var map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-98.7320, 29.7947], // starting position [lng, lat]
    zoom: 8 // starting zoom
});

// Map Nav Controls
map.addControl(new mapboxgl.NavigationControl());

// map.addControl(
//     new MapboxGeocoder({
//         accessToken: mapboxgl.accessToken,
//         mapboxgl: mapboxgl
//     })

//Starting Draggable Marker (default point)
var marker = new mapboxgl.Marker({
    draggable: true
})
    .setLngLat([-98.7320, 29.7947])
    .addTo(map);

// Adding functionality to draggable marker
function onDragEnd() {
    var lngLat = marker.getLngLat();
    var longitude = lngLat.lng;
    var latitude = lngLat.lat;

    $.get("https://api.openweathermap.org/data/2.5/onecall", {
        APPID: OWM_TOKEN,
        lat: latitude,
        lon: longitude,
        units: "imperial",
        exclude: "minutely, hourly"
    }).done(function (data) {
        handleResponse(data)
    });
}

marker.on('dragend', onDragEnd);

//------- Search by City geocode ----------------------------------------

let searchInput = $("input")
console.log(searchInput.val())


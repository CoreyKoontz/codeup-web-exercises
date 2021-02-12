"use strict"

// setting up global variables to call the data from Weather Map
var longitude = -98.7320
var latitude = 29.7947

// Calling initial getData function
getData();

// ------- Query the Weather Map API ----------------------------------------------

// String and Object Method:
// Using this method for the sake of readability
// Excluding minutely and hourly.
// Changing kelvins to imperial: Fahrenheit
// Defining the 'get' request as a function 'getData' in order to call it multiple times
function getData() {
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

// Setting up handle response to iterate through the returned data and populate the html:
function handleResponse(data) {
    let days = data.daily;
    let html = "";
    for (var i = 0; i < 5; i++) {
        let date = dateMaker(i);
        let iconCode = days[i].weather[0].icon;
        cardColor(iconCode);
        let tempHigh = Math.round(days[i].temp.max);
        let tempLow = Math.round(days[i].temp.min);
        let description = days[i].weather[0].description;
// Embedding into the div.card element using string method:
        let itemHtml = "<div class='card col-2' style='width: 17rem'>"
        itemHtml += '<span class="date-text">' + date + '</span>';
        itemHtml += "<img src='img/weather-map-icons/" + iconCode + ".jpg'>" // Refactored the image names of the local icons to work with this
        itemHtml += '<h5>' + 'H ' + tempHigh + '</h5>';
        itemHtml += '<h5 class="text-muted">' + 'L ' + tempLow + '</h5>';
        itemHtml += '<p class="card-footer my-1">' + description + '</p>';
        itemHtml += '</div>';
        html += itemHtml;
    }
    $('#insertWeatherBoxes').html(html);

    //------- Map -----------------------------------------------------

    mapboxgl.accessToken = MAPBOX_TOKEN
    var map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [longitude, latitude], // starting position [lng, lat]
        zoom: 8 // starting zoom
    });

// Map Nav Controls
    map.addControl(new mapboxgl.NavigationControl());

//Starting Draggable Marker (default point)
    var marker = new mapboxgl.Marker({
        draggable: true
    })
        .setLngLat([longitude, latitude])
        .addTo(map);

// Adding functionality to draggable marker

    function onDragEnd() {
        var lngLat = marker.getLngLat();
        longitude = lngLat.lng;
        latitude = lngLat.lat;
        getData();
    }
    marker.on('dragend', onDragEnd);
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

// Change the background of the Weather Cards depending on the iconCode
function cardColor (code) {
$('.card').css("background-image", function () {
        if (code === "01d") {
            return "linear-gradient(45deg, skyblue, skyblue)";
        }
        if (code === "02d" || "03d" || "10d") {
            return "linear-gradient(45deg, skyblue, grey)";
        }
        if (code === "04d" || "09d" || "11d") {
            return "linear-gradient(45deg, lightgray, darkslategrey)";
        }
        if (code === "50d") {
            return "linear-gradient(45deg, gray, ghostwhite)";
        }
        if (code === "13d") {
            return "linear-gradient(45deg, lightgrey, whitesmoke)";
        }
        else {
            return "linear-gradient(45deg, skyblue, grey)";
        }

    }
)
}

//------- Search by City geocode ----------------------------------------

$(".btn").click(function (e) {
    e.preventDefault()
    let searchInput = $("#input").val();
    geocode(searchInput, MAPBOX_TOKEN).then(function (data) {
        // console.log();
        longitude = data[0];
        latitude = data[1];
        getData();
    })

})


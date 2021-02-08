"use strict"


//------ Generating the map ----------------------------------

mapboxgl.accessToken = mapboxToken
var map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-98.7320, 29.7947], // starting position [lng, lat]
    zoom: 13 // starting zoom
});

//------  Map Components --------------------------------------

// Adding Nav Controls
map.addControl(new mapboxgl.NavigationControl());


// // Adding a Marker
// var marker = new mapboxgl.Marker()
//     .setLngLat([-98.72766205396914, 29.79705308745096])
//     .addTo(map); // would not work because I included '.setPopup()' before '.addTo()'
//
//
// // Adding a Popup
// var popup = new mapboxgl.Popup({offset: 25})
//     .setLngLat([-98.72766205396914, 29.79705308745096])
//     .setHTML("<h4>Casa Amaya Pupuseria & Taqueria</h4>")
//     .addTo(map);


// ** Refactoring the Marker and Popup together **
// This will allow us to click the Marker to display the Popup
// var popup = new mapboxgl.Popup({offset: 25})
//     .setHTML("<h4>Casa Amaya Pupuseria & Taqueria</h4>");
//
// var marker = new mapboxgl.Marker()
//     .setLngLat([-98.72766205396914, 29.79705308745096])
//     .setPopup(popup)
//     .addTo(map);


// Refactoring code to use a .forEach() loop and display 3 different restaurants.




// Array of objects for the .forEach() Loop:
let restaurants = [
    {
        name: "Casa Amaya",
        address: "608 E Blanco Rd, Boerne, TX 78006",
        coordinates:[-98.72766205396914, 29.79705308745096],
        categories: [
            "Taqueria", " Pupuseria", " Smoothies"
        ],
        price: "$"
    },
    {
        name: "Cibolo Creek Brewing Co.",
        address: "448 S Main St, Boerne, TX 78006",
        coordinates:[-98.72999370019609, 29.791090898468084],
        categories: [
            "Burgers", "Brewery"
        ],
        price: "$$"
    },
    {
        name: "The Dodging Duck Brewhaus",
        address: "402 River Rd, Boerne, TX 78006",
        coordinates:[-98.72595965782648, 29.79049499640117],
        categories: [
            "American", "Brewery"
        ],
        price: "$$"
    },

]


restaurants.forEach(function (restaurant) {
    let popup = new mapboxgl.Popup({offset: 25})
        .setHTML(
            "<h1>" + restaurant.name + "</h1>" +
            "<h4><em>" + restaurant.categories + "</em></h4>" +
            "<p>" + restaurant.address + "</p>");
    let marker = new mapboxgl.Marker()
        .setLngLat(restaurant.coordinates)
        .setPopup(popup)
        .addTo(map);
})

// Figure out the reverse geocoding to avoid hardcoding the coordinates into the array
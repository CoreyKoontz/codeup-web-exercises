"use strict"

//  jQuery

$(document).ready(function () {


});

//When title text is clicked it will change to a random color
var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
$('#title').click(function () {
    $(this).css('color', randomColor);
})

// double-click the list and it will get a border
$('p').dblclick(function () {
    $(this).css('fontSize', '18px')
});

//hover over footer and it will become highlighted
$('.footer').hover(
    function () {
        $(this).css({
            backgroundColor: '#FF0',
            transition: '.5s'
        })
    },
    function () {
        $(this).css('background-color', '');
    }
);
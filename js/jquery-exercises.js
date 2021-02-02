"use strict"

$(document).ready(function () {

    alert($('#title').html());

    $('.codeup').css('border', '1px solid red');

    $('li').css('font-size', '20px');
    $('h1, p, li').css('background-color', 'lightgrey')

    $('h1').each(function () {
        alert($(this).html())
    });


});
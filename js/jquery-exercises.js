"use strict"

$(document).ready(function () {

    var contents = $('#title').html();
    alert(contents);

    $('.codeup').css('border', '1px solid red');

    $('li').css('font-size', '20px');
    $('h1, p, li').css('background-color', 'lightgrey')

    var h1elements = $('h1').html();
    alert(h1elements);
});
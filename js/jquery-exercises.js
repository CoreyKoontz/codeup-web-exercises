(function (){
"use strict"
// // Selectors Exercise
// $(document).ready(function () {
//
//     alert($('#title').html());
//
//     $('.codeup').css('border', '1px solid red');
//
//     $('li').css('font-size', '20px');
//     $('h1, p, li').css('background-color', 'lightgrey')
//
//     $('h1').each(function () {
//         alert($(this).html())
//     });
//
//
// });
})();

// Mouse-Events Exercise
(function (){
    'use strict'

//Makes random color
var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

// 2.
// Will change the background color of an h1 element when clicked.
// $('#title').click(function () {
//     $(this).css('backgroundColor', randomColor);
// })
// broken down:
//
        let h1Background = $("#title");
        let backgroundBlue = "lightblue";
        let backgroundReset = "";

        function addClickEvents(elementsToBind) {
            let handlerBlueBckGnd = function (){
                elementsToBind.css("background-color", backgroundReset);
                $(this).css("background-color",backgroundBlue);
            }
            elementsToBind.click(handlerBlueBckGnd);
        }
        addClickEvents(h1Background);



// 3.
//Make all paragraphs have a font size of 18px when they are double clicked.
$('.paragraphs').dblclick(function () {
    $(this).css('fontSize', '18px')
});

// 4.
//Set all li text color to red when the mouse is hovering; reset to black when it is not.
$('li').hover(
    function () {
        $(this).css({
            color: 'red',
            transition: '.5s'
        })
    },
    function () {
        $(this).css('color', 'black');
    }
);
 })();
(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    planetsArray = planetsString.split('|');
     console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
    // This might be useful when inserting html

    var brPlanetsString = planetsArray.join("<br>");
    console.log (brPlanetsString);

 //******* Bonus ****************************************************

    // Create a string for the start of your list with the opening <ul> tag.
    var htmlString = '<ul> <li>';
    // Additionally assign the htmlString to the joining of planetsArray
    // with the '</li> <li>' delimiter. This will concat the htmlString
    // with the now planetsArray string with closing and
    // opening <li> tags between the former elements.
    htmlString += planetsArray.join('</li> <li>');
    // Now additionally assign the updated htmlString with the string '</li> </ul>'
    // to provide the closing tags for the unordered list.
    htmlString += '</li> </ul>';
    // console.log the results
    console.log(htmlString);

// var html = "";
//
// planetsArray.forEach(function (planet) {
//     html += '<li>' + planet + '<li>';
//    });
//
// console.log(html);
//
// html = '<ul>' + html + '</ul>';
//
//    console.log(html);

})();

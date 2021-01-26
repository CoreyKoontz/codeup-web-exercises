//20 Jan
function seven () {
    return 7;
}

//21 Jan
function isMultipleOf (x, y) {
    if (typeof x ==="number" && typeof y === "number") {
    return x % y === 0;}
    else {
        return false;
    }
}

// 26 Jan
function firstAndLast (array) {
    var bucket = [];
    bucket.push(array[0]);
    bucket.push(array[array.length -1]);
    return bucket;
}


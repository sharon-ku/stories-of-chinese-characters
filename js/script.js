/**
Stories of Chinese Characters
Sharon Ku

JavaScript
*/

"use strict";



$(`#bird-arrow`).hover(birdFastFlapping, birdNormalFlapping);


function birdFastFlapping() {
    $(`#bird-arrow`).attr(`src`, `assets/images/bird-fly-fast.gif`);
}

function birdNormalFlapping() {
    $(`#bird-arrow`).attr(`src`, `assets/images/bird-fly-normal.gif`);
}




/**
Description of preload
*/
function preload() {

}


/**
Description of setup
*/
function setup() {

}


/**
Description of draw()
*/
function draw() {

}
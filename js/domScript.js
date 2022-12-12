/**
JavaScript for DOM traversal and manipulation, event handling
*/

/**
Make bird wings flap
*/
$(`#bird-arrow`).hover(birdFastFlapping, birdNormalFlapping);

function birdFastFlapping() {
  $(`#bird-arrow`).attr(`src`, `assets/images/bird-fly-fast.gif`);
}

function birdNormalFlapping() {
  $(`#bird-arrow`).attr(`src`, `assets/images/bird-fly-normal.gif`);
}

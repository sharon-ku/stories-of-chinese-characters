/********************************
JavaScript for DOM traversal and manipulation, event handling
*********************************/

/*--------------------
Make bird wings flap
--------------------*/
$(`#bird-arrow`).hover(birdFastFlapping, birdNormalFlapping);

function birdFastFlapping() {
  $(`#bird-arrow`).attr(`src`, `assets/images/bird-fly-fast.gif`);
}

function birdNormalFlapping() {
  $(`#bird-arrow`).attr(`src`, `assets/images/bird-fly-normal.gif`);
}

/*--------------------
Make title fade in
--------------------*/
$(`#title`).hide();
$(`#title`).fadeIn(2000);

$(`#title`).mouseenter(() => {
  console.log(`mouse is over title`);

  $(`#title-stories`).fadeOut(`fast`);
  $(`#title-of-chinese`).fadeOut(`fast`);
  $(`#title-characters`).fadeOut(`fast`, () => {
    $(`.title-line`).css(`padding-bottom`, `20px`);
    $(`#title`).addClass(`chinese`);

    $(`#title-of-chinese`).css(`margin-left`, `50px`);

    $(`#title-stories`).text(`中國`);
    $(`#title-of-chinese`).text(`文字`);

    $(`#title-characters`).text(`故事`);

    $(`#title-stories`).fadeIn(`slow`);
    $(`#title-of-chinese`).fadeIn(`slow`);
    $(`#title-characters`).fadeIn(`slow`);
  });
});

$(`#title`).mouseleave(() => {
  console.log(`mouse leave`);

  $(`#title-stories`).fadeOut(`fast`);
  $(`#title-of-chinese`).fadeOut(`fast`);
  $(`#title-characters`).fadeOut(`fast`, () => {
    $(`.title-line`).css(`padding-bottom`, `5px`);
    $(`#title`).removeClass(`chinese`);

    $(`#title-of-chinese`).css(`margin-left`, `100px`);

    $(`#title-stories`).text(`Stories`);
    $(`#title-of-chinese`).text(`of Chinese`);
    $(`#title-characters`).text(`Characters`);

    $(`#title-stories`).fadeIn(`slow`);
    $(`#title-of-chinese`).fadeIn(`slow`);
    $(`#title-characters`).fadeIn(`slow`);
  });
});

/********************************
 * FLOATING ITEMS
 ********************************/

const titleFigure = document.querySelector(`.title-figure-pedals`);

// Create flying petals
createPetals();

// Create petals at start of scene
function createPetals() {
  // All the petal names
  let petalNames = [`flower`, `leaf`];
  // Number of images available per petal
  let numPetalImages = [4, 4];
  // How many petals for each category do I want
  let numEachImage = [2, 2];

  // Create card decoration images
  for (let j = 0; j < petalNames.length; j++) {
    for (let i = 0; i < numEachImage[j]; i++) {
      addPetalImage(petalNames[j], numPetalImages[j]);
    }
  }

  // Put all petals in a random position
  repositionPetalsRandomly();
}

// Add petal image in HTML
function addPetalImage(petalName, numImages) {
  for (let i = 0; i < numImages; i++) {
    titleFigure.innerHTML += `
      <img
        class="petal-image not-selectable"
        src="assets/images/${petalName}${i}.png"
        alt=""
      />
      `;
  }
}

// Put petals in a random position on page
function repositionPetalsRandomly() {
  // space around page where petals will not appear
  let bufferZone = 0;

  // place petals randomly
  $(`.petal-image`).each(function () {
    $(this).css({
      left: window.innerWidth + Math.random() * 3.5 * window.innerWidth,
      top: -500 + Math.random() * window.innerHeight,
      // left: "window.innerWidth + Math.random() * (window.innerWidth)",
      // top:
      //   "-window.innerHeight + Math.random() * (window.innerHeight - 2 * bufferZone)",
    });
  });

  // animate petals randomly
  $(`.petal-image`).each(function () {
    let randomFlyingSpeed = 40 + Math.random() * 20;
    $(this).css({
      animation: `petal-fly ${randomFlyingSpeed}s linear infinite`,
      // left:
      //   "bufferZone + Math.random() * (window.innerWidth - 2 * bufferZone)",
      // top:
      //   "bufferZone + Math.random() * (window.innerHeight - 2 * bufferZone)",
      // right: "window.outerWidth + Math.random() * (window.outerWidth)",
      // top:
      //   "-window.innerHeight + Math.random() * (window.innerHeight - 2 * bufferZone)",
    });
  });
}

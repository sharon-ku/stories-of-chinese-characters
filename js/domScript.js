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

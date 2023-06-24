const tagArr = [
  "Gaming",
  "Music",
  "Live",
  "Sport",
  "Football",
  "Live",
  "Gaming",
  "Music",
  "Live",
  "Sport",
  "Football",
  "Live",
  "Live",
  "Gaming",
  "Music",
  "Live",
  "Sport",
  "Football",
  "Live",
];

document.getElementsByClassName("tag-bar")[0].innerHTML =
  `<div class="arrow-tag-left"><i class="fa-solid fa-chevron-left"></i></div>` +
  tagArr
    .map(
      (name) => `
    <div class="each-tag">
          ${name}
    </div>
`
    )
    .join("") +
  `<div class="arrow-tag-right"><i class="fa-solid fa-chevron-right"></i></div>`;

$(document).ready(function () {
  $("#menu-icon").click(function () {
    $(".side-bar").toggleClass("visible");
    $(".container").toggleClass("shift");
    $(".icons-toggle").toggleClass("shrunk");
    $("#icon-four").toggleClass("marg");
    $(".icon-color").toggleClass("grayish");

    console.log("h");
  });

  $(".arrow-down-icon").click(function () {
    $(".second-shorts").toggleClass("none-visible");

    const removeElement = document.getElementsByClassName("arrow-down-icon")[0];
    removeElement.remove();
  });
});

document
  .getElementsByClassName("arrow-tag-left")[0]
  .addEventListener("click", function () {
    var left = document.querySelector(".tag-bar");
    left.scrollBy(350, 0);
    console.log("hiii");
  });

document
  .getElementsByClassName("arrow-tag-right")[0]
  .addEventListener("click", function () {
    var right = document.querySelector(".tag-bar");
    right.scrollBy(-350, 0);
    console.log("hiii");
  });

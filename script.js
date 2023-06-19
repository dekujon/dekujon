var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const carouselText = [
  { text: "Jon Ian.", color: "#22a6ff" },
  { text: "a Front End Developer.", color: "#22a6ff" },
  { text: "a Freelancer.", color: "#22a6ff" },
  { text: "a Mechanical Engineer.", color: "#22a6ff" },
  { text: "an Entrepreneur.", color: "#22a6ff" },
];

$(document).ready(async function () {
  carousel(carouselText, ".feature-text");
});

async function typeSentence(sentence, eleRef, delay = 100) {
  const letters = sentence.split("");
  let i = 0;
  while (i < letters.length) {
    await waitForMs(delay);
    $(eleRef).append(letters[i]);
    i++;
  }
  return;
}

async function deleteSentence(eleRef) {
  const sentence = $(eleRef).html();
  const letters = sentence.split("");
  let i = 0;
  while (letters.length > 0) {
    await waitForMs(100);
    letters.pop();
    $(eleRef).html(letters.join(""));
  }
}

async function carousel(carouselList, eleRef) {
  var i = 0;
  while (true) {
    updateFontColor(eleRef, carouselList[i].color);
    await typeSentence(carouselList[i].text, eleRef);
    await waitForMs(1500);
    await deleteSentence(eleRef);
    await waitForMs(500);
    i++;
    if (i >= carouselList.length) {
      i = 0;
    }
  }
}

function updateFontColor(eleRef, color) {
  $(eleRef).css("color", color);
}

function waitForMs(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

$(document).ready(function () {
  $("#project-1").on("click", function () {
    $(".content-item-2").hide();
    $(".content-item-2-2").hide();
    $(".content-item-2-1").show();
    $(".content-item-2-3").hide();
    $(".content-item-2-4").hide();
    $(".content-item-2-5").hide();
  });

  $("#project-2").on("click", function () {
    $(".content-item-2").hide();
    $(".content-item-2-1").hide();
    $(".content-item-2-2").show();
    $(".content-item-2-3").hide();
    $(".content-item-2-4").hide();
    $(".content-item-2-5").hide();
  });

  $("#project-3").on("click", function () {
    $(".content-item-2").hide();
    $(".content-item-2-1").hide();
    $(".content-item-2-2").hide();
    $(".content-item-2-3").show();
    $(".content-item-2-4").hide();
    $(".content-item-2-5").hide();
  });

  $("#project-4").on("click", function () {
    $(".content-item-2").hide();
    $(".content-item-2-1").hide();
    $(".content-item-2-2").hide();
    $(".content-item-2-3").hide();
    $(".content-item-2-4").show();
    $(".content-item-2-5").hide();
  });

  $("#project-5").on("click", function () {
    $(".content-item-2").hide();
    $(".content-item-2-1").hide();
    $(".content-item-2-2").hide();
    $(".content-item-2-3").hide();
    $(".content-item-2-4").hide();
    $(".content-item-2-5").show();
  });

  $(".back").on("click", function () {
    $(".content-item-2").show();
    $(".content-item-2-1").hide();
    $(".content-item-2-2").hide();
    $(".content-item-2-3").hide();
    $(".content-item-2-4").hide();
    $(".content-item-2-5").hide();
  });

  $("#myWork").on("click", function () {
    $("#home-mid").hide();
    $(".content-mid").addClass("show").removeClass("hide");
  });

  $(".back-2").on("click", function () {
    $("#home-mid").show();
    $(".content-mid").removeClass("show").addClass("hide");
  });

});

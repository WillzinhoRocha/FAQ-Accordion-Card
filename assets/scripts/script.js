"use strict";

const answer = document.querySelector(".answer");
const btnShowAnswer = document.querySelector(".btn-down");

const showAnswer = function () {
  answer.classList.remove("hidden");
};

const hideAnswer = function () {
  answer.classList.add("hidden");
};

btnShowAnswer.addEventListener("click", function (e) {
  if (answer.classList.contains("hidden")) {
    showAnswer();
  } else {
    hideAnswer();
  }
});

const accordion = document.querySelector(".accordion");

function showAnswer(e) {
  if (e.target.classList.contains("accordion__question")) {
    const question = e.target;
    question.parentElement.classList.toggle("accordion__item_show");
  }
}

accordion.addEventListener("click", showAnswer);

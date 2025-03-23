function startGame() {
  document.querySelector(".container").classList.add("hidden");
  document.querySelector(".quiz").classList.remove("hidden");
}

function answer(isCorrect) {
  document.querySelector(".quiz").classList.add("hidden");
  document.querySelector(".result").classList.remove("hidden");
}

function showFinal() {
  document.querySelector(".result").classList.add("hidden");
  document.querySelector(".final").classList.remove("hidden");
}

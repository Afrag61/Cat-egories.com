var Cats = document.querySelectorAll(".Cats");
var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");

function openModal() {
  backdrop.style.display = "block";
  modal.style.display = "block";
}

function closeModal() {
  backdrop.style.display = "none";
  modal.style.display = "none";
}

for (var x = 0; x < Cats.length; x++) {
  Cats[x].addEventListener("click", openModal);
}

backdrop.addEventListener("click", closeModal);

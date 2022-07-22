let text = document.querySelector(".sec-text");

let changing = function () {
  setTimeout(function () {
    text.textContent = "Web Developer";
  }, 0);
  setTimeout(function () {
    text.textContent = "Freelancer";
  }, 4000);
  setTimeout(function () {
    text.textContent = "B.I.S Student";
  }, 8000);
};
changing();
setInterval(changing, 12000);

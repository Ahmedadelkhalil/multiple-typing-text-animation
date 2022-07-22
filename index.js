let textchange = document.querySelector(".sec-text");

let changing = function () {
  setTimeout(function () {
    textchange.textContent = "Web Developer";
  }, 0);
  setTimeout(function () {
    textchange.textContent = "Freelancer";
  }, 4000);
  setTimeout(function () {
    textchange.textContent = "B.I.S Student";
  }, 8000);
};
changing();
setInterval(changing, 12000);

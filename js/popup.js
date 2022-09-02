document
  .querySelector("#lb")
  .addEventListener("onclick", function () {
    document.querySelector(".popup").classList.add("active");
  });
document
  .querySelector(".popup.close_button")
  .addEventListener("click", function () {
    document.querySelector(".popup").classList.remove("active");
  });

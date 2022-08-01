const descNerd = document.querySelector(".desc-nerd");
const descNormal = document.querySelector(".desc-normal");
const togBtn = document.querySelector("#togBtn");

window.onload = function WindowLoad(event) {
  togBtn.checked = false;
};

togBtn.addEventListener("click", function () {
  if (togBtn.checked == true) {
    descNerd.classList.add("hide-text");
    descNormal.classList.remove("hide-text");
  } else {
    descNerd.classList.remove("hide-text");
    descNormal.classList.add("hide-text");
  }
});

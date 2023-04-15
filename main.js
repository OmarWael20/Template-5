function changeBg(color) {
  document.body.style.backgroundColor = color;
};

function changePoster(img) {
  document.querySelector(".landing-img img").src = img;
}

let closeBtn = document.querySelector(".close");

function openMenu(anything) {
  document.querySelector("#menu").style.display = "flex";
  document.querySelector(".menu-toggle").style.display = "none";
  document.querySelector("header .close").style.display = "flex";
}

function hideClose(){
  closeBtn.style.display = "none";
  document.querySelector(".menu-toggle").style.display = "flex";
  document.getElementById("menu").style.display = "none";
}
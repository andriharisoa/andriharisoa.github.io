function slider(anything) {
  document.querySelector(".devops").src = anything
}

function couleur(color) {
  const sec = document.querySelector(".global")
  sec.style.background = color
}

function skills() {
  const content = document.querySelector(".content")
  content.style.display = "none"
  document.querySelector(".skills").style.display = "flex"
  document.querySelector(".contact").style.display = "none"
}

function home() {
  const home = document.querySelector(".content")
  home.style.display = "flex"
  document.querySelector(".skills").style.display = "none"
  document.querySelector(".contact").style.display = "none"
}

function contact() {
  const content = document.querySelector(".content")
  content.style.display = "none"
  document.querySelector(".skills").style.display = "none"
  document.querySelector(".contact").style.display = "flex"
}

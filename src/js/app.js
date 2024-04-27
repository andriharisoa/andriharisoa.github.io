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
}

function home() {
  const home = document.querySelector(".content")
  home.style.display = "flex"
  document.querySelector(".skills").style.display = "none"
}

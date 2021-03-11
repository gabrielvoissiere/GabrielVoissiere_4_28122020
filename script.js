var button = document.querySelector("button")
var nav = document.querySelector("nav")

nav.classList.add("hide")

button.addEventListener("click", function () {
    nav.classList.toggle("hide")
})
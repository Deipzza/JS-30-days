const divs = document.querySelectorAll("div");
const button = document.querySelector("button");

function logText(e) {
    console.log(this.classList.value);
    e.stopPropagation(); // detiene el bubbling
}

divs.forEach(div => div.addEventListener("click", logText, {
    capture: true, // se ejecuta en la captura. Por defecto es false
    once: true // el código se ejecuta una sola vez. Por defecto es false
}));

button.addEventListener("click", () => {
    console.log("Me clickearon")
}, {
    once: true
});
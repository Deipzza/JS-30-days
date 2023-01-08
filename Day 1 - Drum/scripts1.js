window.addEventListener("keydown", playSound);

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if(!audio) return; // no ejecutar si la tecla no tiene audio definido
    audio.currentTime = 0; // rebobinar al principio la pista de audio
    audio.play();

    key.classList.add("playing");
}

function removeTransition(e) {
    if(e.propertyName !== 'transform') return;
    this.classList.remove("playing");
}

function transition() {
    const keys = document.querySelectorAll(".key");
    keys.forEach(key => key.addEventListener("transitionend", removeTransition));
}
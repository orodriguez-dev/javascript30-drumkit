// app.js
function playSound(keyCode) {
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(k => k.addEventListener('transitionend', removeTransition));
keys.forEach(k => k.addEventListener('click', () => {
    const keyCode = k.getAttribute('data-key');
    playSound(keyCode);
}));

window.addEventListener('keydown', (e) => {
    playSound(e.keyCode);
});

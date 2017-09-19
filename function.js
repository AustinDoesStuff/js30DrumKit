

function removeTransition(x){
    if(x.propertyName !== 'transform'){
        return;
    }
    this.classList.remove('playing');
}

function playSound(x){
    const audio = document.querySelector(`audio[data-key="${x.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${x.keyCode}"]`);

    if(!audio){
        return;
    }
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
    key.addEventListener('transitionend', removeTransition);
}

window.addEventListener('keydown', playSound);
//const keys = document.querySelectorAll('.key');
//keys.forEach(key => key.addEventListener('transitionend', removeTransition));

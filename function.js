

function removeTransition(x){
    if(x.propertyName !== 'transform'){
        return;
    }
    this.classList.remove('playing');
    //transitions back to normal
}

function onPress(x){
    const audio = document.querySelector(`audio[data-key="${x.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${x.keyCode}"]`);

    if(!audio){
        return;
    }

    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
    key.addEventListener('transitionend', removeTransition);
    //waits for transition to end then makes it the original size
}

window.addEventListener('keydown', onPress);

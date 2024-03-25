let video = document.querySelector('.myvideo');
let myBtn = document.querySelector('.pausebtn');

const playAndPause = () => {
    myBtn.addEventListener('click', () => {
        if(video.paused) {
            video.play();
            myBtn.innerHTML = "Pause";
        }else {
            video.pause();
            
            myBtn.innerHTML = "Play";
        }
    })
}

playAndPause();
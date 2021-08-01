const video = document.querySelector('video');
const button = document.querySelector('button');
var playing = true;

function MediaPlayer(config) {
    this.media = config.el
}

MediaPlayer.prototype.play = function() {
    playing = true;
    this.media.play();
}

MediaPlayer.prototype.pause = function() {
    playing = false;
    this.media.pause();
}

const player = new MediaPlayer({ el: video });

button.onclick = () => {
    if (playing) {
        player.pause();
    } else {
        player.play();
    }
}

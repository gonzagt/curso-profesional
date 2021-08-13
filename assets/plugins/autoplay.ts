import MediaPlayer from "../MediaPlayer";

function AutoPlay(){
AutoPlay.prototype.run = function(player: MediaPlayer) {
    if (!player.media.muted) {
        player.media.muted=true
    }
    player.play();
    }
}

export default AutoPlay;

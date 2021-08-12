import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/autoplay.js";
import AutoPause from "./plugins/autopause.js";

const video = document.querySelector('video');
const button = document.querySelector('#playButton');
const muteButton = document.querySelector('#muteButton');
const player = new MediaPlayer({ 
    el: video, 
    plugins: [new AutoPlay(), new AutoPause()] });

button.onclick = () => player.togglePlay();
muteButton.onclick = () => player.toggleMute();

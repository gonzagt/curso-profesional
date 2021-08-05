import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/autoplay.js";

const video = document.querySelector('video');
const button = document.querySelector('#playButton');
const muteButton = document.querySelector('#muteButton');
const player = new MediaPlayer({ el: video, plugins: [new AutoPlay()] });

button.onclick = () => player.togglePlay();
muteButton.onclick = () => player.toggleMute();

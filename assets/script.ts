import MediaPlayer from "./MediaPlayer";
import AutoPlay from "./plugins/autoplay";
import AutoPause from "./plugins/autopause";

const video = document.querySelector('video');
const button: HTMLElement = document.querySelector('#playButton');
const muteButton: HTMLElement = document.querySelector('#muteButton');
const player = new MediaPlayer({ 
    el: video, 
    plugins: [new AutoPlay(), new AutoPause()] });

button.onclick = () => player.togglePlay();
muteButton.onclick = () => player.toggleMute();

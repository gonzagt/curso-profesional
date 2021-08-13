class MediaPlayer {
    media: HTMLMediaElement;
    plugins: Array<any>
    constructor(config: { el: HTMLMediaElement; plugins: any; }) {
        this.media = config.el;
        this.plugins = config.plugins || [];
        this.initPlugins();
    }
    private initPlugins() {
        // debugger
        // const player = {
        //     play: () => this.play(),
        //     pause: () => this.pause(),
        //     media: this.media,
        //     get muted() {
        //         return this.media.muted;
        //     },
        //     set muted(value) {
        //         this.media.muted = value;
        //     },
        // };
        this.plugins.forEach(plugins => {
            plugins.run(this);
        });
    }
    play() {
        this.media.play();
    }
    pause() {
        this.media.pause();
    }
    togglePlay() {
        this.media.paused
            ? this.media.play()
            : this.media.pause();
    }
    toggleMute() {
        this.media.muted = !this.media.muted;
    }
    mute() {
        this.media.muted = true;
    }
    unmute() {
        this.media.muted = false;
    }
}

export default MediaPlayer;

import MediaPlayer from "../MediaPlayer";

class AutoPause {
    private threshold: number;
    player: MediaPlayer;
    constructor(){
        this.threshold = 0.3,
        this.handlerIntersection = this.handlerIntersection.bind(this),
        this.handleVC = this.handleVC.bind(this)
    }

    run(player: MediaPlayer){
        this.player = player;
        const observer = new IntersectionObserver(this.handlerIntersection, { threshold: this.threshold })
        observer.observe(this.player.media);
        // console.log(observer);
        document.addEventListener("visibilitychange", this.handleVC);
    }
    
    private handlerIntersection(entries: IntersectionObserverEntry[]) {
        const entry = entries[0];
        const isVisible = entry.intersectionRatio >= this.threshold;

        if (isVisible) {
            this.player.play();
        } else {
            this.player.pause();
        }
    }

    private handleVC(){
        const isVisible = document.visibilityState === "visible";

        if (isVisible) {
            this.player.play();
        } else {
            this.player.pause();
        }
    }
}

export default AutoPause;

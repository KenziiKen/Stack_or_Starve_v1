import Phaser from 'phaser'
import './style.css'


const sizes = {
    width=900,
    height=900
}

const speedDown = 300;

class GameScene extends Phaser.Scene {
    constructor() {
        super("scene-game");
    }

    preload() 
    {
        this.load.image('bg2', './assets/bg2.png');
        // this.preload.image('dude', './assets/mc.png',{frameWidth:32,frameHeight:48});

    }
    create() 
    {
        let background = this.add.image(0,0,'bg2').setOrigin(0);
        this.game.state.start('Preloader');

    }
    update() 
    {

    }
}

const config = {
    type: Phaser.WEBGL,
    width: sizes.width,
    height: sizes.hieght,
    canvas: gameCanvas,
    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: speedDown },
            debug: true,
            preload: preload,
            create: create
        }
    }
}



scene: [GameScene]
const games = new Phaser.Game(config)
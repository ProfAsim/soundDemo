const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    audio: {
        disableWebAudio: false
    }
};

let bgm;
let jumpSound;
let isMuted = false;

const game = new Phaser.Game(config);

function preload() {
    // Load sound and image assets
    this.load.audio('jump', 'assets/sounds/jump.wav');
    this.load.audio('bgm', ['assets/music/theme.mp3', 'assets/music/theme.ogg']);
    this.load.image('sky', 'assets/images/sky.png');
}

function create() {
    // Add background image
    this.add.image(400, 300, 'sky');

    // Create sound objects
    bgm = this.sound.add('bgm', { loop: true, volume: 0.5 });
    jumpSound = this.sound.add('jump');

    // Play background music
    bgm.play();

    // Handle input
    this.input.keyboard.on('keydown-SPACE', () => {
        jumpSound.play();
    });

    this.input.keyboard.on('keydown-M', () => {
        isMuted = !isMuted;
        this.sound.mute = isMuted;
        console.log(`Sound ${isMuted ? 'muted' : 'unmuted'}`);
    });

    // Display instructions
    this.add.text(20, 20, 'Press SPACE to jump\nPress M to mute/unmute', {
        font: '20px Arial',
        fill: '#ffffff'
    });
}

function update() {
    // Optional: update logic
}

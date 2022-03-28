

var config = {
    type: Phaser.AUTO,
    width: 640,
    height: 300,
    _parent: 'phaser-game',
    backgroundColor: '#efefef',
    scene: {
        preload: preload,
        create: create,
    }
};

var game = new Phaser.Game(config);

function preload ()
{
       this.load.image("background", "./assets/sprites/jungle.png")
       this.load.image('giraffe', 'assets/sprites/giraffe.png');
       this.load.image('gorilla', 'assets/sprites/gorilla.png');
       this.load.image('hippo', 'assets/sprites/hippo.png');
       this.load.image('lion', 'assets/sprites/lion.png');
       this.load.image('monkey', 'assets/sprites/monkey.png');
       this.load.image('tiger', 'assets/sprites/tiger.png');
}

function create ()
{
    this.add.image(300, 80, 'background');

    let giraffe = this.add.sprite(470, 170, 'giraffe');
    giraffe.setScale(.4);
    giraffe.setInteractive();
    this.input.setDraggable(giraffe);

    let gorilla = this.add.sprite(380, 240, 'gorilla');
    gorilla.setScale(.035);
    gorilla.setInteractive();
    this.input.setDraggable(gorilla);


    let hippo = this.add.sprite(0, 250, 'hippo');
    hippo.setScale(.5);
    hippo.setInteractive();
    this.input.setDraggable(hippo);

    let lion = this.add.sprite(170, 200, 'lion');
    lion.setScale(.1);
    lion.setInteractive();
    this.input.setDraggable(lion);

    let monkey = this.add.sprite(50, 100, 'monkey');
    monkey.setScale(.04);
    monkey.setInteractive();
    this.input.setDraggable(monkey);
    
    let tiger = this.add.sprite(300, 180, 'tiger');
    tiger.setScale(.08);
    tiger.setInteractive();
    this.input.setDraggable(tiger);






    this.input.on('drag', function (pointer, gameObject, dragX, dragY) {

        gameObject.x = dragX;
        gameObject.y = dragY;

    });
}

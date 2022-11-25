class StartScreen extends Phaser.Scene {
	constructor() {
		super({ key: 'StartScreen' })
	}

  preload() {
    //startscreen UI
    this.load.image('startscreenimage', 'assets/lotro.jpg');
    this.load.image('startgamebox', 'assets/dialougebox.png');
    this.load.image('infobox', 'assets/infobox.png');
    this.load.audio('introsong', 'assets/introsong.mp3');
    
    
    }

	create() {
    //START INTRO SONG
    let introsongvar = this.sound.add('introsong');    
    introsongvar.loop = true;
    introsongvar.play();

    
    

    //SET BG IMAGE
    let image = this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2, 'startscreenimage')
    let scaleX = this.cameras.main.width / image.width
    let scaleY = this.cameras.main.height / image.height
    let scale = Math.max(scaleX, scaleY)
    image.setScale(scale).setScrollFactor(0)
    //let bg=this.add.image(500,500,"startscreenimage")
    
    //START SCREEN UI BUTTONS
    let startgamebtn=this.add.image(800,400,"startgamebox")
    startgamebtn.setScale(0.2)

    let loadgamebtn=this.add.image(800,550,"startgamebox")
    loadgamebtn.setScale(0.2)

    
    //TITLE SCREEN TEXT
    this.add.text(600, 100, "RPG GAME", { font: "80px Cardo", fill: "white"});
    this.add.text(700, 225, "by SamuelGames", { font: "40px Cardo  ", fill: "white"});



     //START MENU TEXT BUTTONS
    this.startbutton = this.add.text(680, 375, 'NEW GAME', { font: "40px Cardo", fill: "white"}).setInteractive();
    
    this.startbutton.on('pointerover', () => {    
      this.startbutton.setColor('lightgrey');
    })
  
    this.startbutton.on('pointerout', () => {    
      this.startbutton.setColor("white");
    })   
    
    var spaceBar1 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    spaceBar1.on('down', () => {    
      alert('hello');
    })
    

    //START THE GAME BUTTON. ADDING FADEOUT AFTER START
    this.startbutton.on('pointerup', () => {
      this.cameras.main.fadeOut(1500, 0, 0, 0)      
    })

    this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
      this.scene.start('CharScreen');
    })


    this.loadgamebtn = this.add.text(673, 526, 'LOAD GAME', { font: "40px Cardo", fill: "white"}).setInteractive();

    

    

    
    
}


		
	}

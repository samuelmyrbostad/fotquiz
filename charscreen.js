class CharScreen extends Phaser.Scene {
	constructor() {
		super({ key: 'CharScreen' })
		
	}

	create() {

		//FADE INTO SCENE
		this.cameras.main.fadeIn(1500, 0, 0, 0)


		//CHOOSE CLASS MENU---------------------
		
		let classbtn=this.add.image(715,277,"startgamebox")
    	classbtn.setScale(0.16)

		this.add.text( 350, 100, 'CREATE YOUR CHARACTER', {fill: 'white', font: "50px Cardo"})	
		if (character.Playerclass=='None') {
			this.classbtn = this.add.text(640, 260, 'CLASS: ' + character.Playerclass, { font: "25px Cardo", fill: "white"}).setInteractive();	
		}	
		
		if (character.Playerclass=='WARRIOR') {
			this.classbtn = this.add.text(606, 260, 'CLASS: ' + character.Playerclass, { font: "25px Cardo", fill: "white"}).setInteractive();	
		}

		if (character.Playerclass=='MAGE') {
			this.classbtn = this.add.text(630, 260, 'CLASS: ' + character.Playerclass, { font: "25px Cardo", fill: "white"}).setInteractive();	
		}
					
		//CLASSBTN HOVER
		this.classbtn.on('pointerover', () => {    
			this.classbtn.setColor('lightgrey');
		  })		
		this.classbtn.on('pointerout', () => {    
			this.classbtn.setColor("white");
		  })	

		
		//GO INTO CLASS CHOICE SCREEN
		this.classbtn.on('pointerup', () => {
			this.scene.start('PlayerClass');		
		  })	
		  
		  


		//ADVANCE INTO GAMEPLAY---------------------

		  //this.classtext = this.add.text(30, 300, character.Playerclass, { font: "20px Times New Roman", fill: "white"})
		this.readygame = this.add.text(600, 600, 'ADVANCE' , { font: "25px Cardo", fill: "white"}).setInteractive();			

		  //STARTGAME HOVER
		this.readygame.on('pointerover', () => {    
			this.readygame.setColor('lightgrey');
		  })		
		this.readygame.on('pointerout', () => {    
			this.readygame.setColor("white");
		  })	

		  //START GAME
		  this.readygame.on('pointerup', () => {
			if (character.Playerclass == 'None') {
				alert('you must choose a class')
			}
			else {
				this.cameras.main.fadeOut(1500, 0, 0, 0)

				this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
					this.scene.start('OpeningScene');
				  })	
			}
				
		  })
		}}

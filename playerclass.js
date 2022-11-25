class PlayerClass extends Phaser.Scene {
	constructor() {
		super({ key: 'PlayerClass' })
		
	}

	

	create() {
		
		//BOX IMAGES FOR BUTTONS
		let warriorchoosebtn=this.add.image(300,212,"startgamebox")    	
		warriorchoosebtn.setScale(0.08)
		let magechoosebtn=this.add.image(300,295,"startgamebox")    	
		magechoosebtn.setScale(0.08)
		let gobackclassbtn=this.add.image(300,500,"startgamebox")    	
		gobackclassbtn.setScale(0.08)

		//CLASS DESC BOX
		let classdescbox =this.add.image(900,350,"infobox")    	
		classdescbox.setScale(0.3)

		this.add.text( 185, 100, 'CLASS SELECTION', {fill: 'white', font: "25px Cardo"})	

		//CLASSTEXT		
		this.warriortextcontent = [
			'Warriors from the cold harsh land of academia.',
			"They hail from harsh lands that not many travel",
			"They are strong of mind",
			" ",
			"ATTACK: 15",
			"HEALTH: 150"
		]
		this.warriorclasstext = this.add.text(
			650, 140, this.warriortextcontent, 
			{fill: 'white', font: "20px Cardo"})

		this.magetextcontent = [
				'Mages from the mage tower of morrowind hunting for glory',
				"in forgotten places, and learn new spells from all",
				"They get great tomes and learn magic",
				" ",
				"ATTACK: 17",
				"HEALTH: 120"
			]	
		this.mageclasstext = this.add.text(
				650, 140, this.magetextcontent, 
				{ fill: 'white', font: "20px Cardo"})		
		
		this.warriorclasstext.setVisible(false);
		this.mageclasstext.setVisible(false);
		
		//CLASS BUTTONS

		this.warriorbutton = this.add.text(265, 200, 'Warrior', { font: "20px Cardo", fill: "white"}).setInteractive();	
		this.warriorbutton.on('pointerup', () => {
			this.warriorclasstext.setVisible(true);
			this.mageclasstext.setVisible(false);			
			character.Playerclass = "WARRIOR";
			character.Playerhealth = 150;
			character.Playerattack = 15;			
		  })	

		this.magebutton = this.add.text(276, 280, 'Mage', { font: "20px Cardo", fill: "white"}).setInteractive();	
		this.magebutton.on('pointerup', () => {
			this.mageclasstext.setVisible(true);
			this.warriorclasstext.setVisible(false);
			character.Playerclass = "MAGE";
			character.Playerhealth = 120;
			character.Playerattack = 17;

			})	
		
		



		this.classbackbutton = this.add.text(280, 486, 'Back', { font: "20px Cardo", fill: "white"}).setInteractive();
		this.classbackbutton.on('pointerup', () => {
			this.scene.start('CharScreen');
		});




		//HOVERING IN AND OUT OF BUTTONS
		this.warriorbutton.on('pointerover', () => {    
			this.warriorbutton.setColor('lightgrey');
		  })		
		this.warriorbutton.on('pointerout', () => {    
			this.warriorbutton.setColor("white");
		  })


		this.magebutton.on('pointerover', () => {    
			this.magebutton.setColor('lightgrey');
		  })	  
		this.magebutton.on('pointerout', () => {    
			this.magebutton.setColor("white");
		  })


		  	


		  this.classbackbutton.on('pointerover', () => {    
			this.classbackbutton.setColor('lightgrey');
		  })	  
		this.classbackbutton.on('pointerout', () => {    
			this.classbackbutton.setColor("white");
		  })  
		
		
	}

	
    
	

	
}

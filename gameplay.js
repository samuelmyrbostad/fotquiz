class GamePlay extends Phaser.Scene {
	

	constructor() {
		super({ key: 'GamePlay' })
		
	}

	preload() {
		//startscreen UI
		this.load.image('gameplayimage', 'assets/city.png');		
		}



//DIALOUGE OPTIONS------------------------------------------------------------------------------------

	typewriteText1(text)
	{
	const length = text.length
	let i = 0
	this.time.addEvent({
		callback: () => {
			this.label.text += text[i]
			++i
			if (i>length-1) {				
				this.option1 = this.add.text( 300, 500, '1: I have no idea why I am here', {fill: 'white', font: "20px Cardo"}).setInteractive();
				this.option2 = this.add.text( 300, 525, '2: Who are you?', {fill: 'white', font: "20px Cardo"}).setInteractive();
				this.option3 = this.add.text( 300, 550, '3: This is not acceptable', {fill: 'white', font: "20px Cardo"}).setInteractive();
				this.texthover();
				this.nextscene1();
			}							
		},
		repeat: length - 1,				
		delay: 100		
	})}



typewriteText2(text)
	{
	const length = text.length
	let i = 0
	this.time.addEvent({
		callback: () => {
			this.label.text += text[i]
			++i
			if (i>length-1) {				
				this.option1 = this.add.text( 300, 500, '1: This is weird', {fill: 'white', font: "20px Cardo"}).setInteractive();
				this.option2 = this.add.text( 300, 525, '2: Why you do this', {fill: 'white', font: "20px Cardo"}).setInteractive();
				this.option3 = this.add.text( 300, 550, '3: Smart move', {fill: 'white', font: "20px Cardo"}).setInteractive();
				this.texthover();
				this.nextscene2();
				}								
		},
		repeat: length - 1,				
		delay: 100		
	})}




	typewriteText3(text)
	{
	const length = text.length
	let i = 0
	this.time.addEvent({
		callback: () => {
			this.label.text += text[i]
			++i
			if (i>length-1) {				
				this.option1 = this.add.text( 300, 500, '1: Ok, that is cool', {fill: 'white', font: "20px Cardo"}).setInteractive();
				this.option2 = this.add.text( 300, 525, '2: Why would you say that', {fill: 'white', font: "20px Cardo"}).setInteractive();
				this.option3 = this.add.text( 300, 550, '3: Ok, we go', {fill: 'white', font: "20px Cardo"}).setInteractive();
				this.texthover();
				this.nextscene3();				
				}								
		},
		repeat: length - 1,				
		delay: 100		
	})}
//--------------------------------------------------------------------------------------


	//typewriteTextWrapped(text)
//{
	//const lines = this.label.getWrappedText(text)
	//const wrappedText = lines.join('\n')
	//this.typewriteText(wrappedText)	
//}


//try to fin a way to finish text faster wit space

//var spaceBar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    //spaceBar.on('down', () => {    
      //alert('hello');
    //})
    

//--------------------------------------------------------------------------------------------

	create() {		

		//FADE INTO SCENE
		this.cameras.main.fadeIn(1500, 0, 0, 0)

		
		//UI STUFF--------------------------------

		//SET BG IMAGE
		let image = this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2, 'gameplayimage')
		let scaleX = this.cameras.main.width / image.width
		let scaleY = this.cameras.main.height / image.height
		let scale = Math.max(scaleX, scaleY)
		image.setScale(scale).setScrollFactor(0)
		//let bg=this.add.image(500,500,"gameplayimage")


		//DIALOGUE BOX
		this.loadgamebtn=this.add.image(761,569,"startgamebox")
    	this.loadgamebtn.setScale(1.015)




		//--------------------------------------------------



		//FIRST SCENE ON SCREEN
		this.add.text( 20, 100, 'ADVENTURE GAME', {fill: 'white', font: "40px Cardo"})

		this.startingcontent = "You wake up, you are a " + character.Playerclass + ", your name is: " + character.Playername +
		'health: ' + character.Playerhealth + ' and attack is: ' + character.Playerattack
		
		//DET ER DENNE LABELEN SOM TYPEWRITER KOMMER PÅ
		this.label = this.add.text(300, 435, '', {fill: 'white', font: "20px Cardo"}).setWordWrapWidth(700)			
		this.typewriteText1(this.startingcontent)			
		}


		//FUNCTION REMOVE DIALOUGEBOX AND OPTIONS
		destroydialouge() {
			this.option1.destroy();
			this.option2.destroy();
			this.option3.destroy();	
			this.label.destroy();
			this.loadgamebtn.destroy();		
						
		}


		//SCENE1-------------------------------------------
		nextscene1() {		
			//OPTIONS EVENTS
			this.option1.on('pointerup', () => {
				this.option1.destroy();
				this.option2.destroy();
				this.option3.destroy();
				this.label.destroy();

				//BUILD UP NEW DIALOUGE
				this.startingcontent = "You know it man"
				this.label = this.add.text(300, 435, '', {fill: 'white', font: "20px Cardo"}).setWordWrapWidth(700)				
				this.typewriteText2(this.startingcontent)								
			  })

			  this.option2.on('pointerup', () => {
				this.option1.destroy();
				this.option2.destroy();
				this.option3.destroy();	
				this.label.destroy();				

				//BUILD UP NEW DIALOUGE
				this.startingcontent = "Emery is cool"
				this.label = this.add.text(300, 435, '', {fill: 'white', font: "20px Cardo"}).setWordWrapWidth(700)				
				this.typewriteText2(this.startingcontent)								
			  })

			  this.option3.on('pointerup', () => {
				this.option1.destroy();
				this.option2.destroy();
				this.option3.destroy();
				this.label.destroy();

				//BUILD UP NEW DIALOUGE
				this.startingcontent = "If you think that"				
				this.label = this.add.text(300, 435, '', {fill: 'white', font: "20px Cardo"}).setWordWrapWidth(700)				
				this.typewriteText2(this.startingcontent)								
			  })}

			



			  //SCENE2-------------------------------------------
		nextscene2() {		
			//OPTIONS EVENTS
			this.option1.on('pointerup', () => {
				this.option1.destroy();
				this.option2.destroy();
				this.option3.destroy();
				this.label.destroy();

				//BUILD UP NEW DIALOUGE
				this.startingcontent = "We are on 3rd level"
				this.label = this.add.text(300, 435, '', {fill: 'white', font: "20px Cardo"}).setWordWrapWidth(700)				
				this.typewriteText3(this.startingcontent)							
			  })

			  this.option2.on('pointerup', () => {
				this.option1.destroy();
				this.option2.destroy();
				this.option3.destroy();	
				this.label.destroy();				

				//BUILD UP NEW DIALOUGE
				this.startingcontent = "Gotten far"
				this.label = this.add.text(300, 435, '', {fill: 'white', font: "20px Cardo"}).setWordWrapWidth(700)				
				this.typewriteText3(this.startingcontent)									
			  })

			  this.option3.on('pointerup', () => {
				this.option1.destroy();
				this.option2.destroy();
				this.option3.destroy();
				this.label.destroy();

				//BUILD UP NEW DIALOUGE
				this.startingcontent = "Douglas luiz"				
				this.label = this.add.text(300, 435, '', {fill: 'white', font: "20px Cardo"}).setWordWrapWidth(700)				
				this.typewriteText3(this.startingcontent)												
			  })}



			  nextscene3() { 
				this.option1.on('pointerup', () => {
					this.destroydialouge();											
				  })
				this.option2.on('pointerup', () => {
					this.destroydialouge()														
				  })
				this.option3.on('pointerup', () => {
					this.destroydialouge();												
				  })
			  }	




			texthover() {
				//HOVERING TEXT
			this.option1.on('pointerover', () => {    
				this.option1.setColor('lightgrey');				
			  })
			  this.option1.on('pointerout', () => {    
				this.option1.setColor('white');
			  })
			this.option2.on('pointerover', () => {    
				this.option2.setColor('lightgrey');
			  })
			  this.option2.on('pointerout', () => {    
				this.option2.setColor('white');
			  })
			  this.option3.on('pointerover', () => {    
				this.option3.setColor('lightgrey');
			  })
			  this.option3.on('pointerout', () => {    
				this.option3.setColor('white');
			  })		
			}		
			
				
			}

	

		
		
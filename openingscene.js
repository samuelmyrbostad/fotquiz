class OpeningScene extends Phaser.Scene {
	

	constructor() {
		super({ key: 'OpeningScene' })
		
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


		//FIRST SCENE ON SCREEN
		this.add.text( 20, 100, 'ADVENTURE GAME', {fill: 'white', font: "40px Cardo"})

		this.startingcontent = "You wake up, you are a " + character.Playerclass + ", your name is: " + character.Playername +
		'health: ' + character.Playerhealth + ' and attack is: ' + character.Playerattack
		
		//DET ER DENNE LABELEN SOM TYPEWRITER KOMMER PÅ
		this.label = this.add.text(150, 200, '', {fill: 'white', font: "20px Cardo"}).setWordWrapWidth(700)			
		this.typewriteText1(this.startingcontent)		
		
		this.openingadvance = this.add.text(100, 600, 'ADVANCE', { font: "40px Cardo", fill: "white"}).setInteractive();
		this.openingadvance.on('pointerup', () => {
			this.scene.start('GamePlay');		
		  })
		
		}
			
	}
			

	

		
		
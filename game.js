


const gameState = {
	score: 0
};



let character = {
			Playername : 'Player',		
			Playerclass: 'None',	
			Playerhealth:100,
			Playerattack:5
		   };

       
const config = {
	type: Phaser.AUTO,
	width: window.innerWidth-15,
  height: window.innerHeight-25 ,
  backgroundColor: "#83827F",	
	scene: [StartScreen,CharScreen,PlayerClass,OpeningScene,GamePlay]
};

const game = new Phaser.Game(config);


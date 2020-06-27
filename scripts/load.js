function preload(){
  imageScenario = loadImage('images/scenario/arquibancada-cheia.jpg');
  imageInitialScreen = loadImage('images/assets/telaInicial.png');
  imageCharacter = loadImage('images/char/correndo.png');
    imageLife = loadImage('images/assets/coracao.png');
  imageEnemyGotinha = loadImage('images/enemies/gotinha.png');
  imageEnemyTroll = loadImage('images/enemies/troll.png');
  imageEnemyVoadora = loadImage('images/enemies/gotinha-voadora.png');
  imageGameOver = loadImage('images/assets/game-over.png');
  
  fontInitialScene = loadFont('images/assets/fonteTelaInicial.otf');
  
  gameSong = loadSound('audio/salgueiro.mp3');
  jumpSound = loadSound('audio/subida.mp3');
  gameOverSound = loadSound('audio/fechada.mp3');
  screamSound = loadSound('audio/scream.mp3');
}


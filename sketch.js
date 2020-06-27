function setup() {
  createCanvas(windowWidth, windowHeight);
  gameSong.loop();
  frameRate(40);
  game = new Game();
  game.setup();
  initialScene = new InitialScene();

  scenes = {
    game: game,
    initialScene: initialScene
  }
  
  buttonManager = new ButtonManager('Start', width/2, height/2);
}

function keyPressed() {
  game.keyPressed(key);
}

function draw() {
  scenes[actualScene].draw()
}
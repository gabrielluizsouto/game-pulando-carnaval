class Game {
  constructor() {
    this.actualEnemy = 0;
  }

  setup() {
    scenario = new Scenario(imageScenario, 10);
    character = new Character(characterMatrix, imageCharacter, 0, 80, 110, 135, 220, 270);

    pontuation = new Pontuation();
    life = new Life(3, 3);

    const enemyGotinha = new Enemy(enemyMatrixGotinha, imageEnemyGotinha, width, 80, 52, 52, 104, 104, 10, 100);
    const enemyTroll = new Enemy(enemyMatrixTroll, imageEnemyTroll, width, 60, 250, 200, 400, 400, 15, 100);
    const enemyVoadora = new Enemy(enemyMatrixVoadora, imageEnemyVoadora, width, 220, 100, 75, 200, 150, 19, 100);

    enemies.push(enemyGotinha);
    enemies.push(enemyVoadora);
    enemies.push(enemyTroll);
  }

  keyPressed(key) {
    if (key == 'ArrowUp') {
      character.jump();
      jumpSound.play();
    }
    if (key == 'Enter') {
      actualScene = 'initialScene';
      this.restartGame();
      buttonManager.button.show();
      loop();
    }
  }
  
  restartGame() {
    window.location.reload();
  }

  draw() {
    scenario.show();
    scenario.move();

    pontuation.show();
    pontuation.addPoint();

    life.draw();

    character.show();
    character.applyGravity();

    const enemy = enemies[this.actualEnemy];

    enemy.show();
    enemy.move();

    if (enemy.isVisible()) {
      this.actualEnemy = parseInt(random(0, 3));
      enemy.velocity = parseInt(random(25, 35));
    }

    if (character.isColliding(enemy)) {
      console.log('sambou');
      screamSound.play();
      life.subLife();
      character.beInvincible();

      if (life.lifes <= 0) {
        gameSong.stop();
        gameOverSound.play();
        image(imageGameOver, width / 2 - 200, height / 3);
        
        setTimeout(() => {}, 100);
        noLoop();
        textAlign(CENTER);
        text('Press Enter do play again', width/2, height/5*1.5);
      }
    }
  }
}
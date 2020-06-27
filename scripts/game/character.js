class Character extends CharAnimation {
    constructor(matrix, image, xScreen, yVariation, charWidth, charHeight, spriteWidth, spriteHeight){
      super(matrix, image, xScreen, yVariation, charWidth, charHeight, spriteWidth, spriteHeight);
      this.yVariation = yVariation;
      
      this.yInitial = height - charHeight - yVariation;
      this.yScreen = this.yInitial;
      
      this.jumpVelocity = 0;
      this.jumpHeight = -30;
      this.gravity = 3;
      this.jumps = 0;
      
      this.invincible = false;
    }
  
  jump(){
    if(this.jumps < 2){
      this.jumpVelocity = this.jumpHeight;
      this.jumps++;
    }
  }
  
  applyGravity(){
    this.yScreen = this.yScreen + this.jumpVelocity;
    this.jumpVelocity = this.jumpVelocity + this.gravity;
    
    //if reach the floor
    if(this.yScreen > this.yInitial){
      this.yScreen = this.yInitial;
      this.jumps = 0;
    }
  }  
  
  isColliding(enemy){
    if(this.invincible == true){
       return false;
    }
    const precision = 0.7;
    
    /* hitbox view
    noFill();
    circle(this.xScreen + this.charWidth/2, 
      this.yScreen + this.charHeight/2, 
      this.charWidth);
    circle(enemy.xScreen + enemy.charWidth/1.5, 
      enemy.yScreen + enemy.charHeight/2, 
      enemy.charWidth * precision);
    */
    
    
    const collision = collideCircleCircle(
      this.xScreen + this.charWidth/2, 
      this.yScreen + this.charHeight/2, 
      this.charWidth,
      enemy.xScreen + enemy.charWidth/1.5, 
      enemy.yScreen + enemy.charHeight/2, 
      enemy.charWidth * precision
    );
    
    return collision;
  }
  
  beInvincible(){
    this.invincible = true;
    setTimeout(()=>{this.invincible = false}, 1000);
  }
}
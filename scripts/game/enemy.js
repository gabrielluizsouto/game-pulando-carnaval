class Enemy extends CharAnimation {
    constructor(matrix, image, xScreen, yVariation, charWidth, charHeight, spriteWidth, spriteHeight, velocity, delay){
      super(matrix, image, xScreen,  yVariation, charWidth, charHeight, spriteWidth, spriteHeight, velocity, delay);
      this.velocity = velocity;
      this.delay = delay;
      this.xScreen = width + this.delay;
    }
  
  move(){
    this.xScreen = this.xScreen - this.velocity;
    
    if(this.xScreen < -this.charWidth - this.delay){
      this.xScreen = width;
    }
  }
  
  isVisible(){
      return this.xScreen < - this.charWidth;
  }
}
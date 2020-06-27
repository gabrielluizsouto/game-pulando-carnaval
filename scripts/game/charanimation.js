class CharAnimation {
   constructor(matrix, image, xScreen, yVariation, charWidth, charHeight, spriteWidth, spriteHeight){
     this.matrix = matrix;
     this.image = image;
     this.xScreen = xScreen;
     this.yVariation = yVariation;
     this.yScreen = height - charHeight - yVariation;
     this.charWidth = charWidth;
     this.charHeight = charHeight;
     this.spriteWidth = spriteWidth;
     this.spriteHeight = spriteHeight;
     
     this.actualFrame = 0;
     
   }
  
  
  
  show(){
    image(this.image, this.xScreen, this.yScreen, this.charWidth, this.charHeight, this.matrix[this.actualFrame][0], this.matrix[this.actualFrame][1], this.spriteWidth, this.spriteHeight);
    
    this.animate();
  }
  
  animate(){
    this.actualFrame >= this.matrix.length-1 ? this.actualFrame = 0 : this.actualFrame++;
    /*
    this.actualFrame++;
    if(this.actualFrame >= this.matrix.length-1) {
      this.actualFrame = 0;
    }
    */
  }
}
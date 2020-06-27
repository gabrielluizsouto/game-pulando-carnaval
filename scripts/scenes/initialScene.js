class InitialScene {
  constructor(){}
  
  draw(){
    this._backgroundImage();
    this._text();
    this._button();
  }
  
  _backgroundImage(){
    image(imageInitialScreen, 0, 0, width, height);
  }
  
  _text(){
    textFont(fontInitialScene);
    textAlign(CENTER)
    textSize(50);
    text('The Samba Adventures', width/2, height/3);
    textSize(80);
    text('Pulando carnaval', width/2, height/5*2.5);
  }
  
  _button(){
    buttonManager.y = height/7*4;
    buttonManager.draw();
  }
}
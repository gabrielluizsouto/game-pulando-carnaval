class Pontuation{
  constructor(){
    this.points = 0;
  }  
  
  show(){
    textAlign(RIGHT)
    fill("#fff")
    textSize(50);
    text(this.points, width -30, 50)  
  }
  
  addPoint(){
    this.points++;  
  }
}
class Life {
  constructor(total, initial){
    this.total = total;
    this.initial = initial;
    this.lifes = this.initial;
    
    this.width = 25;
    this.height = 25;
    this.xInitial = 20;
    this.y = 20;

  }
  
  draw(){
    
    for(let i = 0; i < this.lifes; i++){
      const margin = i*10;
      const position = this.xInitial * (1 + i);
    
    image(imageLife, position+margin, this.y, this.width, this.height);
    }
  }
  
  addLife(){
    if(this.lifes <= this.total){
      this.lifes++;  
    }
  }
  
  subLife(){
    this.lifes--;
  }
}
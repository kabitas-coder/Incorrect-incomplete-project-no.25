class Paper extends BaseClass {
    constructor(x,y){
      super(x,y,200,265);
      this.image = loadImage ("sprites/paper.png")
    }
    display();
  }
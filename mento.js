class Caixa {
  constructor(x, y, width, height) {
    var options = { isStatic: false, friction: 40  };
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world,this.body)
  }
  display() {
    var pos = this.body.position;
    rectMode(CENTER);
    fill(46,0,0);
    rect(pos.x, pos.y, this.width, this.height);
  }
}
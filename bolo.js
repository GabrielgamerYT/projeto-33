class Hummm{
  constructor(x, y,r) {
    var options = { isStatic: false,density: 10};
    this.body = Bodies.circle(x, y,r, options);
    this.r = r;
    World.add(world,this.body)
  }
  display() {
    var pos = this.body.position;
    ellipseMode(RADIUS);
    fill("black");
    ellipse(pos.x, pos.y, this.r);
  }



}
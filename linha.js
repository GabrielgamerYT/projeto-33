class Corda {
  constructor(bodyA, pointB) {
    var options = { bodyA: bodyA, pointB: pointB, stiffness: 1.2, length: 325 };
    this.pointB = pointB;
    this.body = Constraint.create(options);
    World.add(world, this.body);
  }
  display() {
    if (this.body.bodyA) {
      var pointA = this.body.bodyA.position;
      var pointB = this.pointB;
      strokeWeight(4);
      line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
  }
}

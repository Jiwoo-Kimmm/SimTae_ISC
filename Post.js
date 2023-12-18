class Post {
    constructor(t) {
      this.t = t;
      this.x = random(107, 730);
      this.y = random(300, 730);
      this.a = random(-PI/6, PI/6)
      this.c = color(0);
      this.createdAt = Date.now();
      this.latest = false;
      this.size = 30;
      
    }
    draw() {
      
      push()
      translate(this.x, this.y)
      rotate(this.a)
      
      fill(this.c);
      textSize(this.size);
      text(this.t, 0, 0)
      pop()
    }
    isMouseOver() {
      let xRange = mouseX > 0
    }
    highlight() {
      this.latest = true;
      this.c = color(233, 51, 142);
    }
    unhighlight() {
      this.latest = false;
      this.c = color(0);
    }
  }
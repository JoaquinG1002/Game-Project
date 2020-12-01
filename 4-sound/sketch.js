let balls = [];

function setup() {
  createCanvas(600, 600);
}

let value = "brown";

function draw() {
  background("aqua")
  fill("brown");
  rect(75, 160, 50, 400);
  fill("green")
  rect(75, 90, 50, 75)
  rect(125, 115, 75, 50)
  rect(0, 115, 75, 50)




  for (let i = 0; i < balls.length; i++) {
    balls[i].drawBall();
    balls[i].moveBall();

  }


}


function keyPressed() {
  if (keyCode === LEFT_ARROW) { //create a ball on the right side of the screen

      let b = new Ball(width, random(110, 210), -3);
      balls.push(b);
      console.log(balls);

  }
}


class Ball {

  constructor(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
  }
  drawBall() {
    stroke(0);
    strokeWeight(3);
    fill("black");
    ellipse(this.x, this.y, 8, 8);
  }

  moveBall() {
    this.x = this.x + this.speed;
    this.y = this.y + 0;
  }

}

  	//}

//}

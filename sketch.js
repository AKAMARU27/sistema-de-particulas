let nPelotas = 1000;
let pelotas = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < nPelotas; i++) {
    pelotas[i] = new RandomWalek(i);
  }
}

function draw() {
  for (let i = 0; i < nPelotas; i++) {
    pelotas[i].update();
    pelotas[i].display();
  }
  
}

// _____
// __Classes__
// _____


// __Random walek__

class RandomWalek {
  constructor(_name) {
    this.red = random(100, 100);
    this.green = random(0, 200);
    this.blue = random(100, 200);

    this.t=0;
    this.tSpeed =random(0.1);
    this.noiseShift = random(10);

    this.pos = createVector(width /-1, height / 5);
    this.speed = createVector(random(20,10), random(60,20));
    this.diametro = random(10, 30);
    print('Hola! soy particulas cu te' + this.name);
  }

  update(_t) {
    this.speed.rotate(map(noise(this.t + this.noiseShift ),0, 1, -0.5, 0.5));
    this.pos.add(this.speed);

    this.t += this.tSpeed;
  }

  display() {
    noStroke ("rgba(1,0,0,1");
    strokeWeight(1)
    fill(this.red, this.green, this.blue);
    ellipse(this.pos.x, this.pos.y, this.diametro, this.diametro);
   

  }
}
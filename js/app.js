function drawFractral(center, vertexCount, radius) {
  let alpha = 0;
  const alphaStep = (PI * 2) / vertexCount;

  beginShape();

  for (let i = 0; i <= vertexCount; i++) {
    const v = {
      x: center.x + Math.cos(alpha) * radius,
      y: center.y + Math.sin(alpha) * radius,
    };
    alpha += alphaStep;
    vertex(v.x, v.y);
  }

  endShape();
}

function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(0);

  noFill();
  stroke(255);
  drawFractral({ x: width / 2, y: height / 2 }, sides, radio);
}

let sides = 5;
let radio = 100;

const inputVertex = document.querySelector(".input-vertex");
const inputRadio= document.querySelector(".input-radio");

inputVertex.addEventListener("change", (event) => (sides = inputVertex.value));
inputRadio.addEventListener("change", (event) => (radio = inputRadio.value));

function drawFractral(center, vertexCount, radius, reductor, iteration) {
  if (iteration <= 0) return;

  let alpha = 0;
  const alphaStep = (PI * 2) / vertexCount;
  const listVertex = [];

  beginShape();

  for (let i = 0; i <= vertexCount; i++) {
    const v = {
      x: center.x + Math.cos(alpha) * radius,
      y: center.y + Math.sin(alpha) * radius,
    };
    alpha += alphaStep;
    listVertex.push(v);
    vertex(v.x, v.y);
  }

  endShape();

  for (const item of listVertex) {
    drawFractral(item, vertexCount, radius * reductor, reductor, iteration - 1);
  }
}

function setup() {
  let canvas = createCanvas(640, 480);
  canvas.parent("canvas-holder");
  background(0);
}

let angle = 0;
function draw() {
  background(Math.abs(255 * Math.cos(angle)));

  translate(width / 2, height / 2);
  rotate(angle);

  angle += 0.006;

  noFill();
  stroke(Math.abs(255 * Math.sin(angle)));
  drawFractral({ x: 0, y: 0 }, sides, radio, 0.75, interations);
}

let sides = 5;
let radio = 100;
let interations = 2;

const inputVertex = document.querySelector(".input-vertex");
const inputRadio = document.querySelector(".input-radio");
const inpuIterations = document.querySelector(".input-iterations");

inputVertex.addEventListener("change", (event) => (sides = inputVertex.value));
inputRadio.addEventListener(
  "change",
  (event) => (radio = inputRadio.value * 10)
);
inpuIterations.addEventListener(
  "change",
  (event) => (interations = inpuIterations.value)
);

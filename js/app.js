function fractalTree(start, len, branches, arc, baseAngle, step) {
  if (step <= 0) return;

  const angleStep = arc / branches;
  const halfArc = arc / 2;

  let angle = baseAngle;

  for (let i = 0; i <= branches; i++) {
    const end = {
      x: start.x + Math.cos(angleStep) * len,
      y: start.y + Math.sin(halfArc) * len,
    };

    line(start.x, start.y, end.x, end.y);

    angle = angle+1;
  }
}

function setup() {
  let canvas = createCanvas(640, 480);
  canvas.parent("canvas-holder");
}

function draw() {
  background(0);
  translate(width / 2, height / 2);

  noFill();
  stroke(255, 123, 23);
  fractalTree({ x: 0, y: 0 }, 100, 2, (PI), 1, 1);
}

//controles
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

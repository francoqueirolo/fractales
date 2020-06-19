function fractalTree(start, len, branches, arc, baseAngle, step) {
  if (step <= 0) return;

  const angleStep = arc / branches;
  const halfArc = arc / 2;

  let angle = baseAngle - halfArc;

  for (let i = 0; i <= branches; i++) {
    const end = {
      x: start.x + Math.cos(angle) * len,
      y: start.y + Math.sin(angle) * len,
    };

    line(start.x, start.y, end.x, end.y);

    fractalTree(end, len * 0.8, branches, arc, angle, step - 1);
    angle += angleStep;
  }
}

function setup() {
  let canvas = createCanvas(640, 480);
  canvas.parent("canvas-holder");
}

let tick = 0;

function draw() {
  let arc = isCheck ? (PI / 2) * Math.sin(tick) : (PI / 2);


  background(0);
  translate(width / 2, height - 100);

  noFill();
  stroke(55, 123, 23);

  fractalTree({ x: 0, y: 0 }, 100, branches, arc, -(PI / 2), steps);
  tick += 0.006;
}

//controles
let branches = 5;
let steps = 4;
let isCheck = false;

const inBranch = document.querySelector(".input-branches");
const inSteps = document.querySelector(".input-steps");
const inAnima = document.querySelector(".check-anima");

inBranch.addEventListener("change", (event) => (branches = inBranch.value));
inSteps.addEventListener("change", (event) => (steps = inSteps.value));
inAnima.addEventListener("change", (event) => {
  isCheck = inAnima.checked;
  console.log('isCheck', isCheck)
});

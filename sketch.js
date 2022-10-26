
let benches = []

var projection = d3
  .geoMercator()
  .center([8.3090, 47.0502])
  .translate([400, 400])
  .scale(300000)


function preload() {
  benches = loadJSON('benches.json')
}

function setup() {
  createCanvas(800, 800,SVG);

  console.log(benches);

  noLoop();
}

function draw() {
  clear();

  // Draw benches looping over benches.features
  for (let i = 0; i < benches.features.length; i++) {
    let bench = benches.features[i]
    let pos = projection(bench.geometry.coordinates)
    noStroke();
    fill(255,0,0)
    rect(pos[0], pos[1], 10, 3)
  }

  save("benches.svg");

}


let benches = []

var projection = d3
  .geoMercator()
  .center([8.3090, 47.0502])
  .translate([400, 400])
  .scale(300000)


var colScale = d3
  .scaleSequential(d3.interpolateSpectral)
  .domain([0,5]);


function preload() {
  benches = loadJSON('benches.json')
}

function setup() {
  createCanvas(800, 800);

  console.log(benches);


  console.log(colScale(0));
  console.log(colScale(1));
  console.log(colScale(2));
  console.log(colScale(4));
 
  noLoop();
}

function draw() {
  background(255);

  // Draw benches looping over benches.features
  for (let i = 0; i < benches.features.length; i++) {
    let bench = benches.features[i]
    let pos = projection(bench.geometry.coordinates)


    let col = colScale(bench.properties.FARBE);
    console.log(col);
    noStroke();
    fill(col)
    rect(pos[0], pos[1], 10, 3)
  }

  

}

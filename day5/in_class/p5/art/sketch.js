
let rectXrand = Math.floor(Math.random()*window.innerWidth)
let rectYrand = Math.floor(Math.random() * 500)

let elipseXrand = Math.floor(Math.random()*window.innerWidth)
let elipseYrand = Math.floor(Math.random() * 500)

let traingleX1rand = Math.floor(Math.random()*window.innerWidth)
let traingleY1rand = Math.floor(Math.random() * 500)

let traingleX2rand = Math.floor(Math.random()*window.innerWidth)
let traingleY2rand = Math.floor(Math.random() * 500)




function setup() {
  // put setup code here
  createCanvas(window.innerWidth, 500)
  background('red')
}

function draw() {
  // put drawing code here
  background('red')
  fill('green')
  stroke('yellow')
  rect(rectXrand, rectYrand, 100, mouseY)
  noStroke()
  fill('blue')
  ellipse(elipseXrand, elipseYrand, mouseX/3)
  console.log(frameCount)
  fill('orange')
  triangle(traingleX1rand, traingleY1rand, traingleX2rand, traingleY2rand, mouseX, mouseY)
}
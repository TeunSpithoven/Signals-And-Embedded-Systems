// Generate a sine wave
const sampleRate = 50000;
const volume = 0.6;
const seconds = 0.01;
const tone = 441;

function sineWaveAt(sampleNumber, tone) {
  var sampleFreq = sampleRate / tone;
  return Math.sin(sampleNumber / (sampleFreq / (Math.PI * 2)));
}

var arr = [];
for (var i = 0; i < sampleRate * seconds; i++) {
  arr[i] = sineWaveAt(i, tone) * volume;
}

// Display the sine wave in the sine-container section
var sineCanvas = document.createElement("canvas");
var ctx = sineCanvas.getContext("2d");

const canvasWidth = arr.length;
const canvasHeight = 200;
sineCanvas.width = canvasWidth;
sineCanvas.height = canvasHeight;

ctx.beginPath();
ctx.moveTo(0, 100);
for (let i = 0; i < arr.length; i++) {
  ctx.lineTo(i, canvasHeight / 2 - arr[i] * 100);
}

// ctx.lineTo(20, 100);
// ctx.lineTo(70, 100);
ctx.stroke();

var sineCanvasContainer = document.getElementById("sine-container");
sineCanvasContainer.appendChild(sineCanvas);

// Create a new sine wave with noise
// Display the sine wave in the sine-noise-container section

// Do a moving average calculation on the sine wave with noise.
// Display the result in the sine-moving-container section.

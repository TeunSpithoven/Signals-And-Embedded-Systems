// Generate a sine wave
const sampleRate = 50000;
const volume = 0.6;
const seconds = 0.01;
const tone = 441;

function sineWaveAt(sampleNumber, tone) {
  var sampleFreq = sampleRate / tone;
  return Math.sin(sampleNumber / (sampleFreq / (Math.PI * 2)));
}

var sineWave = [];
for (var i = 0; i < sampleRate * seconds; i++) {
  sineWave[i] = sineWaveAt(i, tone) * volume;
}

// Display the sine wave in the sine-container section
var sineCanvas = document.createElement("canvas");
var ctx = sineCanvas.getContext("2d");

const canvasWidth = sineWave.length;
const canvasHeight = 200;
sineCanvas.width = canvasWidth;
sineCanvas.height = canvasHeight;

ctx.beginPath();
ctx.moveTo(0, 100);
for (let i = 0; i < sineWave.length; i++) {
  ctx.lineTo(i, canvasHeight / 2 - sineWave[i] * 100);
}

ctx.stroke();

var sineCanvasContainer = document.getElementById("sine-container");
sineCanvasContainer.appendChild(sineCanvas);

// Create a new sine wave with noise

var sineWaveWithNoise = [];
for (var i = 0; i < sampleRate * seconds; i++) {
  const randomAmplitude = volume - Math.floor(Math.random() * 10) / 30;
  sineWaveWithNoise[i] = sineWaveAt(i, tone) * randomAmplitude;
}
// Display the sine wave in the sine-noise-container section
var sineCanvasWithNoise = document.createElement("canvas");
var ctx = sineCanvasWithNoise.getContext("2d");

const canvasWithNoiseWidth = sineWave.length;
const canvasWithNoiseHeight = 200;
sineCanvasWithNoise.width = canvasWidth;
sineCanvasWithNoise.height = canvasHeight;

ctx.beginPath();
ctx.moveTo(0, 100);
for (let i = 0; i < sineWave.length; i++) {
  ctx.lineTo(i, canvasHeight / 2 - sineWaveWithNoise[i] * 100);
}

ctx.stroke();

var sineCanvasWithNoiseContainer = document.getElementById(
  "sine-noise-container"
);
sineCanvasWithNoiseContainer.appendChild(sineCanvasWithNoise);

// Do a moving average calculation on the sine wave with noise.
// Display the result in the sine-moving-container section.

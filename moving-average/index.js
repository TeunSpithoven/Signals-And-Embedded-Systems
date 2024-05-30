// Generate a sine wave
var sampleRate = 50000;
var noise = 30;
var sampleSize = 10;
const volume = 0.6;
const seconds = 0.01;
const tone = 441;

document
  .getElementById("sine-samples-slider")
  .addEventListener("change", function () {
    console.log("samples: " + this.value);
    sampleRate = this.value;
    Calculate();
  });

document
  .getElementById("sine-noise-slider")
  .addEventListener("change", function () {
    console.log("noise: " + this.value);
    noise = this.value;
    Calculate();
  });

document
  .getElementById("sine-sample-size-slider")
  .addEventListener("change", function () {
    console.log("sample-size: " + this.value);
    sampleSize = this.value;
    Calculate();
  });

function Calculate() {
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
  sineCanvasContainer.innerHTML = "";
  sineCanvasContainer.appendChild(sineCanvas);

  // Create a sine wave with noise
  var sineWaveWithNoise = [];
  for (var i = 0; i < sampleRate * seconds; i++) {
    const randomAmplitude = volume - Math.floor(Math.random() * noise) / 30;
    sineWaveWithNoise[i] = sineWaveAt(i, tone) * randomAmplitude;
  }
  // Display the sine wave in the sine-noise-container section
  var sineCanvasWithNoise = document.createElement("canvas");
  var ctx = sineCanvasWithNoise.getContext("2d");

  const canvasWithNoiseWidth = sineWaveWithNoise.length;
  const canvasWithNoiseHeight = 200;
  sineCanvasWithNoise.width = canvasWidth;
  sineCanvasWithNoise.height = canvasHeight;

  ctx.beginPath();
  ctx.moveTo(0, 100);
  for (let i = 0; i < sineWaveWithNoise.length; i++) {
    ctx.lineTo(i, canvasHeight / 2 - sineWaveWithNoise[i] * 100);
  }

  ctx.stroke();

  var sineCanvasWithNoiseContainer = document.getElementById(
    "sine-noise-container"
  );
  sineCanvasWithNoiseContainer.innerHTML = "";
  sineCanvasWithNoiseContainer.appendChild(sineCanvasWithNoise);

  // Do a moving average calculation on the sine wave with noise.
  var sineWaveAverage = [];
  // loop over iedere sample
  for (let i = 0; i < sineWaveWithNoise.length; i++) {
    var sum = 0;
    var average = 0;

    if (i >= sampleSize / 2) {
      // ook terug kijken
      for (
        let addSample = 0 - sampleSize / 2;
        addSample < sampleSize / 2;
        addSample++
      ) {
        sum += sineWaveWithNoise[i + addSample];
      }
    } else {
      // alleen vooruit kijken
      for (let addSample = 0; addSample < sampleSize; addSample++) {
        sum += sineWaveWithNoise[i + addSample];
      }
    }
    average = sum / sampleSize;

    sineWaveAverage.push(average);
  }

  // Display the result in the sine-moving-container section.
  var sineCanvasAverage = document.createElement("canvas");
  var ctx = sineCanvasAverage.getContext("2d");

  const canvasWithNoiseAverage2Width = sineWaveAverage.length;
  const canvasWithNoiseAverage2Height = 200;
  sineCanvasAverage.width = canvasWidth;
  sineCanvasAverage.height = canvasHeight;

  ctx.beginPath();
  ctx.moveTo(0, 100);
  for (let i = 0; i < sineWaveAverage.length; i++) {
    ctx.lineTo(i, canvasHeight / 2 - sineWaveAverage[i] * 100);
  }

  ctx.stroke();

  var sineCanvasAverageContainer = document.getElementById(
    "sine-average-container"
  );
  sineCanvasAverageContainer.innerHTML = "";
  sineCanvasAverageContainer.appendChild(sineCanvasAverage);
}

Calculate();

// Preload frames
const frames = [];

for (let i = 1; i <= 60; i++) {
  if (i > 9) frames.push(`frames/ezgif-frame-0${i}.jpg`);
  else frames.push(`frames/ezgif-frame-00${i}.jpg`);
}

let index = 0;
const frameEl = document.getElementById("frame");
frameEl.src = frames[index];

// Play through frames
function playFrames() {
  if (index < frames.length - 1) {
    index++;
    frameEl.src = frames[index];
    setTimeout(playFrames, 50); // adjust speed (ms per frame)
  }
}

// Auto-start animation
playFrames();

// Optional: clicking skips straight to final frame
frameEl.addEventListener("click", () => {
  frameEl.src = frames[frames.length - 1];
  index = frames.length - 1;
});

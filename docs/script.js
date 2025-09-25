const frameEl = document.getElementById("frame");
frameEl.src = "gif/closed.gif";

frameEl.addEventListener("click", () => {
  frameEl.src = "gif/opened.gif";
});
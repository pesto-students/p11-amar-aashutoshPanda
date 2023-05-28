let timerId = null;
let imgX = 0;
let imgY = 0;

function startAnimation() {
  if (timerId !== null) {
    clearInterval(timerId);
  }

  const heartImg = document.getElementById("heart");
  const rect = heartImg.getBoundingClientRect();

  document.addEventListener("click", (event) => {
    const clickX = event.clientX;
    const clickY = event.clientY;

    moveImage(clickX, clickY);
  });
}

function moveImage(clickX, clickY) {
  const heartImg = document.getElementById("heart");
  const rect = heartImg.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  heartImg.style.animationName = "moveHeart";
  heartImg.style.animationTimingFunction = "linear";
  heartImg.style.animationDuration = "1s";
  heartImg.style.animationFillMode = "forwards";
  heartImg.style.left = event.clientX - centerX + "px";
  heartImg.style.top = event.clientY - centerY + "px";
}

startAnimation();

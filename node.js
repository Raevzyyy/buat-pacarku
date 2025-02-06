function showLoveMessage() {
    const message = document.getElementById("message");
    message.classList.remove("hidden");
    message.innerHTML = "Semoga harimu penuh cinta dan kebahagiaan! ❤";
}

function createFallingHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart-animation");
    heart.innerHTML = "❤";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}
setInterval(createFallingHeart, 300);

function createSparkle() {
    const sparkle = document.createElement("div");
    sparkle.classList.add("sparkle");
    sparkle.style.left = Math.random() * 100 + "vw";
    sparkle.style.top = Math.random() * 100 + "vh";
    sparkle.style.animationDuration = Math.random() * 1.5 + 0.5 + "s";
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 1500);
}
setInterval(createSparkle, 200);
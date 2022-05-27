let circle = document.getElementById("circle");
let upBtn = document.getElementById("upBtn");
let downBtn = document.getElementById("downBtn");

let rotateValue = circle.style.transform; // cssのcircle IDのtransform要素を取ってくる
// console.log(rotateValue);
let rotateSum;

upBtn.onclick = function () {
    // 時計回りに+90°回転
    rotateSum = rotateValue + "rotate(-90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum
}

downBtn.onclick = function () {
    // 時計回りにｰ90°回転
    rotateSum = rotateValue + "rotate(90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum
}


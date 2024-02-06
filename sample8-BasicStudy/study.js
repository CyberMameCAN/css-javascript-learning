// 1
console.log(window.innerWidth);
console.log(window.innerHeight);
// 3
let heading1 = document.getElementById("hellow");
heading1.innerHTML = "Hello, World!"
// heading1.innerText = "Hello, World"
console.log(heading1.innerText)
// 4
const fruits = document.getElementById("fruits");
console.log(fruits.className); 
// 5
setTimeout(function() {
    alert("アラート");
}, 2000);
// 6
const favarits = ["リンゴ", "メロン", "バナナ"];
console.log(favarits[1]);
// 7
const childCount = fruits.childElementCount;
console.log(childCount);
const elm = document.querySelectorAll("ul li");
console.log(elm.length)
// 8
heading1.classList.add("to-red");
// 9
// heading1.classList.remove("to-red");
// 11
let new_li_ele = document.createElement("li");
new_li_ele.textContent = "スイカ";
// fruits.prepend(new_li_ele); // 先頭に追加
// 12
fruits.appendChild(new_li_ele); // 末に追加
// 16
// const elem = document.getElementsByClassName("trigger");
const elem = document.querySelector(".trigger");
// function clickEvent() {
//     let target = document.getElementsByClassName("target");
//     target[0].style.display = "block";
// }
// elem[0].onclick = clickEvent;
// 無名関数をつかって
elem.addEventListener("click", function() {
    // let target = document.getElementsByClassName("target");
    let target = document.querySelector(".fadein");
    if(target.style.display == "none") {
        target.style.display = "block";
    } else {
        target.style.display = "none";
    }
});

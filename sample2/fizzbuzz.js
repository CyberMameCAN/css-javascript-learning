const fb = (value) => {
    
    if (value % 3 === 0 && value % 5 === 0) {
        return "FizzBuzz"
    } else if (value % 3 === 0) {
        return "Fizz";
    } else if (value % 5 === 0) {
        return "Buzz"
    } else {
        return value
    }
}

// HTMLへ出力する
const body = document.getElementsByTagName("body")[0];


for (let i=1; i<=100; i++) {
    const p = document.createElement("p");
    p.textContent = fb(i);
    body.appendChild(p);
    // console.log(i, ">>", fb(i))
}

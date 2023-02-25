/*const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');
btn.addEventListener('click', function () {
    let hexcolor = "#";
    for (let i = 0; i < 6; i++) {
        hexcolor += hex[getrandomNumber()];
    }
    document.getElementById('color').innerText = hexcolor;
    document.body.style.backgroundColor = hexcolor;
})

function getrandomNumber() {
    return Math.floor(Math.random() * hex.length);
}*/

var n = 0;
const btn_plus = document.getElementById('btn_plus');
const btn_minus = document.getElementById('btn_minus');
const btn_reset = document.getElementById('btn_reset');
btn_plus.addEventListener('click', function () {
    n++;
    document.getElementById('number').innerText = n;
    console.log(n);
    if (n >= 0) {
        document.getElementById('number').style.color = "black";
    }
})
btn_minus.addEventListener('click', function () {
    n--;
    document.getElementById('number').innerText = n;
    // console.log(n);
    if (n < 0) {
        document.getElementById('number').style.color = "red";
    }
})
btn_reset.addEventListener('click', function () {
    n = 0;
    document.getElementById('number').innerText = n;
    // console.log(n);
    document.getElementById('number').style.color = "black";
})


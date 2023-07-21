const body = document.querySelector("body");
function makeColor() {
    let r = parseInt(Math.random() * 255);
    let g = parseInt(Math.random() * 255);
    let b = parseInt(Math.random() * 255);
    return `rgb(${r},${g},${b})`
}

const button = document.querySelector('button');
const h1 = document.querySelector('h1');

button.addEventListener('click', () => {
    h1.innerText = makeColor();
    body.style.backgroundColor = makeColor();
})
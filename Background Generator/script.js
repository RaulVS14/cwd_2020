let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let randomButton = document.querySelector("#random-color");
let body = document.getElementById("gradient");

function setColorSettings(color) {
    body.style.background = color;
    css.textContent = body.style.background + ";";
}

function setGradient() {
    let color = getColorGradient(color1.value, color2.value);
    setColorSettings(color);
}

function getColorGradient(color1, color2) {
    return "linear-gradient(to right, " + color1 + ", " + color2 + ")";
}

function getRandomColorArray() {
    let colorArray = [];
    for (let i = 0; i < 3; i++) {
        colorArray[i] = Math.floor(Math.random() * 255);
    }
    return colorArray;
}

function toHex(random) {
    let hex = Number(random).toString(16);
    if (hex.length < 2) {
        hex = "0" + hex;
    }
    return hex;
}

function arrayToHex(arr) {
    return "#" + arr.map(x => toHex(x)).join("");
}

function setRandomColors () {
    let colorArray1 = arrayToHex(getRandomColorArray());
    let colorArray2 = arrayToHex(getRandomColorArray());
    color1.value = colorArray1;
    color2.value = colorArray2;
    setColorSettings(getColorGradient(colorArray1, colorArray2));
}
// EVENT LISTENERS
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomButton.addEventListener("click", setRandomColors);

window.onload = function () {
    setRandomColors();
};

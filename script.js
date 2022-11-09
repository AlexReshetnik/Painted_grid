const HEIGHTc = 30;
const WIDTHc = 30;
const WIDTHcube = 20;
var board = document.querySelector("#board");
board.style.width = HEIGHTc * (WIDTHcube + (4)) + "px";
board.style.width = HEIGHTc * (WIDTHcube+(4))+"px";
for (let i = 0; i < HEIGHTc * WIDTHc; i++) {
    const cubes = document.createElement("div");
    cubes.classList.add("cube")
    cubes.style.width = `${WIDTHcube}px`;
    cubes.style.height = `${WIDTHcube}px`;
    cubes.addEventListener('mouseover', () => addColor(cubes));
    cubes.addEventListener('mouseleave', () => removeColor(cubes));
    board.append(cubes);
}
var count = 0;
var colors = ["red", "rgb(0, 255, 0)", "blue", "blueviolet", "cyan", "deeppink", "rgb(255, 0, 157)"];
function addColor(cube) {

    cube.style.transitionDuration = "0s";
    cube.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    if (count == 3) { count = 0; }
}
function removeColor(cube) {
    cube.style.transitionDuration = "0.5s";
    cube.style.backgroundColor = 'rgb(63, 63, 63)';
}

function changeColor() {
    document.getElementById("toBeColored").style.color = randomColor();
}

function randomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random()*16)];
    }
    return color;
}
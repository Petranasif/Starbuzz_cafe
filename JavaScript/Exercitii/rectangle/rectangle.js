var rectangle = document.querySelector("div");

function minimize() {
    var computedStyle = window.getComputedStyle(rectangle);
    current = computedStyle.height;
    console.log(computedStyle.height);
    var n = current.substring(0, current.length -2);
    console.log(n);
    var newer = --n  + "px";
    rectangle.style.height = newer;
    console.log(newer);
    setTimeout(minimize, 50);
}

minimize();
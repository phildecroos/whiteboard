const cvs = document.getElementById("whiteboard");
const ctx = cvs.getContext("2d");

cvs.height = window.innerHeight - 0;
cvs.width = window.innerWidth - 160;

function drawRect(x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
}

var thick = 12;
var medium = 6;
var thin = 2;

var black = "#000000";
var red = "#ff2222";
var orange = "#ff8c00";
var yellow = "#ffd700";
var green = "#118111";
var blue = "#1e90ff";
var purple = "#550099";

function clear() {
    drawRect(0, 0, cvs.width, cvs.height, "white")
}

clear();

const pen = {
    x : 0,
    y : 0,
    size : medium,
    color : black
}

var recentColor = pen.color;
var recentSize = pen.size;

document.getElementById("thick").onclick = function() {changePen(thick, recentColor); set1 = true; set2 = false; set3 = false;};
document.getElementById("medium").onclick = function() {changePen(medium, recentColor); set1 = false; set2 = true; set3 = false;};
document.getElementById("thin").onclick = function() {changePen(thin, recentColor); set1 = false; set2 = false; set3 = true;};

document.getElementById("eraser").onclick = function() {changePen(20, "white")};

document.getElementById("black").onclick = function() {changePen(recentSize, black); set6 = true; set7 = false; set8 = false; set9 = false; set10 = false; set11 = false; set12 = false;};
document.getElementById("red").onclick = function() {changePen(recentSize, red); set6 = false; set7 = true; set8 = false; set9 = false; set10 = false; set11 = false; set12 = false;};
document.getElementById("orange").onclick = function() {changePen(recentSize, orange); set6 = false; set7 = false; set8 = true; set9 = false; set10 = false; set11 = false; set12 = false;};
document.getElementById("yellow").onclick = function() {changePen(recentSize, yellow); set6 = false; set7 = false; set8 = false; set9 = true; set10 = false; set11 = false; set12 = false;};
document.getElementById("green").onclick = function() {changePen(recentSize, green); set6 = false; set7 = false; set8 = false; set9 = false; set10 = true; set11 = false; set12 = false;};
document.getElementById("blue").onclick = function() {changePen(recentSize, blue); set6 = false; set7 = false; set8 = false; set9 = false; set10 = false; set11 = true; set12 = false;};
document.getElementById("purple").onclick = function() {changePen(recentSize, purple); set6 = false; set7 = false; set8 = false; set9 = false; set10 = false; set11 = false; set12 = true;};

document.getElementById("clear").onclick = function() {clear()};

function changePen(size, color) {
    // if changing to an eraser, save the size and color before the change
    if (color == "white") {
        recentColor = pen.color;
        recentSize = pen.size;
        set4 = true;

        set1 = false;
        set2 = false;
        set3 = false;
        set6 = false;
        set7 = false;
        set8 = false;
        set9 = false;
        set10 = false;
        set11 = false;
        set12 = false;
        set13 = false;
        set14 = false;
    }
    // if not changing to an eraser, update the size and color to be the values after the change
    else {
        if (recentColor == color) {
            if (color == black) {
                set6 = true; set7 = false; set8 = false; set9 = false; set10 = false; set11 = false; set12 == false;
            }
            else if (color == red) {
                set6 = false; set7 = true; set8 = false; set9 = false; set10 = false; set11 = false; set12 == false;
            }
            else if (color == orange) {
                set6 = false; set7 = false; set8 = true; set9 = false; set10 = false; set11 = false; set12 == false;
            }
            else if (color == yellow) {
                set6 = false; set7 = false; set8 = false; set9 = true; set10 = false; set11 = false; set12 == false;
            }
            else if (color == green) {
                set6 = false; set7 = false; set8 = false; set9 = false; set10 = true; set11 = false; set12 == false;
            }
            else if (color == blue) {
                set6 = false; set7 = false; set8 = false; set9 = false; set10 = false; set11 = true; set12 == false;
            }
            else if (color == purple) {
                set6 = false; set7 = false; set8 = false; set9 = false; set10 = false; set11 = false; set12 == true;
            }
        }
        if (recentSize == size) {
            if (size == thick) {
                set1 = true; set2 = false; set3 = false;
            }
            else if (size == medium) {
                set1 = false; set2 = true; set3 = false;
            }
            else if (size == thin) {
                set1 = false; set2 = false; set3 = true;
            }
        }

        recentColor = color;
        recentSize = size;
        set4 = false;
    }

    pen.size = size;
    pen.color = color;
}

var drawing = false;

cvs.addEventListener("mousedown", (event) => {
    drawing = true;
    update(event);
});

cvs.addEventListener("mouseup", () => {
    drawing = false;
    ctx.beginPath();
});

function update(event) {
    if (event.clientX < 163 || event.clientX > window.innerWidth - 3 || event.clientY < 3 || event.clientY > window.innerHeight - 3) {
        drawing = false;
        ctx.beginPath();
    }
    if (drawing) {
        ctx.lineWidth = pen.size;
        ctx.lineCap = "round";
        ctx.lineTo(event.clientX - 160, event.clientY);
        ctx.strokeStyle = pen.color;
        ctx.stroke();
    }
}

cvs.addEventListener("mousemove", update);

window.addEventListener("resize", () => {
    cvs.height = window.innerHeight - 0;
    cvs.width = window.innerWidth - 160;
    clear();
});

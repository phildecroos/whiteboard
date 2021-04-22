const cvs1 = document.getElementById("1");
const ctx1 = cvs1.getContext("2d");
const cvs2 = document.getElementById("2");
const ctx2 = cvs2.getContext("2d");
const cvs3 = document.getElementById("3");
const ctx3 = cvs3.getContext("2d");
const cvs4 = document.getElementById("4");
const ctx4 = cvs4.getContext("2d");
const cvs6 = document.getElementById("6");
const ctx6 = cvs6.getContext("2d");
const cvs7 = document.getElementById("7");
const ctx7 = cvs7.getContext("2d");
const cvs8 = document.getElementById("8");
const ctx8 = cvs8.getContext("2d");
const cvs9 = document.getElementById("9");
const ctx9 = cvs9.getContext("2d");
const cvs10 = document.getElementById("10");
const ctx10 = cvs10.getContext("2d");
const cvs11 = document.getElementById("11");
const ctx11 = cvs11.getContext("2d");
const cvs12 = document.getElementById("12");
const ctx12 = cvs12.getContext("2d");

set1 = false;
set2 = true;
set3 = false;
set4 = false;
set6 = true;
set7 = false;
set8 = false;
set9 = false;
set10 = false;
set11 = false;
set12 = false;
set13 = false;
set14 = false;

var purple = "#550099";
var grey = "#707070";

ctx2.fillStyle = purple;
ctx2.fillRect(0, 0, 8, 35);

ctx6.fillStyle = purple;
ctx6.fillRect(0, 0, 8, 35);

function showBars(event) {
    var x = event.clientX;
    var y = event.clientY;

    if ((x <= 160 && (y > 85 && y < 120)) || set1) {
        ctx1.fillStyle = purple;
        ctx1.fillRect(0, 0, 8, 35);
    }
    else {
    ctx1.fillStyle = grey;
        ctx1.fillRect(0, 0, 8, 35);
    }
    if ((x <= 160 && (y > 135 && y < 170)) || set2) {
        ctx2.fillStyle = purple;
        ctx2.fillRect(0, 0, 8, 35);
    }
    else {
        ctx2.fillStyle = grey;
        ctx2.fillRect(0, 0, 8, 35);
    }
    if ((x <= 160 && (y > 185 && y < 220)) || set3) {
        ctx3.fillStyle = purple;
        ctx3.fillRect(0, 0, 8, 35);
    }
    else {
        ctx3.fillStyle = grey;
        ctx3.fillRect(0, 0, 8, 35);
    }
    if ((x <= 160 && (y > 235 && y < 270)) || set4) {
        ctx4.fillStyle = purple;
        ctx4.fillRect(0, 0, 8, 35);
    }
    else {
        ctx4.fillStyle = grey;
        ctx4.fillRect(0, 0, 8, 35);
    }
    if ((x <= 160 && (y > 285 && y < 320)) || set6) {
        ctx6.fillStyle = purple;
        ctx6.fillRect(0, 0, 8, 35);
    }
    else {
        ctx6.fillStyle = grey;
        ctx6.fillRect(0, 0, 8, 35);
    }
    if ((x <= 160 && (y > 335 && y < 370)) || set7) {
        ctx7.fillStyle = purple;
        ctx7.fillRect(0, 0, 8, 35);
    }
    else {
        ctx7.fillStyle = grey;
        ctx7.fillRect(0, 0, 8, 35);
    }
    if ((x <= 160 && (y > 385 && y < 420)) || set8) {
        ctx8.fillStyle = purple;
        ctx8.fillRect(0, 0, 8, 35);
    }
    else {
        ctx8.fillStyle = grey;
        ctx8.fillRect(0, 0, 8, 35);
    }
    if ((x <= 160 && (y > 435 && y < 470)) || set9) {
        ctx9.fillStyle = purple;
        ctx9.fillRect(0, 0, 8, 35);
    }
    else {
        ctx9.fillStyle = grey;
        ctx9.fillRect(0, 0, 8, 35);
    }
    if ((x <= 160 && (y > 485 && y < 520)) || set10) {
        ctx10.fillStyle = purple;
        ctx10.fillRect(0, 0, 8, 35);
    }
    else {
        ctx10.fillStyle = grey;
        ctx10.fillRect(0, 0, 8, 35);
    }
    if ((x <= 160 && (y > 535 && y < 570)) || set11) {
        ctx11.fillStyle = purple;
        ctx11.fillRect(0, 0, 8, 35);
    }
    else {
        ctx11.fillStyle = grey;
        ctx11.fillRect(0, 0, 8, 35);
    }
    if ((x <= 160 && (y > 585 && y < 620)) || set12) {
        ctx12.fillStyle = purple;
        ctx12.fillRect(0, 0, 8, 35);
    }
    else {
        ctx12.fillStyle = grey;
        ctx12.fillRect(0, 0, 8, 35);
    }
}

window.addEventListener("mousemove", showBars);
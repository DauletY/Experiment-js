window.onload = function move() {
    //alert("open page")


}

var x = 80;
var y = 80;
var box = document.getElementById("cicle");
var cont = document.getElementById("content");


function right() {
    var rightid = document.getElementById("rightid");
    if (x == null) {
        rightid.style.display = null;
    } else {
        x += 18;
        box.style.left = x + 'px';
    }
}

function left() {
    var leftid = document.getElementById("liftid");
    if (x == null) {
        leftid.style.display = null;
    } else {
        x -= 18;
        box.style.left = x + 'px';
    }
}

function down() {
    var downid = document.getElementById("downid");
    if (y == null) {
        downid.style.display = null;
    } else {
        y += 18;
        box.style.top = y + 'px';
    }
}

function up() {
    var upid = document.getElementById("upid");
    if (y == null) {
        upid.style.display = null;
    } else {
        y -= 18;
        box.style.top = y + 'px';
    }
}
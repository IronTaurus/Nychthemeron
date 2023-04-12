class Position {
    constructor(x, y) {
        this.x = xPos;
        this.y = yPos;
    }
}

var originalImage = document.getElementById("mapImg");
var img = new Image();
img.src = "Art/Map/Avena.png";
var imgHeight = img.height;
var imgWidth = img.width;

window.onload = function() {
    var c = document.getElementById("mapCanvas");
    c.height = imgHeight;
    c.width = imgWidth;
    var ctx = c.getContext("2d"); 
    ctx.drawImage(img, 0, 0);
  };

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(imgHeight, imgWidth);
ctx.stroke();
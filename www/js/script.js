var canvas = document.getElementById('canvas');

var context = canvas.getContext('2d');
context.lineWidth = 5;
context.lineCap = "round";
var mouseDown = false;

var button = document.getElementById('btn-download');
button.addEventListener('click', function (e) {
    var dataURL = canvas.toDataURL('image/png');
    button.href = dataURL;
});

canvas.addEventListener('mousedown', function()
{
  mouseDown = true;
  canvas.style.cursor="crosshair";
  context.beginPath();
  context.moveTo(xPos, yPos);
  canvas.addEventListener('mousemove', drawTool);
});

canvas.addEventListener('mouseup', function() 
{ 
  mouseDown = false; 
});

canvas.addEventListener('mousemove', drawTool);

canvas.addEventListener('mouseout', function() 
{ 
  mouseDown = false; 
});

function drawTool(e)
{
  xPos = e.clientX - canvas.offsetLeft;
  yPos = e.clientY - canvas.offsetTop;

  if (mouseDown == true)
  {
    context.lineTo(xPos, yPos);
    context.stroke();
  }
}

function changeColour(colour)
{
  context.strokeStyle = colour;
}

function clearCanvas() 
{
  context.clearRect(0, 0, canvas.width, canvas.height);
}

function changeBrushSize(size) 
{
  context.lineWidth = size;
}

function circleTool()
{
	context.beginPath();
	context.arc(xPos, yPos, 40, 0, 2 * Math.PI);
	context.stroke();
}

function rectangleTool(){
  context.beginPath();
  context.rect(188, 50, 200, 100);
  context.stroke();
	  }

// For mobile Touch interfaces
    var mousePos = { x:0, y:0 };
    var lastPos = mousePos;
    
    canvas.addEventListener("touchstart", function (e) {
      mousePos = getTouchPos(canvas, e);
      var touch = e.touches[0];
      var mouseEvent = new MouseEvent("mousedown", {
        clientX: touch.clientX,
        clientY: touch.clientY
      });
      canvas.dispatchEvent(mouseEvent);
    }, false);
    canvas.addEventListener("touchend", function (e) {
      var mouseEvent = new MouseEvent("mouseup", {});
      canvas.dispatchEvent(mouseEvent);
    }, false);
    canvas.addEventListener("touchmove", function (e) {
      var touch = e.touches[0];
      var mouseEvent = new MouseEvent("mousemove", {
        clientX: touch.clientX,
        clientY: touch.clientY
      });
      canvas.dispatchEvent(mouseEvent);
    }, false);
    
// Prevents scrolling when touching the canvas
document.body.addEventListener("touchstart", function (e) {
  if (e.target == canvas) {
    e.preventDefault();
  }
}, false);
document.body.addEventListener("touchend", function (e) {
  if (e.target == canvas) {
    e.preventDefault();
  }
}, false);
document.body.addEventListener("touchmove", function (e) {
  if (e.target == canvas) {
    e.preventDefault();
  }
}, false);

    function getTouchPos(canvasDom, touchEvent) {
      var rect = canvasDom.getBoundingClientRect();
      return {
        x: touchEvent.touches[0].clientX - rect.left,
        y: touchEvent.touches[0].clientY - rect.top
      };
    }

    
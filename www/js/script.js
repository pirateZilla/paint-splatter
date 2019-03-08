var canvas = document.getElementById('canvas');

var context = canvas.getContext('2d');
context.lineWidth = 5;
var mouseDown = false;
//From Here
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

// to here

canvas.addEventListener('mousedown', function()
{
  mouseDown = true;
  //canvas.style.cursor="crosshair";
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






// and here

    function getTouchPos(canvasDom, touchEvent) {
      var rect = canvasDom.getBoundingClientRect();
      return {
        x: touchEvent.touches[0].clientX - rect.left,
        y: touchEvent.touches[0].clientY - rect.top
      };
    }

// to here
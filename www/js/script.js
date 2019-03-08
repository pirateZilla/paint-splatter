var canvas = document.getElementById('canvas');

var context = canvas.getContext('2d');
context.lineWidth = 5;
var mouseDown = false;

canvas.addEventListener('mousemove', drawTool);

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

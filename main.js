//Create a reference for canvas 
canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")


//Give specific height and width to the car image
greenwidth=40;
greenheight=55;
background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
greenX=5;
greenY=255;
function add() {
	background_imgtag=new Image();
    background_imgtag.onload=uploadbackground;
    background_imgtag.src=background_image;

    green_imgtag=new Image();
	green_imgtag.onload=uploadgreencar;
     green_imgtag.src= greencar_image;
}

function uploadbackground() {
	//Define function ‘uploadBackground’
	ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height)
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.

    ctx.drawImage(green_imgtag,greenX,greenY,greenwidth,greenheight)

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Define function to move the car upward
	if(greenY<=300)
   {
      greenY=greenY-10;
      console.log("when up arrow is pressed,x="+greenX+" ,Y="+greenY)
      uploadbackground();
      uploadgreencar();
   }
}

function down()
{
	//Define function to move the car downward
	if(greenY>=0)
	{
	   greenY=greenY+10;
	   console.log("when down arrow is pressed,x="+greenX+" ,Y="+greenY)
	   uploadbackground();
	   uploadgreencar();
	}
}

function left()
{
	//Define function to move the car left side
	if(greenX>=0)
	{
	   greenX=greenX-10;
	   console.log("when left arrow is pressed,x="+greenX+" ,Y="+greenY)
	   uploadbackground();
	   uploadgreencar();
	}
}

function right()
{
	//Define function to move the car right side
	if(greenX<=700)
	{
	   greenX=greenX+10;
	   console.log("when right arrow is pressed,x="+greenX+" ,Y="+greenY)
	   uploadbackground();
	   uploadgreencar();
	}
}

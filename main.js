canvas = document.getElementById("myCanvas");
ctx  = canvas.getContext("2d");
// Create canvas variable

//Set initial positions for ball and hole images.




block_image_width = 5;
block_image_height = 5;

function load_img(){
	var golf = "golf-h.png";
	var ball = "ball.png";
	// write code to Upload golf image on the canvas
	new_image();
}

function new_image()
{
    var ball = "ball.png"
	// write code to Upload ball image on canvas
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	
 else  {
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
		
        if(rover_y>=10)
        {
           rover_y= rover_y-10;
           console.log("When up arrow is pressed, x = " + rover_x + " | y = " +rover_y);
           uploadbackground();
           uploadrover();

        }
        
		// Write a code to move ball upward.
	}

	function down()
	{
		if(rover_y<=500)
        {
           rover_y= rover_y+10;
           console.log("When down arrow is pressed, x = " + rover_x + " | y = " +rover_y);
           uploadbackground();
           uploadrover();
// Write a code to move ball downward.
	}

	function left()
	{
		if(ball_x >5)
		{
			rover_x= rover_x-10;
           console.log("When left arrow is pressed, x = " + rover_x + " | y = " +rover_y);
           uploadbackground();
           uploadrover();
		   // Write a code to move ball left side.

		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			 rover_x= rover_x+10;
           console.log("When right arrow is pressed, x = " + rover_x + " | y = " +rover_y);
           uploadbackground();
           uploadrover();
		   // Write a code to move ball right side
		
		}

	}

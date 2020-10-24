/*
The case of the Python Syndicate
Stage 3


Officer: 7129607
CaseNum: 301-2-17186778-7129607

Right kid let’s work out which of our ‘friends’ is connected to the syndicate.

- An object for Pawel karpinski has been declared and initialised
- Modify the x and y parameters of each image command using the x and y
properties from the Pawel karpinski object so the images remain at their correct
positions on the board.
- To do this you will need to combine add and subtract operators with the
relevant property for each parameter



*/

var photoBoard;
var rocky_kray_image;
var anna_karpinski_image;
var cecil_karpinski_image;
var bones_karpinski_image;
var pawel_karpinski_image;
var robbie_kray_image;

var pawel_karpinski_obj;




function preload()
{
	photoBoard = loadImage('photoBoard.png');
	rocky_kray_image = loadImage("krayBrothers1.png");
	anna_karpinski_image = loadImage("karpinskiWoman.png");
	cecil_karpinski_image = loadImage("karpinskiBros1.png");
	bones_karpinski_image = loadImage("karpinskiDog.png");
	pawel_karpinski_image = loadImage("karpinskiBros2.png");
	robbie_kray_image = loadImage("krayBrothers2.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	pawel_karpinski_obj = {
		x: 408,
		y: 309,
		image: pawel_karpinski_image
	};
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(pawel_karpinski_obj.image, pawel_karpinski_obj.x, pawel_karpinski_obj.y);

	image(rocky_kray_image, pawel_karpinski_obj.x-293, pawel_karpinski_obj.y-269);
	image(anna_karpinski_image, pawel_karpinski_obj.x, pawel_karpinski_obj.y-269);
	image(cecil_karpinski_image, pawel_karpinski_obj.x+293, pawel_karpinski_obj.y-269);
	image(bones_karpinski_image, pawel_karpinski_obj.x-293, pawel_karpinski_obj.y);
	image(robbie_kray_image, pawel_karpinski_obj.x+293, pawel_karpinski_obj.y);

}
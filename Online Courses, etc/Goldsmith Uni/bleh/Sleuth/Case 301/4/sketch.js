/*
The case of the Python Syndicate
Stage 4

Officer: 7129607
CaseNum: 301-3-51635612-7129607

To really crack the Python Syndicate we need to go in deep. I want to understand
all the connections. I have the data but it’s a mess and I need you to sort it out.

Organise each syndicate member into an object. I’ve done one for you as an example.
Be sure to replicate the naming conventions for your own objects.
Use image command together with the objects you created to organise the mugshots.

- Once you have done this you can comment out or delete the old variables.

*/

var photoBoard;
var cecilKarpinskiImg;
var linaLovelaceImg;
var countessHamiltonImg;
var bonesKarpinskiImg;
var robbieKrayImg;
var annaKarpinskiImg;

var robbieKrayObject;


//declare your new objects below
var cecilKarpinskiObject;
var linaLovelaceObject;
var countessHamiltonObject;
var bonesKarpinskiObject;
var annaKarpinskiObject;


var cecilKarpinskiPosX = 115;
var cecilKarpinskiPosY = 40;
var linaLovelacePosX = 408;
var linaLovelacePosY = 40;
var countessHamiltonPosX = 701;
var countessHamiltonPosY = 40;
var bonesKarpinskiPosX = 115;
var bonesKarpinskiPosY = 309;
var annaKarpinskiPosX = 701;
var annaKarpinskiPosY = 309;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	cecilKarpinskiImg = loadImage("karpinskiBros1.png");
	linaLovelaceImg = loadImage("lina.png");
	countessHamiltonImg = loadImage("countessHamilton.png");
	bonesKarpinskiImg = loadImage("karpinskiDog.png");
	robbieKrayImg = loadImage("krayBrothers2.png");
	annaKarpinskiImg = loadImage("karpinskiWoman.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	robbieKrayObject = {
		x: 408,
		y: 309,
		image: robbieKrayImg
	};



	//define your new objects below
	cecilKarpinskiObject = {
		x: cecilKarpinskiPosX,
		y: cecilKarpinskiPosY,
		image: cecilKarpinskiImg
	};

	linaLovelaceObject = {
		x: linaLovelacePosX,
		y: linaLovelacePosY,
		image: linaLovelaceImg
	};

	countessHamiltonObject = {
		x: countessHamiltonPosX,
		y: countessHamiltonPosY,
		image: countessHamiltonImg
	};

	bonesKarpinskiObject = {
		x: bonesKarpinskiPosX,
		y: bonesKarpinskiPosY,
		image: bonesKarpinskiImg
	};

	annaKarpinskiObject  = {
		x: annaKarpinskiPosX,
		y: annaKarpinskiPosY,
		image: annaKarpinskiImg
	};

}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(cecilKarpinskiObject.image, cecilKarpinskiObject.x, cecilKarpinskiObject.y);
	image(linaLovelaceObject.image, linaLovelaceObject.x, linaLovelaceObject.y);
	image(countessHamiltonObject.image, countessHamiltonObject.x, countessHamiltonObject.y);
	image(bonesKarpinskiObject.image, bonesKarpinskiObject.x, bonesKarpinskiObject.y);
	image(robbieKrayObject.image, robbieKrayObject.x, robbieKrayObject.y);
	image(annaKarpinskiObject.image, annaKarpinskiObject.x, annaKarpinskiObject.y);


}
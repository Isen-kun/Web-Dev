/*
The case of the Python Syndicate
Stage 1

Officer: 7129607
CaseNum: 301-0-62514265-7129607

I gotta give it to you kid, you’ve made an excellent start, but now it’s time
to take things up a level. For some time I’ve suspected that there’s something
big going down in Console City.

These cases that we’ve been working are all connected somehow. I need to use
that considerable brain of yours to work it all out. Let’s start by laying out
who we know.

Place each mugshot in its designated position by doing the following:

- Create a new variable for the X and Y coordinates of each mugshot.
    - One has already been done for you.
    - Make sure you use the same style and format for the variable name.
- Find coordinates for the mugshot and initialise your variable with these
values.
- Replace the hard-coded constants in the corresponding image command so that
the mugshot appears in its designated position.

*/

var photoBoard;
var rockyKrayImage;
var bonesKarpinskiImage;
var robbieKrayImage;
var annaKarpinskiImage;
var countessHamiltonImage;
var cecilKarpinskiImage;



//declare your new variables below
var robbieKrayCoordinateX = 701;
var robbieKrayCoordinateY = 40;

var rockyKrayCoordinateX = 115;
var rockyKrayCoordinateY = 40;

var bonesKarpinskiCoordinateX = 408;
var bonesKarpinskiCoordinateY = 40;

var annaKarpinskiCoordinateX = 115;
var annaKarpinskiCoordinateY = 309;

var countessHamiltonCoordinateX = 408;
var countessHamiltonCoordinateY = 309;

var cecilKarpinskiCoordinateX = 701;
var cecilKarpinskiCoordinateY = 309;

function preload()
{
	photoBoard = loadImage('photoBoard.png');
	rockyKrayImage = loadImage("krayBrothers1.png");
	bonesKarpinskiImage = loadImage("karpinskiDog.png");
	robbieKrayImage = loadImage("krayBrothers2.png");
	annaKarpinskiImage = loadImage("karpinskiWoman.png");
	countessHamiltonImage = loadImage("countessHamilton.png");
	cecilKarpinskiImage = loadImage("karpinskiBros1.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
}

function draw()
{
	image(photoBoard, 0, 0);



	//And update these image commands with your x and y coordinates.
	image(robbieKrayImage, robbieKrayCoordinateX, robbieKrayCoordinateY);

	image(rockyKrayImage, rockyKrayCoordinateX, rockyKrayCoordinateY);
	image(bonesKarpinskiImage,bonesKarpinskiCoordinateX ,bonesKarpinskiCoordinateY );
	image(annaKarpinskiImage,annaKarpinskiCoordinateX ,annaKarpinskiCoordinateY );
	image(countessHamiltonImage,countessHamiltonCoordinateX ,countessHamiltonCoordinateY );
	image(cecilKarpinskiImage, cecilKarpinskiCoordinateX, cecilKarpinskiCoordinateY);

}
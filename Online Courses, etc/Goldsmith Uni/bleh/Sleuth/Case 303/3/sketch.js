/*

Officer: 7129607
CaseNum: 303-2-52546163-7129607

Case 303 - The Case of the Crooked Attorney
Stage 3 - The Gates Bank

I’ve made an appointment for you at the Gates Bank to retrieve your safe deposit box from the vault.
Actually you will break into Torvalds’ one.

Crack the safe by doing the following:

	When the mouse button is released:
	- Make SecretStoreCode_0 equal to the value of mouseY
	- Use the 'min' function to prevent SecretStoreCode_0 from going above 11

	Whilst the mouse is moving:
	- Increment SecretStoreCode_1 by 1
	- Use the 'max' function to prevent SecretStoreCode_1 from falling below 2

	When the mouse button is pressed:
	- Make SecretStoreCode_2 equal to the value of mouseY
	- Use the 'constrain' function to prevent SecretStoreCode_2 from falling below 2 and going above 14

	When the mouse button is pressed:
	- Decrement SecretStoreCode_3 by 3
	- Use the 'max' function to prevent SecretStoreCode_3 from falling below 2

	Whilst the mouse is moving:
	- Make SecretStoreCode_4 equal to the value of mouseX
	- Use the 'constrain' function to prevent SecretStoreCode_4 from falling below 13 and going above 72



This time you'll need to create the relevant event handlers yourself.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

	- The assignment operator aka. the equals sign !
	- mouseX, mouseY
	- Incrementing +=
	- Decrementing -=
	- min, max
	- constrain

*/

//declare the variables

var SecretStoreCode_0;
var SecretStoreCode_1;
var SecretStoreCode_2;
var SecretStoreCode_3;
var SecretStoreCode_4;


function preload()
{
	//IMAGES WILL BE LOADED HERE

}

function setup()
{
	createCanvas(512,512);

	//initialise the variables
	SecretStoreCode_0 = 0;
	SecretStoreCode_1 = 0;
	SecretStoreCode_2 = 0;
	SecretStoreCode_3 = 0;
	SecretStoreCode_4 = 0;

}

///////////////////EVENT HANDLERS///////////////////

//Create event handlers here to open the safe ...
function mouseReleased()
{
	// When the mouse button is released:
	// - Make SecretStoreCode_0 equal to the value of mouseY
	// - Use the 'min' function to prevent SecretStoreCode_0 from going above 11

	SecretStoreCode_0 = mouseY;
	SecretStoreCode_0 = Math.min(11);
}

///////////////DO NOT CHANGE CODE BELOW THIS POINT///////////////////

function draw()
{

	//Draw the safe door
	background(70);
	noStroke();
	fill(29,110,6);
	rect(26,26,width-52,width-52);

	//Draw the combination dials
	push();
	translate(120,170);
	drawDial(140,SecretStoreCode_0, 16);
	pop();

	push();
	translate(120,380);
	drawDial(140,SecretStoreCode_1, 15);
	pop();

	push();
	translate(280,170);
	drawDial(140,SecretStoreCode_2, 17);
	pop();

	push();
	translate(280,380);
	drawDial(140,SecretStoreCode_3, 13);
	pop();

	//Draw the lever
	push();
	translate(width - 125,256);
	drawLever(SecretStoreCode_4);
	pop();


}

function drawDial(diameter,num,maxNum)
{
	//the combination lock

	var r = diameter * 0.5;
	var p = r * 0.6;

	stroke(0);
	fill(255,255,200);
	ellipse(0,0,diameter,diameter);
	fill(100);
	noStroke();
	ellipse(0,0,diameter*0.66,diameter*0.66);
	fill(150,0,0);
	triangle(
		-p * 0.4,-r-p,
		p * 0.4,-r-p,
		0,-r-p/5
	);

	noStroke();

	push();
	var inc = 360/maxNum;

	rotate(radians(-num * inc));
	for(var i = 0; i < maxNum; i++)
	{
		push();
		rotate(radians(i * inc));
		stroke(0);
		line(0,-r*0.66,0,-(r-10));
		noStroke();
		fill(0);
		text(i,0,-(r-10));
		pop();
	}

	pop();
}

function drawLever(rot)
{
	push();
	rotate(radians(-rot))
	stroke(0);
	fill(100);
	rect(-10,0,20,100);
	ellipse(0,0,50,50);
	ellipse(0,100,35,35);
	pop();
}

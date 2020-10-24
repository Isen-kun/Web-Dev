/*

Officer: 7129607
CaseNum: 202-3-19949485-7129607

Case 202 - The case of Bob and Daisy - stage 4

Here’s the final letter from Daisy (aka. Woz). Decode it to uncover the
final details about Woz and Job’s dastardly plan.

Discover the hidden code by commenting out all text commands except
those which produce pink filled text with green outline in Ballpointprint font.
Only comment out text commands - leave fill & stroke, push and pop commands uncommented.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	Ballpointprint = loadFont('Ballpointprint.ttf');
	Melissa = loadFont('Melissa.otf');
	Diggity = loadFont('Diggity.ttf');
	RonsFont = loadFont('RonsFont.ttf');
}

function setup()
{
	createCanvas(510,482);
	textSize(28);
}

function draw()
{
	background(255);

	fill(255,255,0);
	stroke(0,0,0);
	textFont(Diggity);
	// text("you", 15,210);
	stroke(0,255,0);
	textFont(RonsFont);
	// text("you", 107,330);
	stroke(255,0,255);
	textFont(Diggity);
	// text("can", 146,115);
	textFont(RonsFont);
	// text("how", 410,84);
	push();
	textFont(Diggity);
	// text("Are", 10,84);
	pop();
	textFont(Ballpointprint);
	// text("My", 7,28);
	// text("relationship", 209,274);
	fill(255,165,0);
	textFont(Diggity);
	// text("our", 169,274);
	fill(255,255,0);
	stroke(0,0,255);
	textFont(RonsFont);
	// text("?", 205,210);
	fill(0,255,255);
	// text("much", 11,115);
	// text("I", 121,115);
	// text("we", 81,241);
	push();
	textFont(Melissa);
	// text("reak", 369,241);
	pop();
	textFont(Diggity);
	// text("can", 319,210);
	// text("a", 338,241);
	fill(255,192,203);
	stroke(0,255,0);
	textFont(Ballpointprint);
	text("go", 193,241);
	text("you", 55,84);
	text("I", 417,145);
	stroke(255,0,255);
	textFont(Diggity);
	// text("take", 188,115);
	stroke(0,255,0);
	// text("Are", 428,177);
	stroke(255,0,0);
	// text("short", 55,210);
	fill(255,165,0);
	stroke(255,0,255);
	textFont(Melissa);
	// text("?", 242,115);
	fill(0,255,255);
	stroke(0,255,0);
	textFont(Ballpointprint);
	// text("of", 114,210);
	push();
	stroke(255,0,255);
	textFont(Melissa);
	// text("I'm", 266,84);
	pop();
	textFont(Melissa);
	// text("so,", 273,210);
	push();
	fill(255,165,0);
	stroke(0,0,0);
	// text("sort", 452,241);
	pop();
	stroke(0,0,0);
	textFont(RonsFont);
	// text("Daisy", 10,386);
	stroke(255,0,255);
	// text("no", 14,177);
	fill(255,165,0);
	stroke(0,0,255);
	textFont(Ballpointprint);
	// text("ed", 255,145);
	fill(255,192,203);
	textFont(RonsFont);
	// text("away", 229,241);
	// text("delays.", 349,177);
	// text("sure", 344,84);
	push();
	textFont(Ballpointprint);
	// text("secrets,", 296,115);
	pop();
	textFont(Melissa);
	// text("all", 60,274);
	push();
	stroke(255,0,255);
	textFont(Ballpointprint);
	// text("If", 225,210);
	// text("?", 235,84);
	pop();
	textFont(Diggity);
	// text("these", 199,177);
	stroke(0,0,0);
	textFont(RonsFont);
	// text("me", 193,84);
	// text("ore", 150,177);
	// text("rs,", 146,330);
	fill(0,255,255);
	stroke(255,0,0);
	textFont(Ballpointprint);
	// text("ing", 148,84);
	// text("?", 392,274);
	fill(255,165,0);
	stroke(0,0,0);
	// text("Is", 126,274);
	stroke(0,255,0);
	// text("continual", 260,177);
	push();
	fill(255,255,0);
	stroke(255,0,0);
	textFont(Melissa);
	// text("Perhaps", 10,241);
	pop();
	textFont(RonsFont);
	// text("Forever", 15,330);
	fill(255,192,203);
	// text("silence.", 13,145);
	stroke(255,0,255);
	textFont(Diggity);
	// text("this", 16,274);
	fill(255,255,0);
	stroke(0,255,0);
	textFont(Ballpointprint);
	// text("longer", 49,177);
	fill(255,192,203);
	stroke(255,0,255);
	textFont(Melissa);
	// text("are", 145,145);
	// text("b", 361,241);
	textFont(RonsFont);
	// text("not", 297,84);
	// text("cash.", 412,210);
	textFont(Melissa);
	// text("The", 258,115);
	// text("money", 151,210);
	stroke(0,255,0);
	textFont(Ballpointprint);
	text("for", 294,241);
	fill(255,255,0);
	stroke(0,0,0);
	textFont(Melissa);
	// text("so", 176,145);
	stroke(0,0,255);
	// text("darling", 51,28);
	push();
	stroke(255,0,0);
	textFont(Ballpointprint);
	// text("You", 97,145);
	// text("sometimes.", 299,145);
	// text("out.", 82,274);
	pop();
	stroke(255,0,0);
	textFont(Diggity);
	// text("send", 361,210);
	fill(255,192,203);
	textFont(Ballpointprint);
	// text("should", 122,241);
	fill(255,255,0);
	stroke(0,0,0);
	textFont(RonsFont);
	// text("Bob,", 106,28);
	fill(0,255,255);
	textFont(Diggity);
	// text("and", 409,241);
	push();
	fill(255,192,203);
	stroke(0,255,0);
	textFont(Melissa);
	// text("more", 77,115);
	pop();
	textFont(Melissa);
	// text("I", 304,210);
	fill(255,192,203);
	stroke(0,255,0);
	// text("x", 74,386);
	push();
	textFont(RonsFont);
	//text("ign", 121,177);
	pop();
	textFont(Ballpointprint);
	text("guard", 202,145);
	text("safe", 329,274);
	text("can", 451,145);
	text("avoid", 99,84);
	text("the", 386,115);


}

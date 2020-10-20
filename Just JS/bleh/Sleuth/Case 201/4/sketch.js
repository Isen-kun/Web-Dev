/*
201 - The case of Judge Hopper
Stage 4 - The warehouse

Officer: 7129607
CaseNum: 201-3-71618679-7129607

As you enter the ALGOL warehouse you are struck by the most horrendous stench - it’s not the fish. Lying amongst piles of fish carcasses you find the body of Judge Hopper. Gathering yourself together, you tie a handkerchief around your nose and mouth and quickly set about recording the evidence.

Draw around the Judge’s body ...


*/

var img;

function preload()
{
    img = loadImage('scene.png');
}

function setup()
{
    createCanvas(img.width,img.height);
}

function draw()
{

    image(img,0,0);
    stroke(255, 0, 0);
    strokeWeight(3);
    noFill();

    // write the code to draw around the Judge's body below
    beginShape();
    vertex(340, 270);
    vertex(400, 250);
    vertex(700, 180);
    vertex(737, 260);
    vertex(600, 400);
    vertex(540, 570);
    vertex(370, 420);
    endShape(CLOSE);

}

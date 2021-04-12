
var vidCapt, ctrack, drawcan; //declare variables globally so they can be used in both setup + draw

function setup() {
    var cnv = createCanvas(windowWidth, windowHeight*3);
    cnv.parent("faceCan");
    
    //p5 method for creating video stream
    vidCapt = createCapture(VIDEO);
//    vidCapt.size(600, 300);
    vidCapt.size(vidCapt.width*2, vidCapt.height*3); //bro what are these measurements, if i change them it zooms in the camera??? 
    vidCapt.hide();
    
    //creat, initialize, start tracker
    ctrack = new clm.tracker();
    ctrack.init();
    ctrack.start(vidCapt.elt); //video tracker element it uses
    drawcan = document.getElementById('defaultCanvas0'); //default name from p5 when we use createCanvas method
    
}

function draw() {
    print(Code by Chelsea Knox);
    //move image by it width left
    translate(vidCapt.width, 0);
    //scale it by -1 on x-axis to flip it
    scale(-1, 1);
    
    //p5
//    image(vidCapt, 0, 0);
    
    
    //clm
    var positions = ctrack.getCurrentPosition();
    
    if (positions){
        
        var r = map(positions[62][1], 170, 260, 50, 230);
        var g = map(positions[33][1], 170, 250, 80, 190);
        var b = map(positions[62][1], 200, 300, 50, 230);
        background(r, g, b); 
        
        strokeWeight(2);
        noFill();
        stroke(235);
        ellipse(80, 310, 35, 35);
        ellipse(297, 398, 35, 35);
        ellipse(180, 195, 35, 35);
        ellipse(378, 225, 35, 35);
        ellipse(148, 105, 35, 35);
        ellipse(500, 225, 35, 35);
  
        stroke(55);
        strokeWeight(4);
        noFill(0);
        ellipse(positions[62][0], positions[62][1], 30,  30);

    }
    
}
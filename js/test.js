console.log("my video page is loaded");
var myVideo;

function setup() {
    var myCanvas = createCanvas(window.innerWidth, window.innerHeight);
    myCanvas.parent('wheatfield');
    
    myVideo = createVideo("wheatfield.mp4");
    
    myVideo.loop();
    myVideo.hide();
    
    rectMode(CENTER);
}

function draw() {
    image(myVideo, 0, 0, window.innerWidth, window.innerHeight);
    
    fill("rgba(0, 0, 0, 0.2)");

    if(dist(mouseX, mouseY, window.innerWidth/4, window.innerHeight/2) < 100) { 
        rect(window.innerWidth/4, window.innerHeight/2, 200, 400);
        filter("GRAY");
    } else if(dist(mouseX, mouseY, window.innerWidth/2, window.innerHeight/2) < 100) { 
        rect(window.innerWidth/2, window.innerHeight/2, 200, 400);
        myVideo.pause();
    } else if(dist(mouseX, mouseY, window.innerWidth/4*3, window.innerHeight/2) < 100) { 
        rect(window.innerWidth/4*3, window.innerHeight/2, 200, 400);
        filter(POSTERIZE, 8);
    } else {
        myVideo.loop();
    }
    
}
function windoqResized() {
    resizeCanvas(window.innerWidth, window.innerHeight);
}
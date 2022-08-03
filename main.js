function setup(){
    canvas = createCanvas(380,280);
    canvas.position(425,250);
    video = createCapture(VIDEO);
    video.hide();
    video.size(380,280);
    
    }
function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById('status').innerHTML = 'status : detecting objects';
}
status1 = "";
function modelLoaded(){
    console.log("model loaded");
    status1 = true;
}
function draw(){
    image(video, 0, 0, 380, 280);
}
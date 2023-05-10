status="";
input_results="";
function setup() {
    canvas=createCanvas(280,280);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}
function draw() {
    image(video,0,0,280,280);
}
function start() {
    objectdetecter=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects";
    input_results=document.getElementById("in").value;
    console.log(input_results);
}
function modelLoaded() {
    console.log("Model has Loaded!!");
    status=true;

}
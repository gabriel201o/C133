img="";
status="";
objects=[];
function preload(){
    img=loadImage("dog_cat.jpg");
}
function setup(){
    canvas=createCanvas(600,400);
    canvas.center();
    object_detector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status - Detecting Objects";
}
function modelLoaded(){
    console.log("modelLoaded");
    status=true;
    object_detector.detect(img,gotResults);

}
function gotResults(error,results){
if(error){
    console.log(error);
}

    console.log(results);
    objects=results;


}

function draw(){
    image(img,0,0,600,400);

    if(status!=""){
        for(i=0;i<objects.length;i++){
document.getElementById("status").innerHTML="Status - Dectected Objects";
fill("red");
    text(objects[i].label,objects[i].x+15,objects[i].y+15);
    noFill();
    stroke("red");
    rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);

        }

    }

}
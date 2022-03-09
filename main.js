video = "";
status = "";
objects = [];

function setup(){
    canvas = createCanvas(480 , 380 );
    canvas.position( 500 , 375);
    video = createCapture(VIDEO);
    video.size(480, 380);
    video.hide();


}


function starta(){
objectDetector = ml5.objectDetector("cocossd" , modelLoaded)
document.getElementById("status").innerHTML = "Status: wait ok? because objects are BEING detected";

}

function modelLoaded(){
console.log("done kk");
status = true;
video.loop(); //ok ?
video.speed(1); //ha speed is 1?// 
video.volume(0);//ha 0 vallueneoij

}



function draw(){
    image(video, 0, 0, 480, 380)

    if (status != ""){
        

        objectDetector.detect(video, gotResult)
    
        for(i = 0; i < objects.length; i++){
       document.getElementById("status").innerHTML = "Status: ok now wait objects detected"
       document.getElementById("number_of_objects").innerHTML = "THe nUMber Of Objects detected is: " + objects.length + "fine?";

fill("#FF3998");
percent =  floor(objects[i].confidence * 100);
text(objects[i].label + "" + percent + "%", objects[i].x + 15, objects[i].y + 15);
noFill();
stroke("#FF3998")
rect(objects[i].x , objects[i].y, objects[i].width, objects[i].height)


if(objects[i].label == object_name ){
    video.stop();
    objectDetector.detect(gotResult);
    document.getElementById("status").innerHTML = object_name + "FOUND";

}

else{
    document.getElementById("status").innerHTML = object_name + "NOT FOUND hahaha";   
}
        }


    }}

    function gotResult(error, results){
if(error){
    console.error(error);
    
}

else{
    console.log(results);
objects = results; 
}
    }

    
var ob=[];
stat="";

function setup(){
    canvas=createCanvas(380,380);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(380,380);
    video.hide();
}
function b2(){
    x=ml5.objectDetector('cocossd', ml);
    document.getElementById("status").innerHTML="status: detecting object";
}
function ml(){
    console.log("model loaded");
    stat=true;
    x.detect(video,gr);
}
function gr(error,result){
if(error){
console.log(error);
}
else{
    console.log(result);
    ob=result;
}
}
function draw(){
image(video,0,0,380,380);
if(stat!=""){
    r=random(255);
    g=random(255);
    b=random(255);
    for (let i = 0; i < ob.length; i++) {
        document.getElementById("status").innerHTML="status: object detected";     
        document.getElementById("h32").innerHTML="number of objects present are: "+ob.length;
fill(r,g,b);
noFill();
stroke(r,g,b);
percent=floor(ob[i].confidence*100);
text(ob[i].label+" "+percent+"%",ob[i].x+15,ob[i].y+15);
rect(ob[i].x,ob[i].y,ob[i].width,ob[i].height);
}
}
}
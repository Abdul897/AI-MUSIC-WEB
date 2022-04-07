music=""
music2=""
function preload()
{
    music= loadSound("music.mp3");
    music2=loadSound("music2.mp3");
}
function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
   video.hide();
}
function draw() {
    image(video, 0, 0, 600, 500);

    fill("#0000ff")
    stroke("#0000ff")

    if(scoreLeftWrist >0.2)
{
    circle(leftWristX,leftWristY,20);
    InNumberleftWristY= Number(leftWristY);
    remove_decimals = floor(InNumberleftWristY);
    volume = remove_decimals/500;
    document.getElementById("volume").innerHTML = "Volume = "+ volume;
    song.setVolume(volume);
}
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist = "+ scoreLeftWrist);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY= results[0].pose.rightWrist.y
        console.log("rightWristX = "+ rightWristX +"rightWristY = "+ rightWristY);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = "+ leftWristX +" leftWristY ="+ leftWristY);
    }
}
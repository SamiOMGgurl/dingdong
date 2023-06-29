noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;
function setup()
{
canvas = createCanvas (600, 400);
canvas.position (650, 150);
video = createCapture (VIDEO);
video.size (600, 400);
video.position (3, 150);

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('Ready!');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX =" + noseX + "noseY =" + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
    }
}

function draw()
{
textSize(difference);
fill('#E4FDE1');
stroke('#8ACB88');
text('Font',noseX,noseY);
}

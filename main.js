noseX = 0;
noseY = 0;

function preload()
{
    clown_nose = loadImage("imgbin-clown-drawing-laughter-clown-W5-TMw-Wms-TPmd-MYe-Wt-Eqe-FDgi-E-t-removebg-preview.png")
}
function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    video.size(300, 300)
    
    posenet = ml5.poseNet(video, modelLoaded);
   
    posenet.on('pose', gotPosed);
}
function modelLoaded()
{
    console.log("Posenet is initialized!")
}

function gotPosed(results)
{
    if(results.length > 0)
    {
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log(results)
        console.log("nose x = "+results[0].pose.nose.x);
        console.log("nose y = "+results[0].pose.nose.y);
    }
}

function draw()
{
    image(video, 0, 0, 300, 300);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    //circle(noseX, noseY, 20);
    image(clown_nose, noseX-22.5, noseY-22.5, 50, 50);
}
function take_snapshot()
{
    save("Clown-Nose-On-Person-Funny.png")
}
function dance()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/fyX1sgRWY/model.json",modelReady);
}
function modelReady()
{
    classifier.classify(gotResults);
}
function gotResults(error,results)
{
if(error)
{
    console.error(error);
}
else
{
    console.log(results);

    random_r = Math.floor(Math.random()*255)+ 1 ;
    random_g = Math.floor(Math.random()*255)+ 1 ;
    random_b = Math.floor(Math.random()*255)+ 1 ;

    document.getElementById("result-label").innerHTML = " i can hear - " + results[0].label;
    document.getElementById("result-accuracy").innerHTML = " accuracy - " + (results[0].confidence * 100).toFixed(2) + " % ";
    document.getElementById("result-label").style.color = "rgb("+ random_r + ","+ random_g +","+ random_b +")";
    document.getElementById("result-accuracy").style.color = "rgb("+ random_r + ","+ random_g +","+ random_b +")";

    img = document.getElementById("img");

    if(results[0].label == "Barking")
    {
     img.src = "dog.gif";
    }

    else if(results[0].label == "Meowing")
    {
     img.src = "cat.gif";
    }

    else if(results[0].label == "Roaring")
    {
     img.src = "lion-roar.gif";
    }

    else 
    {
     img.src = "hear.gif";

    }
}
}
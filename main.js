Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 100
});
webcam = document.getElementById("webcam");
Webcam.attach(webcam);

function capture_image() {
    Webcam.snap(function (data_uri) {
        document.getElementById("photo").innerHTML = "<img id='result' src='" + data_uri + "'>"
    });
}
function identify_image() {
img = document.getElementById("result");
classifier.classify(img, gotResult);
}

console.log("ml5 version", ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Gn5TmayIJ/model.json",modelloaded);

function modelloaded(){
console.log("Model is loaded");
}

function gotResult(mistake, success){
    if(mistake){
        console.error(mistake);
    }
    else{
        console.log(success);
        document.getElementById("object_name").innerHTML = success[0].label;
        document.getElementById("object_accuracy").innerHTML = success[0].confidence.toFixed(3) * 100 + "%";
    }
}
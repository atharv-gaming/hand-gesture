prediction1 = "";
prediction2="";
Webcam.set({
 width:350,
 height:300,
 image_format:'png',
 png_quality:90   
});
camera = document.getElementById("camera");
Webcam.attach(camera);
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img src="'+data_uri+'" id="capture_image"/>';
    }); 
}
console.log("ml5 version",ml5.version)
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/96w68niqj/model.json',modelLoaded);
function modelLoaded(){
    console.log("model is loaded")
}
function speak(){
    var synth =window.speechSynthesis;
    speak_data1 = "the first prediction is "+prediction1;
    speak_data2 = "the second prediction is"+prediction2;
    var utterthis = new SpeechSynthesisUtterance(speak_data1+speak_data2);
    synth.speak(utterthis);
}
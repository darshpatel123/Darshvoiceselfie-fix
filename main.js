var SpeechRecognition=window.webkitSpeechRecognition;
var recognition= new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult=function run(event){
    console.log(event);
    var Content=event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("textbox").innerHTML=Content;
    if(Content=="take my selfie"){speak(); console.log("taking selfie");}
    
}
function speak(){
    var synth= window.speechSynthesis;
    speak_data="taking your selfie in 5 seconds";
    var utterthis= new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
    Webcam.attach(camera);
    setTimeout(function(){
        
        take_snapshot();
        save();

    },5000);
}

Webcam.set({
    width:320,
   height:240,
   image_format:'jpeg',
   jpeg_quality:98
});
camera=document.getElementById("webcam");
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("output").innerHTML='<img id="taken_selfie" src="'+data_uri+'">';
    });
}
function save(){
    link= document.getElementById("link");
    image= document.getElementById("taken_selfie").src;
    link.href = image;
    link.click();
}
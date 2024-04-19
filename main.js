var SpeechRecognition = window.webkitSpeechRecognition; 
var recognition = new SpeechRecognition();


function start(){
    document.getElementById("textbox").innerHTML=""
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event)
    var content=event.results[0][0].transcript
    console.log (content)
     if(content=="take my selfie")
 {
    console.log("taking selfie ---");
    speak();
 }  
    document.getElementById("textbox").innerHTML=content
    speak()
}
function speak(){
    var synth=window.speechSynthesis
    speakdata="Taking selfie in 5 seconds"
    var utterthis=new SpeechSynthesisUtterance(speakdata)
    console.log(speakdata)
    synth.speak(utterthis)
    Webcam.attach(camera)
    setTimeout(function( )
    {
        take_snapshot();
        save();
    },5000)
}
Webcam.set({
    width:320,
    height:240,
    image_format:'jpeg',
    jpeg_quality:90
})
camera=document.getElementById("camera")
function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="selfie_image" src="'+data_uri+'">'
    });
     }
     function save()
     {
        link=document.getElementById("link");
        image=document.getElementById("selfie_image").src ;
        link.href=image;
        link.click();
     }
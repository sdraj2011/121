var x=0;
draw_circle="";
draw_rect="";
var y=0;
var speechrecognition=window.webkitSpeechRecognition;
var recognition=new speechrecognition();
function start() {
    document.getElementById("status").innerHTML="system islisnting"
}
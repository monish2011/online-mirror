var SpeechRecognition = window.webkitSpeechRecognition;


camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});
Webcam.attach("camera");



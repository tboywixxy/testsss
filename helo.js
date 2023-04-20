// Javascript code for speech to text 
function record(){
    var recognise = new webkitSpeechRecognition();
    recognise.lang = "en-GB";
    
    recognise.onresult = function(event) {
        console.log(event);
        document.getElementById('speechRecognise').value = event.results[0][0].transcript;
    }
    recognise.start();
}

// Javascript code for text to speech 

function play() {
    let speakData = new SpeechSynthesisUtterance();
    speakData.volume = 1;
    speakData.rate = .7;
    speakData.pitch = 1;
    speakData.text = document.getElementById('text').value;
    speakData.lang = 'en';
    speakData.voice = speechSynthesis.getVoices()[0];;

    speechSynthesis.speak(speakData);
}

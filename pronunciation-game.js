const speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new speechRecognition();

recognition.lang = 'tr-TR';
let output = document.getElementById('output');
let startButton = document.getElementById('startButton');

startButton.addEventListener('click', () => {
    recognition.start();
});

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    output.textContent = transcript;
};

recognition.onerror = (event) => {
    output.textContent = 'Bir hata oluştu: ' + event.error;
};

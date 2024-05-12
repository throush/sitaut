// Ensure 'textToSpeech' is a non-empty string before creating the utterance
if (typeof textToSpeech === 'string' && textToSpeech.trim().length > 0) {
    var utterance = new SpeechSynthesisUtterance(textToSpeech);
    // Set properties for the utterance (optional)
    utterance.rate = 1; // Speed at which the text is spoken
    utterance.pitch = 1; // Pitch at which the text is spoken
    utterance.volume = 1; // Volume of the speech

    // Use the speech synthesis API to speak the utterance
    window.speechSynthesis.speak(utterance);
} else {
    console.error('Invalid input for text-to-speech.');
}

function playKick() {
    // Create an audio element
    var audio = new Audio('Kick .mp3');

    // Play the audio
    audio.play();
  }
  function playSnare1() {
    // Create an audio element
    var audio = new Audio('Snare 1.mp3');

    // Play the audio
    audio.play();
  }function playSnare2() {
    // Create an audio element
    var audio = new Audio('Snare 2.mp3');

    // Play the audio
    audio.play();
  }function playMidTom() {
    // Create an audio element
    var audio = new Audio('Mid Tom.mp3');

    // Play the audio
    audio.play();
  }function playHighTom() {
    // Create an audio element
    var audio = new Audio('High Tom.mp3');

    // Play the audio
    audio.play();
  }function playRideBell() {
    // Create an audio element
    var audio = new Audio('Ride Bell.mp3');

    // Play the audio
    audio.play();
  }function playHiHat() {
    // Create an audio element
    var audio = new Audio('Hi hat .mp3');

    // Play the audio
    audio.play();
  }function playCrash() {
    // Create an audio element
    var audio = new Audio('Crash.mp3');

    // Play the audio
    audio.play();
  }

  document.addEventListener('keydown', function(event) {
// Check if the pressed key corresponds to the mapped button
if (event.key.toLowerCase() === 'k') {
  // Trigger the same action as clicking the button
  playKick();
}
});

document.addEventListener('keydown', function(event) {
// Check if the pressed key corresponds to the mapped button
if (event.key.toLowerCase() === 'c') {
  // Trigger the same action as clicking the button
  playCrash();
}
});

document.addEventListener('keydown', function(event) {
// Check if the pressed key corresponds to the mapped button
if (event.key.toLowerCase() === 'h') {
  // Trigger the same action as clicking the button
  playHiHat();
}
});

document.addEventListener('keydown', function(event) {
// Check if the pressed key corresponds to the mapped button
if (event.key.toLowerCase() === 'a') {
  // Trigger the same action as clicking the button
  playSnare2();
}
});

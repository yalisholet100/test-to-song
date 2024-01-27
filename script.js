document.getElementById('generateSong').addEventListener('click', function() {
    const lyrics = document.getElementById('lyricsInput').value;
    const selectedLanguage = document.getElementById('languageSelect').value;

    fetch('/generate-song', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            lyrics: lyrics,
            language: selectedLanguage
        })
    })
    .then(response => response.blob())
    .then(audioBlob => {
        const audioUrl = URL.createObjectURL(audioBlob);
        const player = document.getElementById('songPlayer');
        player.src = audioUrl;
        player.hidden = false;
        player.play();
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was a problem generating the song.');
    });
});

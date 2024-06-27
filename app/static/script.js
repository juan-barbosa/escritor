document.getElementById('dia').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevenir el comportamiento por defecto de Enter (nueva línea)
        definir_dia();
    }
});

function definir_dia() {
    const textinput = document.getElementById('dia').value;
    const hoy = document.getElementById('hoy');

    if (textinput.trim() !== '') {
        hoy.innerHTML = `${textinput}`;
        hoy.style.display = 'inline-block'
        dia.style.display = 'none';
    } else {
        alert('Por favor, escribe algo.')
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const soundArea = document.getElementById('espacio-trabajo');
    const sounds = [
        document.getElementById('sound1'),
        document.getElementById('sound2'),
        document.getElementById('sound3'),
        document.getElementById('sound4'),
        document.getElementById('sound5'),
        document.getElementById('sound6'),
        document.getElementById('sound7'),
        document.getElementById('sound8'),
        document.getElementById('sound9'),
        document.getElementById('sound10')
    ];

    soundArea.addEventListener('keydown', function(event) {
        const randomIndex = Math.floor(Math.random() * sounds.length);
        sounds[randomIndex].currentTime = 0;
        sounds[randomIndex].play();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const enterSound = document.getElementById('sound11');

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            enterSound.currentTime = 0;
            enterSound.play();
        }
    });
});

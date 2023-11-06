const achieve = document.getElementById('circular-container2');

achieve.classList.add('circular-opacity-transition'); // Add the class for opacity transition
setTimeout(function() {
    achieve.style.opacity = '1';
}, 500);

setTimeout(function() {
    achieve.style.opacity = '0';
}, 2000);

document.getElementById('play-button').addEventListener('click', function () {
    window.location.href = 'game.html';
});

document.getElementById('controls-button').addEventListener('click', function () {
    window.location.href = 'controls.html';
});

document.getElementById('settings-button').addEventListener('click', function () {
    window.location.href = 'settings.html';
});

document.getElementById('about-button').addEventListener('click', function () {
    window.location.href = 'about.html';
});

document.getElementById('level-button').addEventListener('click', function () {
    window.location.href = 'level.html';
});

const backgroundMusic = new Audio('music/menusong.mp3');
backgroundMusic.loop = true;
backgroundMusic.volume = 0.1;


document.getElementById('music').addEventListener('change', function () {
    if (this.checked) {
        backgroundMusic.play();
    } else {
        backgroundMusic.pause(); 
    }
});



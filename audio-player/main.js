const buttonPlay = document.querySelector('.control-panel__button-play');
const buttonPause = document.querySelector('.control-panel__button-pause');
const buttonLeft = document.querySelector('.control-panel__button-arrow_left');
const buttonRight = document.querySelector('.control-panel__button-arrow_right');
const buttonMute = document.querySelector('.sound-volume__button-mute');
const pinButtonMute = document.querySelector('.sound-volume__button-mute_pin');
const buttonVolumePlus = document.querySelector('.sound-volume__button-plus');
const buttonVolumeMinus = document.querySelector('.sound-volume__button-minus');
const containerBtnMute = document.querySelector('.sound-volume__button-mute-container');
const containerBtnVolumeMinus = document.querySelector('.sound-volume__button-minus-container');
const containerBtnVolumePlus = document.querySelector('.sound-volume__button-plus-container');
const audio = document.querySelector('.audio');
const background = document.querySelector('.background-image');
const backgroundPlayer = document.querySelector('.audio-player__image');
const titleAlbum = document.querySelector('.audio-player__title-album');
const nameComposer = document.querySelector('.title-track__name-composer');
const nameComposition = document.querySelector('.title-track__name-composition');
const progressBar = document.querySelector('.control-panel__progress-bar');
const timeComposition = document.querySelector('.control-panel__time-composition');
const timePlayback = document.querySelector('.control-panel__time-playback');

let isPlay = false;

timeComposition.innerHTML = convertSecondsToMinutes(audio.duration);

function convertSecondsToMinutes(audioTime) {
    let seconds = Math.floor(audioTime % 60);

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    let minutes = Math.floor(audioTime / 60);

    return minutes + ":" + seconds;
};

audio.addEventListener('loadedmetadata', () => {
    timeComposition.innerHTML = convertSecondsToMinutes(audio.duration);
    timePlayback.innerHTML = convertSecondsToMinutes(audio.currentTime);
    progressBar.max = audio.duration;
    progressBar.setAttribute('value', audio.currentTime);
});

audio.addEventListener('timeupdate', () => { 
    timePlayback.innerHTML = convertSecondsToMinutes(audio.currentTime); 
    progressBar.setAttribute("value", audio.currentTime); 
    progressBar.value = audio.currentTime; 
    if (audio.ended) { 
        buttonPause.classList.remove('active'); 
        buttonPlay.classList.add('active'); 
            if (position < backgroundAll.length -1){
                position ++;
            }else{
                position = 0;
            };
        changePageContent(position);
    };
});

progressBar.addEventListener("change", () => { 
    audio.currentTime = progressBar.value; 
});
progressBar.addEventListener('input', () => {
    audio.currentTime = progressBar.value;
});

buttonPlay.addEventListener('click', () => {
    buttonPlay.classList.remove('active');
    buttonPause.classList.add('active');
    isPlay = !isPlay;
    audio.play();
    backgroundPlayer.classList.add('imageBig');
    containerBtnVolumePlus.classList.remove('disabled');
    containerBtnVolumeMinus.classList.remove('disabled');
    audio.volume = 0.5;
});

buttonPause.addEventListener('click', () => {
    buttonPlay.classList.add('active');
    buttonPause.classList.remove('active');
    isPlay = false;
    audio.pause();
    backgroundPlayer.classList.remove('imageBig');
    containerBtnVolumePlus.classList.remove('disabled');
    containerBtnVolumeMinus.classList.remove('disabled');
    audio.volume = 0.5;
});

const audioAll = ['audio/Бетховен Людвиг ван (Beethoven) - К Элизе.mp3','audio/V.Mozart - Simfonia N 40.Molto allegro.mp3','audio/И. С. Бах Сюита № 1 Прелюдия.mp3'];
const backgroundAll = ['image/LudwigVanBeethoven.jpg', 'image/WolfgangAmadeusMozart.jpg', 'image/JohannSebastianBach.jpg'];
const titleAlbumAll = ['Bagatelle #25', 'Symphony #40', 'Suite #1'];
const nameComposerAll = ['L.V. Beethoven', 'W.A. Mozart', 'J.S. Bach'];
const nameCompositionAll =['To Eliza', 'Allegro molto', 'Prelude'];

let position = 0;
let sound = 0;

function changePageContent(position){
    background.src = backgroundAll[position];
    backgroundPlayer.src = backgroundAll[position];
    audio.src = audioAll[position];
    nameComposer.innerHTML = nameComposerAll[position];
    titleAlbum.innerHTML = titleAlbumAll[position];
    nameComposition.innerHTML = nameCompositionAll[position];
    if (isPlay){
        audio.play();
        buttonPlay.classList.remove('active');
        buttonPause.classList.add('active');
    }
    else{
        audio.pause();
        buttonPlay.classList.add('active');
        buttonPause.classList.remove('active');
    }
};

buttonRight.addEventListener('click', () => {
    if (position < backgroundAll.length -1){
        position ++;
    }else{
        position = 0;
    };
    changePageContent(position);
    containerBtnVolumePlus.classList.remove('disabled');
    containerBtnVolumeMinus.classList.remove('disabled');
    audio.volume = 0.5;
    sound = 2;
    turnSoundOnOff();
});

buttonLeft.addEventListener('click', () => {
    if (position > 0) {
        position--;
    } else {
        position = backgroundAll.length -1;
    }
    changePageContent(position);
    containerBtnVolumePlus.classList.remove('disabled');
    containerBtnVolumeMinus.classList.remove('disabled');
    audio.volume = 0.5;
    sound = 2;
    turnSoundOnOff();
});


buttonVolumeMinus.addEventListener('click', () => {
    containerBtnVolumePlus.classList.remove('disabled');
    if (audio.volume <= 1){
    audio.volume-= 0.25;
    };
    if (audio.volume === 0 ){
        containerBtnVolumeMinus.classList.add('disabled');
    };
    sound = 2;
    turnSoundOnOff();
});

buttonVolumePlus.addEventListener('click', () => {
    containerBtnVolumeMinus.classList.remove('disabled');
    if(audio.volume < 1){
        audio.volume+= 0.25;
    };
    if(audio.volume === 1){
        containerBtnVolumePlus.classList.add('disabled');
    } 
    sound = 2;
    turnSoundOnOff();
});

function turnSoundOnOff(){
    if(sound === 0){
        sound++
        audio.muted = !audio.muted; 
        buttonMute.style.fill = '#ae924e';
        pinButtonMute.classList.add('active');
        containerBtnMute.style.border = '2px solid #ae924e';
        
    }
    else{
        sound = 0;
        audio.muted = false
        buttonMute.style.fill = 'black';
        pinButtonMute.classList.remove('active');
        containerBtnMute.style.border = '2px solid black';
    };
};

containerBtnMute.addEventListener('click', () => {
    turnSoundOnOff();
});

const soundBoard = [
    {
        img: "uploads/attackontitan.jpg",
        audio: "uploads/attackontitan.mp4",
        name: "attackOnTitan"
    },
    {
        img: "uploads/attackontitanseason4.jpg",
        audio: "uploads/attackontitanseason4.mp4",
        name: "attackOnTitanSeason4"
    },
    {
        img: "uploads/knightsofsidonia.jpg",
        audio: "uploads/knightsofsidonia.mp4",
        name: "knightsofsidonia"
    },
    {
        img: "uploads/itwasidio.jpg",
        audio: "uploads/itwasidio.mp4",
        name: "dio"
    },
    {
        img: "uploads/berserkfight.jpg",
        audio: "uploads/berserkfight.mp4",
        name: "berserkfight",
    },
    {
        img: "uploads/gutssoundtrack.jpg",
        audio: "uploads/gutssoundtrack.mp4",
        name: "gutssoundtrack"
    },
    {
        img: "uploads/bleach.png",
        audio: "uploads/bleachtheme.mp4",
        name: "bleach"
    },
    {
        img: "uploads/bleachhoahoh.jpg",
        audio: "uploads/bleachhoahoh.mp4",
        name: "bleachhoahoh"
    },
    {
        img: "uploads/getoff.gif",
        audio: "uploads/anothermansskin.mp4",
        name: "anothermansskin"
    },
    {
        img: "uploads/metaljerk.jpg",
        audio: "uploads/metaljerk.mp4",
        name: "metaljerk"
    },
    {
        img: "uploads/prominenceburn.jpg",
        audio: "uploads/prominenceburn.mp4",
        name: "prominenceburn"
    },
    {
        img: "uploads/unitedstatesofsmash.png",
        audio: "uploads/unitedstatesofsmash.mp4",
        name: "unitedstatesofsmash"
    },
];

const appendToTag = document.getElementById("content");

appendToTag.innerHTML = soundBoard.map(
    ({ img, audio, name }) => `
        <div class="row">
        <img src="${img}" width=250 height=250 value="play" playsinline onclick={playSong(${name})} />
        </div>
        <audio id=${name} src=${audio} playsinline preload="none"></audio>
        <button onclick={pauseSong(${name})}>Play / Pause</button>
        <button onclick={restartSong(${name})}>Restart</button>
        <br>
        <br>
        `
);

document.addEventListener('play', function(e){
    var audios = document.getElementsByTagName('audio');
    for(var i = 0, len = audios.length; i < len;i++){
        if(audios[i] != e.target){
            audios[i].pause();
        }
    }
}, true);

const playSong = (song)  => song.paused ? song.play() : song.pause();

const pauseSong = (song) => (song.paused ? song.play() : song.pause());

const restartSong = (song) => (song.currentTime = 0);

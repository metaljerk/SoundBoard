const soundBoard = [
    {
        img: "static/attackontitan.jpg",
        audio: "static/attackontitan.mp4",
        name: "attackOnTitan"
    },
    {
        img: "static/attackontitanseason4.jpg",
        audio: "static/attackontitanseason4.mp4",
        name: "attackOnTitanSeason4"
    },
    {
        img: "static/knightsofsidonia.jpg",
        audio: "static/knightsofsidonia.mp4",
        name: "knightsofsidonia"
    },
    {
        img: "static/itwasidio.jpg",
        audio: "static/itwasidio.mp4",
        name: "dio"
    },
    {
        img: "static/youutterfool.jpg",
        audio: "static/youutterfool.mp4",
        name: "youutterfool"
    },
    {
        img: "static/berserkfight.jpg",
        audio: "static/berserkfight.mp4",
        name: "berserkfight",
    },
    {
        img: "static/gutssoundtrack.jpg",
        audio: "static/gutssoundtrack.mp4",
        name: "gutssoundtrack"
    },
    {
        img: "static/bleach.png",
        audio: "static/bleachtheme.mp4",
        name: "bleach"
    },
    {
        img: "static/bleachhoahoh.jpg",
        audio: "static/bleachhoahoh.mp4",
        name: "bleachhoahoh"
    },
    {
        img: "static/getoff.gif",
        audio: "static/anothermansskin.mp4",
        name: "anothermansskin"
    },
    {
        img: "static/metaljerk.jpg",
        audio: "static/metaljerk.mp4",
        name: "metaljerk"
    },
    {
        img: "static/prominenceburn.jpg",
        audio: "static/prominenceburn.mp4",
        name: "prominenceburn"
    },
    {
        img: "static/unitedstatesofsmash.png",
        audio: "static/unitedstatesofsmash.mp4",
        name: "unitedstatesofsmash"
    },
    {
        img: "static/ururukillyou.jpg",
        audio: "static/ururukillyou.mp4",
        name: "ururukillyou"
    }
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
).join(''); //This join is needed to prevent commas from appearing from the soundboard list

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

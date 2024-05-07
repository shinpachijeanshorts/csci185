const trackList = [
  {
    name: "My Cat",
    artist: "Jack Off Jill",
    display: "https://files.catbox.moe/tsk79g.gif",
    audio: "https://files.catbox.moe/kxjt42.mp3"
  },
  {
    name: "Joey",
    artist: "Concrete Blonde",
    display: "https://files.catbox.moe/1r1w7m.gif",
    audio: "https://files.catbox.moe/difawf.mp3"
  },
  {
    name: "Poison Arrow",
    artist: "ABC",
    display: "https://files.catbox.moe/ju3tsl.gif",
    audio: "https://files.catbox.moe/gma8ed.mp3",
  },
  {
    name: "Private Life",
    artist: "Oingo Boingo",
    display: "https://files.catbox.moe/woz0tz.gif",
    audio: "https://files.catbox.moe/30839g.mp3",
  },
  {
    name: "Dig It",
    artist: "Skinny Puppy",
    display: "https://files.catbox.moe/pnwnnn.gif",
    audio: "https://files.catbox.moe/2hrss1.mp3",
  },
  {
    name: "Israel",
    artist: "Siouxsie and The Banshees",
    display: "https://files.catbox.moe/f75vmx.gif",
    audio: "https://files.catbox.moe/uzkllb.mp3",
  },
  {
    name: "Something In My House",
    artist: "Dead or Alive",
    display: "https://files.catbox.moe/2o83ar.gif",
    audio: "https://files.catbox.moe/cy4jtt.mp3",
  },
  {
    name: "Wynona's Big Brown Beaver",
    artist: "Primus",
    display: "https://files.catbox.moe/u2v38q.gif",
    audio: "https://files.catbox.moe/97kpo7.mp3",
  },
];


//   Sets the songs available to be played
// Songs are stored on Catbox.moe as embedded links - as well as display Gifs

const audio = document.querySelector(`audio`);
const playButton = document.getElementsByClassName(`.play`);
const pauseButton = document.getElementsByClassName(`.pause`);
const prevButton = document.getElementsByClassName(`.back`);
const nextButton = document.getElementsByClassName(`.forward`);
const volumeControl = document.querySelector(`.volume-control`);
const seekSlider = document.querySelector(`.seek-slider`);
const displayTrackName = document.querySelector(`.track-name`);
const displayArtistName = document.querySelector(`.artist-name`);
const image = document.querySelector('img');


let isPlaying = false;

// Selects first song at random


function loadTrack(track) {
  displayTrackName.innerHTML = track.name;
  displayArtistName.innerHTML = track.artist;
  audio.src = `${track.audio}`;
  image.src = `${track.display}`;
  clearInterval(updateProgress);
  seekSlider.value = 0;
}

let i = Math.floor(Math.random() * trackList.length);
loadTrack(trackList[i]);

function playSong() {
  isPlaying = true;
  audio.play();
}

function pauseSong() {
  isPlaying = false;
  audio.pause();
}

function forward() {
  i++;
  if (i > trackList.length -1) {
    i = 0;
  }
  loadTrack(trackList[i]);
  seekSlider.value = 0;
  playSong();
}

function back() {
  i--;
  if (i < 0) {
    i = trackList.length - 1;
  }
  loadTrack(trackList[i]);
  seekSlider.value = 0;
  playSong();
}

// Progress display


function progressBarValue() {
  const { duration, currentTime } = audio;
  const progressPercent = (currentTime / duration) * 100;
  seekSlider.value = `${progressPercent}`;

}

function updateProgress() {
  if (isPlaying) {
    progressBarValue();
  }
}

function setSeekSlider(e) {
  const value = this.clientValue;
  const clickX = e.offsetX;
  const { duration } = audio;
  audio.currentTime = (clickX / value) * duration;
  if (!isPlaying) {
    progressBarValue();
  }
}

function seekTo() {
  seekto = audio.duration * (seekSlider.value / 100);
  audio.currentTime = seekto;
  progressBarValue();
}

// function setVolume() {
//   const currentVolume = audio.volume;
//   const volumePercent = (currentVolume / 100);
//   volumeControl.value = `${volumePercent}`;
// }
// Volume controls would not cooperate...

audio.addEventListener("timeupdate", updateProgress);
audio.addEventListener("ended", forward);
seekSlider.addEventListener("click", setSeekSlider);
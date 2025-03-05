const image = document.getElementById("cover"),
  title = document.getElementById("music-title"),
  artist = document.getElementById("music-artist"),
  currentTimeEl = document.getElementById("current-time"),
  durationEl = document.getElementById("duration"),
  progress = document.getElementById("progress"),
  playerProgress = document.getElementById("player-progress"),
  prevBtn = document.getElementById("prev"),
  nextBtn = document.getElementById("next"),
  playBtn = document.getElementById("play"),
  background = document.getElementById("imagen");

const music = new Audio();

const songs = [
  {
    path: "assets/modelito.mp3",
    displayName: "Modelito",
    cover: "assets/modelito.jpg",
    artist: "Mora,YOVNGCHIMI",
  },
  {
    path: "assets/memorias.mp3",
    displayName: "Memorias",
    cover: "assets/memorias.jpg",
    artist: "Mora,JHAYCO",
  },
  {
    path: "assets/ia.mp3",
    displayName: "IA",
    cover: "assets/ia.jpg",
    artist: "Clarent,Mora",
  },
  {
    path: "assets/xclusivo.mp3",
    displayName: "X´clusivo Remix",
    cover: "assets/xclusivo.jpg",
    artist: "Gonzy,SAIKO,Arcangel",
  },
  {
    path: "assets/otranoche.mp3",
    displayName: "OTRA NOCHE",
    cover: "assets/otranoche.jpg",
    artist: "Myke Towers,Darell",
  },
  {
    path: "assets/lainocente.mp3",
    displayName: "LA INOCENTE",
    cover: "assets/memorias.jpg",
    artist: "Mora,Feid",
  },
];

let musicIndex = 0;
let isPlaying = false;
function togglePlay() {
  if (isPlaying) {
    pauseMusic();
  } else {
    playMusic();
  }
}

function playMusic() {
  isPlaying = true;
  playBtn.classList.replace("fa-play", "fa-pause");
  playBtn.setAttribute("title", "Pause");
  music.play();
}

function pauseMusic() {
  isPlaying = false;
  playBtn.classList.replace("fa-pause", "fa-play");
  playBtn.setAttribute("title", "Play");
  music.pause();
}

function loadMusic(song) {
  music.src = song.path;
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  image.src = song.cover;
}

function changeMusic(direction) {
  musicIndex = (musicIndex + direction + songs.length) % songs.length;
  loadMusic(songs[musicIndex]);
  playMusic();
}

function updateProgressBar(params) {
  const { duration, currentTime } = music;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;

  const formatTime = (time) => String(Math.floor(time)).padStart(2, "0");
  durationEl.textContent = `${formatTime(duration / 60)}:${formatTime(
    duration % 60
  )}`;
  currentTimeEl.textContent = `${formatTime(currentTime / 60)}:${formatTime(
    currentTime % 60
  )}`;
}

function setProgressbar(e) {
  const width = playerProgress.clientWidth;
  const clickX = e.offsetX;
  music.currentTime = (clickX / width) * music.duration;
}

playBtn.addEventListener("click", togglePlay);
prevBtn.addEventListener("click", () => changeMusic(-1));
nextBtn.addEventListener("click", () => changeMusic(1));

music.addEventListener("ended", () => changeMusic(1));
music.addEventListener("timeupdate", updateProgressBar);
playerProgress.addEventListener("click", setProgressbar);

loadMusic(songs[musicIndex]);

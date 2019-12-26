var currentQueue = [];
var currentSong = 1; //int
var songIncrement = 0;

// get playlist functions
//const beforeFetchURL = 'https://cors-anywhere.herokuapp.com/';
// TODO: get a working cors proxy or something
const beforeFetchURL = 'http://10.0.0.8:8069/miniProxy.php?';

//function getVocalFree(){
function playButtonOnClick(event) {
  loading();

  // event.target is the button
  console.log(event.target.dataset.play)

  var playlist = fetch(beforeFetchURL + 'https://api-v2.soundcloud.com/playlists/' + event.target.dataset.play
+ '?representation=full&format=json&client_id=r4nH5X72hWzUcXFiXFCBs275NbNMSF8Y')
  .then(response => response.json())
  .then(function(playlist) {
    console.log(playlist)
    //SC.get('/playlists/368429987').then(function(playlist) {
    for (var i = 0; i < playlist.tracks.length; i++){
      currentQueue[i] = playlist.tracks[i];
      currentSong = currentQueue[songIncrement].user.username;
      //console.log(currentSong);
      updateSong();
      playSong();
    }
  });
}

//adding event listeners for all the buttons
var playButtons = document.getElementsByClassName('play-button')
for (var i = 0; i < playButtons.length; i++){
  playButtons[i].addEventListener('click', playButtonOnClick)
}

// play function
function playSong(){
  console.log('play')
  // TODO: this is the song url to be played
  console.log(currentQueue[songIncrement]['media']['transcodings'][1]['url'] + '?client_id=r4nH5X72hWzUcXFiXFCBs275NbNMSF8Y')
}

// functions for updating song titles
var currentArtist;
var currentSong;

function updateSong(){
  currentArtist = currentQueue[songIncrement].user.username;
  currentSong = currentQueue[songIncrement].title;

  document.getElementById('artist').innerText = (currentArtist);
  document.getElementById('song').innerText = (currentSong);

  document.getElementsByClassName('spinner')[0].style.display = "none";
  document.getElementsByClassName('song')[0].style.display = "block";
}

// skip song
function skipSong(){
  songIncrement++;

  if(songIncrement > (currentQueue.length - 1)){
    songIncrement = 0;
  }
}

// previous song
function previousSong(){
  songIncrement--;

  if (songIncrement < 0){
    songIncrement = (currentQueue.length - 1);
  }
}

// event listener for navigation arrows
document.getElementById('right').addEventListener('click', function() {
  loading();
  skipSong();
  updateSong();
});

document.getElementById('left').addEventListener('click', function() {
  loading();
  previousSong();
  updateSong();
});

//loading animation and hides
document.getElementsByClassName('spinner')[0].style.display = "none";

function loading(){
  document.getElementsByClassName('spinner')[0].style.display = "block";
  document.getElementsByClassName('spinner')[0].style.display= "none";
}

/*
// this is what's called when the play/pause button is clicked
function togglePlayPause(event) {
  if(event.target.id === 'play') {
    //alert('play -> pause')
    playPauseButton.id = 'pause';
    playPauseButton.src = 'images/pause.png';
  } else {
    //alert('pause -> play')
    playPauseButton.id = 'play';
    playPauseButton.src = 'images/play.png';
  }
}

var playPauseButton = document.getElementsByClassName('playPause')[0];
playPauseButton.addEventListener('click', togglePlayPause);
*/

var currentQueue = [];
var currentSong = 1; //int
var songIncrement = 0;

// get playlist functions
const beforeFetchURL = 'https://cors-anywhere.herokuapp.com/';

//function getVocalFree(){
function playButtonOnClick(event) {
  loading();
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
  console.log(currentQueue[songIncrement]['media']['transcodings'][1]['url'])
}

// functions for updating song titles
var currentArtist;
var currentSong;

function updateSong(){
  currentArtist = currentQueue[songIncrement].user.username;
  currentSong = currentQueue[songIncrement].title;
  
  document.getElementById('artist').innerText = (currentArtist);
  document.getElementById('song').innerText = (currentSong);

  document.querySelector('.spinner').style.display = "none";
  document.querySelector('.song').style.display = "block";
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
var right = document.getElementById('right');
right.addEventListener('click', ()=>{
  loading();
  skipSong();
  updateSong();
});

var left = document.getElementById('left');
left.addEventListener('click',()=>{
  loading();
  previousSong();
  updateSong();
});

//loading animation and hides
document.querySelector('.spinner').style.display = "none";

function loading(){
  document.querySelector('.spinner').style.display = "block";
  document.querySelector('.song').style.display= "none";
}


/*SC.initialize({
    client_id: 'r4nH5X72hWzUcXFiXFCBs275NbNMSF8Y',
});*/

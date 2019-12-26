// variables
//var currentQueue = ['song', 'yes'];
var currentQueue = [];
var currentSong = 1; //int
var songIncrement = 0;

// initializing
//console.log(SC);

/*SC.initialize({
    client_id: 'r4nH5X72hWzUcXFiXFCBs275NbNMSF8Y',
});*/

// get playlist functions

//const beforeFetchURL = 'http://127.0.0.1:8000/miniProxy.php?';
const beforeFetchURL = 'https://cors-anywhere.herokuapp.com/';

//function getVocalFree(){
function playButtonOnClick(event) {
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

//console.log(currentQueue);

// sorry

var playButtons = document.getElementsByClassName('play-button')
for (var i = 0; i < playButtons.length; i++){
  playButtons[i].addEventListener('click', playButtonOnClick)
}

// play function

function playSong(){
  console.log('play')
  console.log(currentQueue[songIncrement]['media']['transcodings'][1]['url'])
 /* SC.stream('/tracks/337223917').then(function(player){
      player.play().then(function(){
        console.log('Playback started!');
      }).catch(function(e){
        console.error('Playback rejected. Try calling play() from a user interaction.', e);
      });
    });
 */

}
// console.log('f in the fl*pping chat boys');

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

// var play = document.getElementById('playPause');
// play.addEventListener('click',()=>{
//   // playSong();
//   pausePlay();
// });

var pauseplay = document.querySelector('.playPause');
pauseplay.addEventListener('click',()=>{
  // playSong();
  pauseplay.src = ("images/play.png");
  pauseplay.querySelector('playPause').id = ('play');
});

pauseplay.addEventListener('click',()=>{
  // playSong();
  pauseplay.querySelector('playPause').src = ("images/pause.png");
  pauseplay.querySelector('playPause').id = ('pause');
});

//loading animation and hides
document.querySelector('.spinner').style.display = "none";

function loading(){
  document.querySelector('.spinner').style.display = "block";
  document.querySelector('.song').style.display= "none";
}

//changing play button to pause button when music is playing
// function pausePlay(){
//   document.getElementById('play').src = ("images/pause.png");
//   document.getElementById('play').id = ('pause');
// }

// function playPause(){
//   document.getElementById('pause').src = ("images/play.png");
//   document.getElementById('pause').id = ('play');
// }


//    console.log(playlist)

//trash so I don't forget whats happening

// //jazzy
// SC.get('/playlists/944951920').then(function(playlist) {
//   console.log(playlist.tracks);
//   playlist.tracks.forEach(function(track) {
//     // console.log(track);
//   });
// });

// variables
var currentQueue = ['song', 'yes'];
var currentSong = 1; //int
var songIncrement = 0;

// initializing
console.log(SC);

SC.initialize({
    client_id: 'r4nH5X72hWzUcXFiXFCBs275NbNMSF8Y',
});

// get playlist functions

function getVocalFree(){
  SC.get('/playlists/368429987').then(function(playlist) {
      for (var i = 0; i < playlist.tracks.length; i++){
        currentQueue[i] = playlist.tracks[i];
      }
      currentSong = currentQueue[songIncrement].user.username;
      console.log(currentSong);
      updateSong();
      playSong();
  });
}

function getHeartbreak(){
  SC.get('/playlists/945437497').then(function(playlist) {
      for (var i = 0; i < playlist.tracks.length; i++){
        currentQueue[i] = playlist.tracks[i];
      }
      currentSong = currentQueue[songIncrement].user.username;
      console.log(currentSong);
      updateSong();
  });
}

function getChill(){
  SC.get('/playlists/944939650').then(function(playlist) {
    console.log(playlist.tracks);  
    
    for (var i = 0; i < playlist.tracks.length; i++){
      currentQueue[i] = playlist.tracks[i];
    }
    currentSong = currentQueue[songIncrement].user.username;
    console.log(currentSong);
    updateSong();
  });
}

function getJapanese(){
  SC.get('/playlists/945453487').then(function(playlist) {
    for (var i = 0; i < playlist.tracks.length; i++){
      currentQueue[i] = playlist.tracks[i];
    }
    currentSong = currentQueue[songIncrement].user.username;
    console.log(currentSong);
    updateSong();
  });
}

function getMeme(){
  SC.get('/playlists/945461548').then(function(playlist) {
      for (var i = 0; i < playlist.tracks.length; i++){
        currentQueue[i] = playlist.tracks[i];
      }
      currentSong = currentQueue[songIncrement].user.username;
      console.log(currentSong);
      updateSong();
  });
}

function getSeasonal(){
  SC.get('/playlists/945594007').then(function(playlist) {
    for (var i = 0; i < playlist.tracks.length; i++){
      currentQueue[i] = playlist.tracks[i];
    }
    currentSong = currentQueue[songIncrement].user.username;
    console.log(currentSong);
    updateSong();
  });
}

function getJazzy(){
  SC.get('/playlists/944951920').then(function(playlist) {
    for (var i = 0; i < playlist.tracks.length; i++){
      currentQueue[i] = playlist.tracks[i];
    }
    currentSong = currentQueue[songIncrement].user.username;
    console.log(currentSong);
    updateSong();
  });
}

function getHipHop(){
  SC.get('/playlists/945448732').then(function(playlist) {
      for (var i = 0; i < playlist.tracks.length; i++){
        currentQueue[i] = playlist.tracks[i];
      }

      currentSong = currentQueue[songIncrement].user.username;
      console.log(currentSong);
      updateSong();

  });
}

function getGaming(){
  SC.get('/playlists/945596899').then(function(playlist) {
      for (var i = 0; i < playlist.tracks.length; i++){
        currentQueue[i] = playlist.tracks[i];
      }
      currentSong = currentQueue[songIncrement].user.username;
      console.log(currentSong);
      updateSong();
  });
}
console.log(currentQueue);

// play function

function playSong(){
  SC.stream('/tracks/337223917').then(function(player){
      player.play().then(function(){
        console.log('Playback started!');
      }).catch(function(e){
        console.error('Playback rejected. Try calling play() from a user interaction.', e);
      });
    });
}
// console.log('f in the fucking chat boys');

// functions for updating song titles

var currentArtist;
var currentSong;

function updateSong(){
  currentArtist = currentQueue[songIncrement].user.username;
  currentSong = currentQueue[songIncrement].title;
  
  document.getElementById('artist').innerText = (currentArtist);
  document.getElementById('song').innerText = (currentSong);
}

// Adding event listeners for subgenres
var vocalFree = document.getElementById('vocalfree');
vocalFree.addEventListener('click', ()=>{
  songIncrement = 0;
  getVocalFree();
});

var heartbreak = document.getElementById('heartbreak');
heartbreak.addEventListener('click', ()=>{
  songIncrement = 0;
  getHeartbreak();
});

var calm = document.getElementById('calm');
calm.addEventListener('mousedown', ()=>{
  songIncrement = 0;
  getChill();
});

var japanese = document.getElementById('japanese');
japanese.addEventListener('mousedown', ()=>{
  songIncrement = 0;
  getJapanese();
});

var meme = document.getElementById('meme');
meme.addEventListener('mousedown', ()=>{
  songIncrement = 0;
  getMeme();
});

var seasonal = document.getElementById('seasonal');
seasonal.addEventListener('click', ()=>{
  songIncrement = 0;
  getSeasonal();
});

var jazzy = document.getElementById('jazzy');
jazzy.addEventListener('click', ()=>{
  songIncrement = 0;
  getJazzy();
});

var hiphop = document.getElementById('hiphop');
hiphop.addEventListener('click', ()=>{
  songIncrement = 0;
  getHipHop();
});

var gaming = document.getElementById('gaming');
gaming.addEventListener('click', ()=>{
  songIncrement = 0;
  getGaming();
});

// skip song
function skipSong(){
  songIncrement++;
}

// previous song
function previousSong(){
  songIncrement--;
}

// event listener for navigation arrows
var right = document.getElementById('right');
right.addEventListener('click', ()=>{
  skipSong();
  updateSong();
});

var left = document.getElementById('left');
left.addEventListener('click',()=>{
  previousSong();
  updateSong();
});

var play = document.getElementById('play');
play.addEventListener('click',()=>{
  playSong();
});







//trash so I don't forget whats happening

// //jazzy
// SC.get('/playlists/944951920').then(function(playlist) {
//   console.log(playlist.tracks);
//   playlist.tracks.forEach(function(track) {
//     // console.log(track);
//   });
// });
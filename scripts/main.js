// variables
var currentQueue = ['song', 'yes'];
var currentSong = 1; //int




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
  });
}

function getHeartbreak(){
  SC.get('/playlists/945437497').then(function(playlist) {
      for (var i = 0; i < playlist.tracks.length; i++){
        currentQueue[i] = playlist.tracks[i];
      }
  });
}

function getChill(){
  SC.get('/playlists/944939650').then(function(playlist) {
    console.log(playlist.tracks);  
    
    for (var i = 0; i < playlist.tracks.length; i++){
      currentQueue[i] = playlist.tracks[i];
    }
  });
}

function getJapanese(){
  SC.get('/playlists/945453487').then(function(playlist) {
    for (var i = 0; i < playlist.tracks.length; i++){
      currentQueue[i] = playlist.tracks[i];
    }
  });
}

function getMeme(){
  SC.get('/playlists/945461548').then(function(playlist) {
      for (var i = 0; i < playlist.tracks.length; i++){
        currentQueue[i] = playlist.tracks[i];
      }
  });
}

function getSeasonal(){
  SC.get('/playlists/945594007').then(function(playlist) {
    for (var i = 0; i < playlist.tracks.length; i++){
      currentQueue[i] = playlist.tracks[i];
    }
  });
}

function getJazzy(){
  SC.get('/playlists/944951920').then(function(playlist) {
    for (var i = 0; i < playlist.tracks.length; i++){
      currentQueue[i] = playlist.tracks[i];
    }
  });
}

function getHipHop(){
  SC.get('/playlists/945448732').then(function(playlist) {
      for (var i = 0; i < playlist.tracks.length; i++){
        currentQueue[i] = playlist.tracks[i];
      }
  });
}

function getGaming(){
  SC.get('/playlists/945596899').then(function(playlist) {
      for (var i = 0; i < playlist.tracks.length; i++){
        currentQueue[i] = playlist.tracks[i];
      }


  });
}



console.log(currentQueue);


// play function

// SC.stream('/tracks/337223917').then(function(player){
//     player.play().then(function(){
//       console.log('Playback started!');
//     }).catch(function(e){
//       console.error('Playback rejected. Try calling play() from a user interaction.', e);
//     });
//   });

// console.log('f in the fucking chat boys');

// functions for updating song titles

var currentArtist;
var currentSong;

function updateSong(){
  currentArtist = currentQueue[0].user.username;
  currentSong = currentQueue[0].title;
  
  document.getElementById('artist').innerText = (currentArtist);
  document.getElementById('song').innerText = (currentSong);
}

// Adding event listeners for subgenres
var vocalFree = document.getElementById('vocalfree');
vocalFree.addEventListener('click', ()=>{
  getVocalFree();
  currentSong = currentQueue[0].user.username;
  console.log(currentSong);
  updateSong();
});

var heartbreak = document.getElementById('heartbreak');
heartbreak.addEventListener('click', ()=>{
  getHeartbreak();
  currentSong = currentQueue[0].user.username;
  console.log(currentSong);
  updateSong();
});

var calm = document.getElementById('calm');
calm.addEventListener('mousedown', ()=>{
  getChill();
  currentSong = currentQueue[0].user.username;
  console.log(currentSong);
  updateSong();
});

var japanese = document.getElementById('japanese');
japanese.addEventListener('mousedown', ()=>{
  getJapanese();
  currentSong = currentQueue[0].user.username;
  console.log(currentSong);
  updateSong();
});

var meme = document.getElementById('meme');
meme.addEventListener('mousedown', ()=>{
  getMeme();
  currentSong = currentQueue[0].user.username;
  console.log(currentSong);
  updateSong();
});

var seasonal = document.getElementById('seasonal');
seasonal.addEventListener('click', ()=>{
  getSeasonal();
  currentSong = currentQueue[0].user.username;
  console.log(currentSong);
  updateSong();
});

var jazzy = document.getElementById('jazzy');
jazzy.addEventListener('click', ()=>{
  getJazzy();
  currentSong = currentQueue[0].user.username;
  console.log(currentSong);
  updateSong();
});

var hiphop = document.getElementById('hiphop');
hiphop.addEventListener('click', ()=>{
  getHipHop();
  currentSong = currentQueue[0].user.username;
  console.log(currentSong);
  updateSong();
});

var gaming = document.getElementById('gaming');
gaming.addEventListener('click', ()=>{
  getGaming();
  currentSong = currentQueue[0].user.username;
  console.log(currentSong);
  updateSong();
});









//trash so I don't forget whats happening

// //jazzy
// SC.get('/playlists/944951920').then(function(playlist) {
//   console.log(playlist.tracks);
//   playlist.tracks.forEach(function(track) {
//     // console.log(track);
//   });
// });
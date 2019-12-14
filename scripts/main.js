// variables
var currentQueue = [];
var currentSong; //int




// initializing
console.log(SC);

SC.initialize({
    client_id: 'r4nH5X72hWzUcXFiXFCBs275NbNMSF8Y',
});



// get playlist functions

function getChill(){
  SC.get('/playlists/944939650').then(function(playlist) {
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

function getVocalFree(){
  SC.get('/playlists/368429987').then(function(playlist) {
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


// Adding event listeners for subgenres
var vocalFree = document.getElementById('vocalfree');
console.log(vocalFree);

vocalFree.addEventListener('click', ()=>{
  getVocalFree();
  currentSong = currentQueue[0];
  console.log(currentSong);
});







//trash so I don't forget whats happening

// //jazzy
// SC.get('/playlists/944951920').then(function(playlist) {
//   console.log(playlist.tracks);
//   playlist.tracks.forEach(function(track) {
//     // console.log(track);
//   });
// });
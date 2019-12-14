console.log(SC);

SC.initialize({
    client_id: 'r4nH5X72hWzUcXFiXFCBs275NbNMSF8Y',
});

SC.get('/playlists/944951920').then(function(playlist) {
    playlist.tracks.forEach(function(track) {
      console.log(track.id);
    });
});

console.log('/tracks/304632798');

SC.stream('/tracks/337223917').then(function(player){
    player.play().then(function(){
      console.log('Playback started!');
    }).catch(function(e){
      console.error('Playback rejected. Try calling play() from a user interaction.', e);
    });
  });

// console.log('f in the fucking chat boys');
SC.initialize({
    client_id: 'r4nH5X72hWzUcXFiXFCBs275NbNMSF8Y',
});


SC.get('/user/183/tracks').then(function(tracks){
    alert('Latest track: ' + tracks[0].title);
  });

console.log('f in the fucking chat boys');
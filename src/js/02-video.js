var throttle = require ('lodash.throttle');
const iframe = document.getElementById('iframe');
const player = new Vimeo.Player(iframe);

    player.on('timeupdate', throttle(onTimeUpdate, 1000));

    function onTimeUpdate (data) {
        const timeJSON =  JSON.stringify(data.seconds);
        localStorage.setItem('videoplayer-current-time', timeJSON);
    };

 player.setCurrentTime().then(function(seconds) {
        seconds = fire;
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            if(seconds < 0 || seconds > data.duration) {
            break;

        default:
            // some other error occurred
            break;
    }
});

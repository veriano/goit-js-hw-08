import throttle from 'lodash.throttle';
import Player from '@vimeo/player';
const iframe = document.getElementById('iframe');
const player = new Vimeo.Player(iframe);

    player.on('timeupdate', function(data) {
        let fire = data.seconds;
        localStorage.setItem('videoplayer-current-time', `${fire}`);
    });


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

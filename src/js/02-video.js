import throttle from 'lodash.throttle';
import Player from '@vimeo/player';
const iframe = document.getElementById('vimeo-player');
const player = new Vimeo.Player(iframe);

    player.on('timeupdate', throttle(onTimeUpdate, 1000));

function onTimeUpdate(data) {
    const STORAGE_KEY = "videoplayer-current-time";
    const STORAGE_TIME = data.duration;
    localStorage.setItem(STORAGE_KEY, STORAGE_TIME);
    
player.setCurrentTime(localStorage.getItem(STORAGE_KEY)).then(function(seconds) {
    seconds = localStorage.getItem(STORAGE_KEY);
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
})
};
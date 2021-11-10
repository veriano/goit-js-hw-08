const throttle = require('lodash.throttle');
import Player from '@vimeo/player';
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const STORAGE_KEY = "videoplayer-current-time";

player.on('timeupdate', throttle(onTimeUpdate, 1000));
    
function onTimeUpdate(data) {
    const STORAGE_TIME = data.seconds;
    localStorage.setItem(STORAGE_KEY, STORAGE_TIME);
};

player.setCurrentTime(localStorage.getItem(STORAGE_KEY)).then(function (seconds) {
    seconds = localStorage.getItem(STORAGE_KEY);
}).catch(function (error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;
        default:
            // some other error occurred
            break;
    }
});
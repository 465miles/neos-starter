import Plyr from 'plyr';

const videoPlayers = document.querySelectorAll('.js_video-player');
videoPlayers.forEach(player => {
    return new Plyr(player, {
        youtube: {
            noCookie: true,
        },
    });
})

    // 2. This code loads the IFrame Player API code asynchronously.
    var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // 3. This function creates an <iframe> (and YouTube player)
    //    after the API code downloads.
    var player;
    function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
            playerVars: {
                'autoplay': 1,
                'controls': 0,
                'autohide': 1,
                'wmode': 'opaque',
                'showinfo': 0,
                'loop': 1,
                'mute': 1,
                'start': 15,
                'end': 327,
                'playlist': 'dushZybUYnM'
            },
            videoId: 'dushZybUYnM',
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
    }

    // 4. The API will call this function when the video player is ready.
    function onPlayerReady(event) {
        event.target.playVideo();
    }

    // 5. The API calls this function when the player's state changes.
    //    The function indicates that when playing a video (state=1),
    //    the player should play for six seconds and then stop.
    var done = false;
    function onPlayerStateChange(event) {
        player.mute();
        $('header').stop().fadeOut("1000", function () {
            $(this).css("background", "transparent").fadeIn(1000);
        });
    }
    function stopVideo() {
        player.stopVideo();
    }
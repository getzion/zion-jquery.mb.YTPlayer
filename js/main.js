//=require jquery.mb.ytplayer/dist/jquery.mb.YTPlayer.js


////////////////////////////////////////
//
// Youtube Background Initiation
//
////////////////////////////////////////
$(document).ready(function(){
    if($('.youtube-background').length){
        $('.youtube-background').each(function(){
            let $this = $(this);

            // Fetching user given properties for ytplayer and merging with default controllers
            const properties = {...{ratio: 1.77777777, mute: true, showYTLogo: false, showControls: false, loop: true}, ...$this.data("property")}
            // console.log(properties);

            $this.data("property", JSON.stringify(properties));

            // console.log($this.data('property'));

            $this.YTPlayer({
                containment: $this.parent(".background")
            });

            // console.log("initiated");

        });
    }
});

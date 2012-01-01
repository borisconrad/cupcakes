/*global jQuery, flowplayer, window */
(function($) {


$(function() {    
/*
    if (navigator.mimeTypes ["application/x-shockwave-flash"] == undefined) {
    $(".myPlayListFlowPlayerAudio").prepend("<div class='alert'>Adobe Flash Player is not installed</div>");
    }  else {
*/
    var list = new Array();
    $(".myPlayListFlowPlayerAudio").each(function(index, value) {

    $(this).children("li").each(function(index2, value2) {
       list[index2] = ({"url":$(this).children("a").attr("href"),  "title":$(this).children("a").html()});
   });

// setup player normally

    $('<ul id="myPlayListFlowPlayerAudioList'+index+'" class="myPlayListFlowPlayerAudio"> <li class="clips"><a href="${url}">${title}</a></li></ul>').insertAfter(this);
    $("<div id='myPlayListFlowPlayerAudio"+index+"'></div>").insertAfter(this);
    $("#myPlayListFlowPlayerAudio"+index).height(0);
    $("#myPlayListFlowPlayerAudio"+index).width(0);
   $("#myPlayListFlowPlayerAudio"+index+" object ").height(0);
	$f("myPlayListFlowPlayerAudio"+index, "http://releases.flowplayer.org/swf/flowplayer-3.2.7.swf", {


		// our playlist
		playlist:  list, 
		
		// show playlist buttons in controlbar
		plugins: {
			controls: {
			playlist: true,
			fullscreen: false,
			height: 30,
			autoHide: false
			}
		}
	});
	$(this).remove();

        $f("myPlayListFlowPlayerAudio"+index).playlist('#myPlayListFlowPlayerAudioList'+index, {loop: true});
        
    })

});
}(jQuery));
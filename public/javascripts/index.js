/*$(document).ready(function(){
    $("p").click(function(){
        $(this).hide();
    });
});*/

$(function () {
	var filterList = {
		init: function () {
			$('#portfoliolist').mixItUp({
				selectors: {
			  target: '.portfolio',
			  filter: '.filter'
		  },
		 /* load: {
  		  filter: '.website'
  		}*/
			});
		}
	};
	// Run the show!
	filterList.init();
});
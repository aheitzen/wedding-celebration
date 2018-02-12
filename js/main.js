$(document).ready(function() {
	$('#fullpage').fullpage();
});

$(document).ready(function (){
  	$("#details-pull").click(function (){
    	$('html, body').animate({
        	scrollTop: $("#info-section").offset().top
        }, 1000);
  	});
  	$("#rsvp-pull").click(function (){
    	$('html, body').animate({
        	scrollTop: $("#rsvp").offset().top
        }, 1000);
  	});
});
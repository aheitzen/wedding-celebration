$(document).ready(function() {
	$('#fullpage').fullpage();
});

$(document).ready(function (){
	var formHandler = new FormHandler();

	$('#rsvp-form').submit((e) => {
		e.preventDefault();

		var formData = formHandler.buildFormData()
		formData.accepts = formData.accepts === 'accepts';

		if (formHandler.isReady && formHandler.verifyRsvp(formData)) {
			formHandler.addRsvp(formData).success(() => {
				console.log('success');
				// TODO: need to show success message
			}).error((error) => {
				console.log('error', error);
			}).done(() => {
				console.log('done');
			})
		} else {
			console.log(formHandler.error);
			// TODO: need to show error message
			return false;
		}
	});

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

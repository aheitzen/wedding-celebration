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
				$('#modal .modal-header h4').text('Success');
				$('#modal .modal-body p').text('Your RSVP has been received!');
				$('#modal').addClass('success').modal({ show: true })
			}).error((error) => {
				$('#modal .modal-header h4').text('Error');
				$('#modal .modal-body p').text('Unknown error: Please email parks.kendrick@gmail.com your RSVP.');
				$('#modal').removeClass('success').modal({ show: true })
			})
		} else {
			$('#modal .modal-header h4').text('Error');
			$('#modal .modal-body p').text(formHandler.error);
			$('#modal').removeClass('success').modal({ show: true });
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

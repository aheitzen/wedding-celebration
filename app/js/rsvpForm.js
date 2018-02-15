function FormHandler () {

	if (!jQuery || jQuery === null) {
		console.error('FormHandler requires jQuery');
		return;
	}

	var self = this;
	self.rsvps = [];
	self.error = '';
	self.isReady = false;

	self.buildFormData = function () {
		var formData = {};

		$('#rsvp-form').serializeArray().forEach((item) => {
			formData[item.name] = item.value;
		});

		return formData;
	}

	self.verifyRsvp = function (formData){
		self.error = '';
		if (!formData.names || formData.names === null || formData.names === '') {
			self.error = 'Missing Name(s)';
			return false;
		}
		else if (!formData.accepts || formData.accepts === null || formData.accepts === '') {
			self.error = 'Missing Accepts/Declines Choice';
			return false;
		} else {
			return true;
		}
	}

	self.addRsvp = function (rsvp) {
		self.rsvps.push(rsvp);
		return $.ajax({
			type: 'PUT',
			url: 'https://aplusk-eed13.firebaseio.com/.json',
			data: JSON.stringify(self.rsvps)
		});
	}

	self.getRsvps = function () {
		$.ajax({
			type: 'GET',
			url: 'https://aplusk-eed13.firebaseio.com/.json'
		}).success((rsvps) => {
			self.rsvps = rsvps || self.rsvps;
		}).error((error) => {
			self.error = error;
		}).done(() => {
			self.isReady = true;
		});
	}

	self.getRsvps();
}

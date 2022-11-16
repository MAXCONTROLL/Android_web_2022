$('body').on('click', '.password-checkbox', function(){
	if ($(this).is(':checked')){
		$('#password-input-repeat').attr('type', 'text');
		$('#password-input').attr('type', 'text');
	} else {
		$('#password-input-repeat').attr('type', 'password');
		$('#password-input').attr('type', 'password');
	}
});
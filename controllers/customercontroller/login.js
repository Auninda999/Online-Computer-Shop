var express = require('express');

var router = express.Router();

router.get('/customer', function(request, response){
	response.render('customer/login');
});

router.post('/customer', function(request, response){
	
	var user = {
		email: request.body.email,
		password: request.body.password
	};

	userModel.validate(user, function(status){
		if(status){
			response.cookie('email', request.body.email);
			response.redirect('/home');
		}else{
			response.send('invalid email/password');		
		}
	});

});

module.exports = router;
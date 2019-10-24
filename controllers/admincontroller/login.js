var express = require('express');
var admin_model = require("../../models/admin-model");
var router = express.Router();

router.get('/admin', function(request, response){
	response.render('admin/login');
});

router.post('/admin', function(request, response){
	
	var user = {
		email: request.body.email,
		password: request.body.password
	};

	admin_model.validate(user, function(status){
		if(status){
			response.cookie('email', request.body.email);
			response.redirect('/home');
		}else{
			response.send('invalid email/password');		
		}
	});

});

module.exports = router;
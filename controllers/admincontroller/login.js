var express = require('express');
//var userModel = require('./../models/user-model');
var router = express.Router();

router.get('/login', function(request, response){
	response.render('admin/login');
});

/*router.post('/', function(request, response){
	
	var user = {
		email: request.body.email,
		password: request.body.password
	};

	userModel.validate(user, function(status){
		if(status){
			response.cookie('email', request.body.email);
			response.redirect('/home');
		}else{
			response.send('invalid username/password');		
		}
	});

});*/

module.exports = router;
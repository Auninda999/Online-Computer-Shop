var express = require('express');
var router = express.Router();

router.get('/admin', function(request, response){

	//request.session.un = null;
	response.clearCookie('username');
	response.redirect('/login');
});

module.exports = router;
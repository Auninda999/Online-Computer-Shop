var db = require('./db')

module.exports = {

	getById: function(id, callback){

			var sql = "select * from customer where id=?";
			db.getResults(sql, [id], function(result){
				if(result.length > 0 ){
					callback(result[0]);
				}else{
					callback([]);
				}
			});
	},
	validate: function(customer, callback){
		var sql ="select * from customer where email=? and password=?";
		db.getResults(sql, [customer.email, customer.password], function(result){

			if(result.length > 0){
				callback(true);
			}else{
				callback(false);
			}
		});	
	},
	getAll: function(callback){
		var sql = "select * from customer";
		
		db.getResults(sql, [], function(results){
			
			if(results.length > 0){
				callback(results);
			}else{
				callback([]);
			}
		});	
	},
	insert: function(customer, callback){

		var sql ="insert into customer values('', ?, ?)";
		db.execute(sql, [customer.fullname, customer.email, customer.password], function(status){
			callback(status);
		});
	},
	update: function(customer, callback){
		var sql ="update customer set fullname=?, email=?, password=? where id=?";
	
		db.execute(sql, [customer.fullname, customer.email, customer.password, customer.id], function(status){
			callback(status);
		});
	},
	delete: function(id, callback){
		var sql = "delete from customer where id=?";
		db.execute(sql, [id], function(status){
			callback(status);
		});
	}
}




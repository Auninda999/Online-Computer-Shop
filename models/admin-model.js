var db = require('./db')

module.exports = {

	getById: function(id, callback){

			var sql = "select * from admin where id=?";
			db.getResults(sql, [id], function(result){
				if(result.length > 0 ){
					callback(result[0]);
				}else{
					callback([]);
				}
			});
	},
	validate: function(admin, callback){
		var sql ="select * from admin where email=? and password=?";
		db.getResults(sql, [admin.email, admin.password], function(result){

			if(result.length > 0){
				callback(true);
			}else{
				callback(false);
			}
		});	
	},
	getAll: function(callback){
		var sql = "select * from admin";
		
		db.getResults(sql, [], function(results){
			
			if(results.length > 0){
				callback(results);
			}else{
				callback([]);
			}
		});	
	},
	insert: function(admin, callback){

		var sql ="insert into admin values('', ?, ?)";
		db.execute(sql, [admin.fullname, admin.email, admin.password], function(status){
			callback(status);
		});
	},
	update: function(admin, callback){
		var sql ="update admin set fullname=?, email=?, password=? where id=?";
	
		db.execute(sql, [admin.fullname, admin.email, admin.password, admin.id], function(status){
			callback(status);
		});
	},
	/*delete: function(id, callback){
		var sql = "delete from  where id=?";
		db.execute(sql, [id], function(status){
			callback(status);
		});
	}*/
}




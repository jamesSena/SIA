var mysql = require('mysql');
var coonMySQL =function(app){
    return mysql.createConnection(
        {
            host:'127.0.0.1',
            user:'root',
            password :'root',
            database: 'sia_db'
        }
    );
}
 
module.exports = function(){ 
    return coonMySQL;
};

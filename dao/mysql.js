module.exports = function(app){
    var mysql = require('mysql');
    var connection = mysql.createConnection(
        {
            host:'localhost',
            user:'root',
            password :'root',
            database: 'sia_db'
        }
    );
    console.log('inicio');
    var callbackQuery = function(error,result){
        console.log(result[0].nome);
        console.log(error);

    }
    connection.query("select * from sia_db.usuarios",callbackQuery);
 

}
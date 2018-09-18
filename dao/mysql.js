module.exports = async  function(app){
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
    var resultTop;

     
     connection.query("select * from sia_db.usuarios",
         function(error,result){
            console.log("result: " + result.nome);
            resultTop =  result;
        });
     console.log("result2: " );

    return resultTop;

}    

funtion 

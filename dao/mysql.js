module.exports = async  function(app){
    var mysql = require('mysql');
    var connection = mysql.createConnection(
        {
            host:'127.0.0.1',
            user:'root',
            password :'root',
            database: 'sia_db'
        }
    );
    console.log('inicio');
    var resultTop;

    var a = await consultaMysql(connection);
    console.log("result - A: " +JSON.stringify( a));


    return resultTop;

}

 function consultaMysql(connection){
    return  new Promise((resolve, reject) => { 
        connection.query("select * from sia_db.usuarios",
            function(error,result){
            console.log("result - B: " +JSON.stringify( result)); resolve(result);});
   });
}

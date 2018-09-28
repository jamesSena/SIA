var mysql = require('mysql');
var coonMySQL =function(app){
    console.log("Conexao MySQL On")
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
    console.log("Carregou contexto do mysql")
    return coonMySQL;
};

module.exports = function(){
    
    this.getUsuarios = function(connection, callback)  
    {
        connection.query("select * from sia_db.usuarios", callback);

    }

    this.getUsuario = function(connection, callback)  
    {
        connection.query("select * from sia_db.usuarios where idusuarios = 2", callback);

    }

    this.salvarUsuario  = function(usuario,connection, callback)  
    {
        connection.query('insert into usuarios set ?', usuario, callback)
    }
    return this;
}
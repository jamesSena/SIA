function UsuariosDAO(connection){
    this._connection = connection;

}

UsuariosDAO.prototype.getUsuarios = function(callback)  
{
    this._connection.query("select * from sia_db.usuarios", callback);
}

UsuariosDAO.prototype.getUsuario = function(callback)  
{
    this._connection.query("select * from sia_db.usuarios where idusuarios = 2", callback);
}



UsuariosDAO.prototype.salvarUsuario = function(usuario,callback)  
{    this._connection.query('insert into usuarios set ?', usuario, callback)
}

module.exports = function(){

    return UsuariosDAO;
}
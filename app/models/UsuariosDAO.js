function UsuariosDAO(connection){
    this._connection = connection;

}

UsuariosDAO.prototype.getUsuarios = function(callback)  
{
    this._connection.query("select * from sia_db.usuarios", callback);
}

UsuariosDAO.prototype.getUsuario = function(id_usuario, callback)  
{
    this._connection.query("select * from sia_db.usuarios where idusuarios = " + id_usuario.index, callback);
}



UsuariosDAO.prototype.salvarUsuario = function(usuario,callback)  
{    this._connection.query('insert into usuarios set ?', usuario, callback)
}


UsuariosDAO.prototype.get5UltimosUsuarios = function(callback)  
{   
    this._connection.query("select * from sia_db.usuarios order by idusuarios desc limit 5", callback);
}

module.exports = function(){

    return UsuariosDAO;
}
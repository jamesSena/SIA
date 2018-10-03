module.exports.usuarios =  function(application, req, res){
        var connection = application.dao.mysql();
        var usuariosDAO = new application.app.models.UsuariosDAO(connection);
        usuariosDAO.getUsuarios(function(error, result){
            res.render('usuarios/usuarios', {usuarios: result} );
    });
}
module.exports.usuario=  function(application, req, res){
    var connection = application.dao.mysql();
    var usuariosDAO = new application.app.models.UsuariosDAO(connection);
    usuariosDAO.getUsuario(function(error, result){
        res.render('usuarios/usuarios', {usuarios: result} );
    });
}
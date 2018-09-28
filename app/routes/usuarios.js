module.exports = function(application){
application.get('/usuarios', function(req,res){
        var connection = application.dao.mysql();
        var usuariosDAO = new application.app.models.UsuariosDAO(connection);
        usuariosDAO.getUsuarios(function(error, result){
            res.render('usuarios/usuarios', {usuarios: result} );
     });
    });
} 
module.exports = function(app){
    app.get('/usuario', function(req,res){
        var connection = app.dao.mysql();
        var usuariosDAO = new app.app.models.UsuariosDAO(connection);
        usuariosDAO.getUsuario(function(error, result){
            res.render('usuarios/usuarios', {usuarios: result} );
     });
    });
} 
module.exports = function(app){
    app.get('/usuario', function(req,res){
        var connection = app.dao.mysql();
        var usuariosModel = app.app.models.usuariosModel;
        usuariosModel.getUsuario(connection, function(error, result){
            res.render('usuarios/usuarios', {usuarios: result} );
     });
    });
} 
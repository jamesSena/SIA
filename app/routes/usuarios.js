module.exports = function(application){
application.get('/usuarios', function(req,res){
        var connection = application.dao.mysql();
        var usuariosModel = application.app.models.usuariosModel;
        usuariosModel.getUsuarios(connection, function(error, result){
            res.render('usuarios/usuarios', {usuarios: result} );
     });
    });
} 
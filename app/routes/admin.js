module.exports = function(application){
    application.get('/formulario_inclusao_usuario', function(req,res){
        res.render('admin/form_add_usuario');
    });

    application.post('/usuarios/salvar', function(req,res){
        var usuario = req.body;
        var connection = application.dao.mysql();
        var usuariosModel = application.app.models.usuariosModel;
        usuariosModel.salvarUsuario(usuario,connection, function(error, result){
            res.render('usuarios/usuarios', {usuarios: result} );
     });

    });
}
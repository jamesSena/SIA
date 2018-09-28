module.exports = function(application){
    application.get('/formulario_inclusao_usuario', function(req,res){
        res.render('admin/form_add_usuario');
    });

    application.post('/usuarios/salvar', function(req,res){
        var usuario = req.body;
        var connection = application.dao.mysql();
        var usuariosDAO = new application.app.models.UsuariosDAO(connection);
        usuariosDAO.salvarUsuario(usuario, function(error, result){
            res.redirect('/usuarios');
     });

    });
}
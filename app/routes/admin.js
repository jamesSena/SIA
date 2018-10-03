module.exports = function(application){
    application.get('/formulario_inclusao_usuario', function(req,res){
        application.app.controllers.admin.formulario_inclusao_usuario(application, req, res)
    });

    application.post('/usuarios/salvar', function(req,res){
        application.app.controllers.admin.usuarios_salvar(application, req, res)
    });
}
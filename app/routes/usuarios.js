module.exports = function(application){
    application.get('/usuarios', function(req,res){
        application.app.controllers.usuarios.usuarios(application, req, res)

    });
    application.get('/usuario', function(req,res){
        application.app.controllers.usuarios.usuario(application, req, res)

    });
} 
module.exports.home =  function(application, req, res){
    var connection = application.dao.mysql();
    var usuarioModel = new application.app.models.UsuariosDAO(connection);
    usuarioModel.get5UltimosUsuarios(function(error, result){
        console.log(result);
        res.render('home/index',{usuarios:resultW});
    });
 

}
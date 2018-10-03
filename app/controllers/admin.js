module.exports.formulario_inclusao_usuario = function(application, req, res){
    res.render('admin/form_add_usuario',{validacao:null});
}
module.exports.usuarios_salvar =  function(application, req, res){
    var usuario = req.body;
    req.assert('nome','nome é obrigatório').notEmpty();
    req.assert('senha','senha é obrigatório').notEmpty();
    req.assert('senha','senha tem que ter entre 6 até 12 caracter').len(6,12);
    var erros = req.validationErrors();
    if(erros){
        res.render("admin/form_add_usuario",{validacao:erros})
        return;
    }
    var connection = application.dao.mysql();
    var usuariosDAO = new application.app.models.UsuariosDAO(connection);
    usuariosDAO.salvarUsuario(usuario, function(error, result){
        res.redirect('/usuarios');
 });

}
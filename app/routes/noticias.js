module.exports = function(app){

    app.get('/noticias', function(req,res){
        var mysql = require('../../dao/mysql.js')(app);
        console.log(mysql);
        res.render('noticias/noticias', {noticias: mysql});
    }

    );
    app.post('/teste', function(req,res){
           console.log(req.body.viadinho);
           res.send("ok");
      });
} 
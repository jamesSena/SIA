module.exports = function(app){
    app.get('/noticias', function(req,res){
        var mysql = require('../../dao/mysql.js')(app);

        res.render('noticias/noticias');
    }

    );
    app.post('/teste', function(req,res){
           console.log(req);
           res.send("ok");
      });
}
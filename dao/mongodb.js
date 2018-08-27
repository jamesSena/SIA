
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";
var dbname = "sia_db"

//{ username: "jsenaa"}
var find = function find(query) {
  MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    var dbo = db.db(dbname);
    console.log("Connect MongoDB : sucesso");
  
    dbo.collection("login").find({}, query).toArray(function(err, result) {
      if (err) throw err;
      console.log(result[0].username);
      db.close();
    });
  });
}

module.exports.find = find;
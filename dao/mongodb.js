
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";
var dbname = "sia_db";
var collection = "login"


var find = function find(query) {
  MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    var dbo = db.db(dbname);
    console.log("Connect MongoDB : sucesso");
  
    dbo.collection(collection).find({}, query).toArray(function(err, result) {
      if (err) throw err;
      console.log(result[0].username);
      db.close();
    });
  });
}

// { login: "Company Inc", address: "Highway 37" }
var insert = function insert (query){
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db(dbname);
    dbo.collection(collection).insertOne(query, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  });
}


module.exports.find = find;
module.exports.insert = insert;
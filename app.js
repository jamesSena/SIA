var mongodb = require('./dao/mongodb.js'); //Desde que arquivo.js esteja na mesma pasta
console.log(mongodb.find('{ username: "jsenaa"}'));
var databaseUrl = "mongo_mydb"; // "username:password@example.com/mydb"
var db = require("mongojs")(databaseUrl);
module.exports = db;
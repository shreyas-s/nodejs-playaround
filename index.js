
var databaseUrl = "mongo_mydb"; // "username:password@example.com/mydb"
var collections = ["users", "reports"]
var db = require("mongojs")(databaseUrl);
var collection = db.collection('demo_googl'); 
collection.insert({'eid':13,'ename':'demo 2'},function(err,dat){
    if(err){
        console.log(err);
    }
    console.log(dat);
});
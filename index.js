/*

var databaseUrl = "mongo_mydb"; // "username:password@example.com/mydb"
var db = require("mongojs")(databaseUrl);
*/
const usrCollMethods = require('./db/user_coll_methods');
// var usrCollection = db.collection('users'); 

// usrCollection.insert({'eid':16,'ename':'demo 23'},function(err,dat){
//     if(err){
//         console.log(err);
//     }
//     console.log(dat);
// });

usrCollMethods.insertUser({id: 103,name: 'Ram',age: 56},function(resp){
    console.log(resp);
});

// usrCollection.drop();   // to drop a collection.

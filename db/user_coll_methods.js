const db = require('./db_conn');

var usrCollection = db.collection('users'); 

var insertUser = function(userDetails,cb){  // custom call backs.
    var uId = userDetails.id;
    var uName = userDetails.name;
    var age = userDetails.age;
    usrCollection.insert({'eid': uId,'ename': uName,'age': age});
    cb({'msg': 'user created success'});
}

module.exports = { insertUser };
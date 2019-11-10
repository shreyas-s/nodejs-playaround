const express = require('express');
const app = express();
const routes = require('./routes/userRoutes');
app.use('/',routes.router);
/*

var databaseUrl = "mongo_mydb"; // "username:password@example.com/mydb"
var db = require("mongojs")(databaseUrl);
*/
const usrCollMethods = require('./db/user_coll_methods');

const Emp = require('./db/employeeModel');

//const empl1 = new Emp({eid: 500,ename: 'demo','dept': 'c++'});
//empl1.save().then(data=>{console.log(data)});


// var usrCollection = db.collection('users'); 

// usrCollection.insert({'eid':16,'ename':'demo 23'},function(err,dat){
//     if(err){
//         console.log(err);
//     }
//     console.log(dat);
// });

// usrCollMethods.insertUser({id: 103,name: 'Ram',age: 56},function(resp){
//     console.log(resp);
// });

// usrCollection.drop();   // to drop a collection.

// Below Aggregate function gives dept wise employees salary summations;
Emp.aggregate([{$group: {"_id": "$dept","deptWiseSalary": {$sum: "$esal"}}}]).then(res=>{console.log(res)
    res.forEach(function(v,i){
        console.log(`i val is ${i}`)
        console.log(`${JSON.stringify(v)}`) // if  not done JSON.stringify it will display as [object Object]
        console.log(`DEPT CODE IS : ${v._id}`);
        console.log(`DEPT wise Emp Salary is ${v.deptWiseSalary}`);
    })
});

app.listen(3000,()=>{console.log("connected to server")}); 
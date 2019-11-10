const express = require('express');
const router = express.Router();

// router.route('/init')
//        .get((req,resp)=>{
//            console.log("inside get method");
//            resp.send("inside init route");
//        });

router.get('/addusr/:id/:uname',function(req,resp){
    console.log(req.params.id);
});
             
       module.exports = {router};
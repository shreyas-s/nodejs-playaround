const mongoose = require('./mongoose_db_connection');

const EmpSchema = new mongoose.Schema({
    eid: {
        type: Number,
        required: true,
        unique: true
    },
    ename: {
        type: String,
        required: true        
    },
    dept: {
       type: String
    },
    esal:{
        type: Number
    }
});

const Emp = mongoose.model('employee',EmpSchema);

module.exports = Emp;
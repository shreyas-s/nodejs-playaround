const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mongo_mydb', {useNewUrlParser: true});
mongoose.Promise = global.Promise;
module.exports = mongoose;
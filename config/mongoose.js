const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://dshah8:9ZQpxoYoSNBFuphE@cluster0.vvmkgkj.mongodb.net/test123?retryWrites=true&w=majority');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to mongodb'));

db.once('open',function(){
    console.log('Connected to database :: MongoDB')
})


module.exports = db;
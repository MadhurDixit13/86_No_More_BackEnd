const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.vvmkgkj.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to mongodb'));

db.once('open',function(){
    console.log('Connected to database :: MongoDB')
})


module.exports = db;
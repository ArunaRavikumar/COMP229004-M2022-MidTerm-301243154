// Do not expose your credentials in your code.
// username: aruna password: midterm
//let atlasDB = "mongodb+srv://aruna:midterm@CarsCluster/carstore?retryWrites=true&w=majority";
 let atlasDB ="mongodb+srv://aruna:midterm@carscluster0.juzdiob.mongodb.net/?retryWrites=true&w=majority";
// Database setup
let mongoose = require('mongoose');

module.exports = function(){

    mongoose.connect(atlasDB);
    let mongodb = mongoose.connection;

    mongodb.on('error', console.error.bind(console, 'Connection Error:'));
    mongodb.once('open', ()=>{
        console.log('===> Connected to MongoDB.');
    })

    return mongodb;
}
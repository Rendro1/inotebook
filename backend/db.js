const mongoose = require('mongoose')


const mongoURI = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected To Mongo Successfully");
    })
}
module.exports = connectToMongo;
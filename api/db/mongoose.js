//this will handle the connection logic to the MongoDB database

const mongoose = require('mongoose')
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/TaskManager',{useNewUrlParser:true}).then(()=>{
    console.log("Connected to MongoDB databse");
}).catch((e)=>{
    console.log("Error while attempting to connect to MongoDB")
    console.log(e);
})

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAdnModify', false);
module.exports ={
    mongoose
}


const express = require('express');
const app = express();

//Load in the mongoose models
const {List, Task} = require('./db/models')


// Route Handlers






// List routes



app.get('/lists', (req,res)=>{
    //We want to return an array
})


app.post('/lists', (req,res)=>{
//We want to create a new list and return a new list document to the user (which include id)
})

app.patch('/lists/:id', (req,res)=>{
//we want to update the specified list with the new values specified in the JSON body of the request

})

app.delete('/list/:id', (req,res)=>{
    //we want to delete the specified id
})


app.listen(3000, ()=>{
    console.log("Server is listening on port 3000")
})


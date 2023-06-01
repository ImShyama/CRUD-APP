const mongoose = require("mongoose");

const DB = "mongodb+srv://crudapp:root@cluster0.dkdigw7.mongodb.net/mernstack?retryWrites=true&w=majority"



mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> console.log("connection start")).catch((error)=> console.log(error.message));
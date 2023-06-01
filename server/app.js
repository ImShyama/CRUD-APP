require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("./db/conn")

const port = 8003;

app.listen(port,()=>{
    console.log(`server is start port number ${port}`)
})

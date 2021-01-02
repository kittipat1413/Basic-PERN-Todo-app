const pool = require("./config/db")
const app = require('./config/express');

app.listen(5000,()=>{
    console.log("server has started")
})
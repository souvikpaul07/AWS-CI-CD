const express = require('express');
const app = express();


app.get("/", (req, res)=>{
    res.send("Implementing AWS Continous Integration");
})


app.listen(8080, ()=>{
    console.log("Server is listening to port 8080");
})
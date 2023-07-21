const express = require("express");

const app = express();
app.listen(3000,()=>{
    console.log("Listening");
})

const dogRouter = require("./dogs");
app.use("/dogs",dogRouter);
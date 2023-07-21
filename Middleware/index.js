const express = require("express");
const app = express();

app.listen(3000, () => {
    console.log("Listening on PORT 3000..");
})

app.use((req, res, next) => {
    console.log("First");
    next();
    console.log("First-2");
})

app.use((req,res,next) => {
    console.log("Second");
    next();
})

app.get("/", (req, res) => {
    res.send("HOME PAGE");
    console.log("Home Page");
})
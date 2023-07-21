const express = require("express");
const app = express();

app.listen(3000, () => {
    console.log("Listening on PORT 3000..");
})

app.use((req, res, next) => {
    console.log("First");
    req.name = "CR7";
    next();
    
})

app.get("/", (req, res) => {
    res.send(req.name);
    console.log("Home Page");
})
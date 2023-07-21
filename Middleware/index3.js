const express = require("express");
const app = express();

app.listen(3000, () => {
    console.log("Listening on PORT 3000..");
})

app.use("/",(req, res) => {
    res.send(`<h1>You have send a ${req.method} request...</h1>`);
})


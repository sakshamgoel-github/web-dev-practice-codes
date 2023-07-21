const express = require("express");
const app = express();

app.listen(1234, () => {
    console.log("Listening on PORT 1234..")
})

app.get('/', (req, res) => {
    res.send("<h1>Home Page</h1>");
})

app.get("/search", (req, res) => {
    const query = req.query;
    console.log(query);
    res.send(`You searched : ${query.q} with property of : ${query.color}`);
})

app.use((req, res) => {
    console.log("WE GOT A NEW REQUEST!!")
    res.send('<h1>This is my webpage!</h1>')
})
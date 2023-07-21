const express = require("express");
const app = express();

const AppError = require("./error");

app.listen(3000, () => {
    console.log("Listening");
})

app.get("/", (req, res) => {
    throw new AppError("Oh no...!!", 500);
});

app.get("/error", (req, res) => {
    try {
        chicken.fly();
        console.log("No error");
    } catch (error) {
        throw new AppError(error.message, 401);
    }
});
app.get("/error2", (req, res) => {
    chicken.fly();
});

app.use((err, req, res, next) => {
    console.log("****** MY CUSTOM ERROR *******");
    res.send(`${err.message} error code:${err.status}`);
})
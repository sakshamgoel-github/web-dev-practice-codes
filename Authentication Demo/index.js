const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const ejs = require("ejs");
const bcrypt = require("bcrypt");
const User = require("./models/user");

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://localhost:27017/loginDemo', { useNewUrlParser: true })
    .then(() => {
        console.log("Connection Open...");
    })
    .catch((err) => {
        console.log("ERROR FOUND...!!!");
        console.log(err);
    });

const app = express();
app.listen(3000, () => {
    console.log("Listening");
})

app.set("view engine", ejs);
app.set("views", "views");

app.use(express.urlencoded({ extended: true }))
app.use(session({secret:"thisisnotgood"}));

const requireLogin=(req,res,next)=>{
    if(!req.session.user_id){
        return res.redirect("/login");
    }
    next();
}
app.get("/", (req, res) => {
    res.render("home.ejs");
})

app.post("/user", async (req, res) => {
    const { password, username } = req.body.user;
    const hash = await bcrypt.hash(password, 12);
    const userMongo = new User({
        username,
        password: hash
    });
    await userMongo.save();
    req.session.user_id = userMongo._id;
    res.redirect("/secret");
})

app.get("/login", (req, res) => {
    res.render("login.ejs");
})

app.post("/login", async (req, res) => {
    const { username, password } = req.body.user;
    const userMongo = await User.findOne({ username });
    if (!userMongo) {
        res.redirect("/login");
    }
    else {
        const result = await bcrypt.compare(password, userMongo.password);
        if (result) {
            req.session.user_id = userMongo._id;
            res.redirect("/secret");
        } else res.redirect("/login");
    }

})

app.post("/logout",(req,res)=>{
    req.session.user_id = null;
    res.redirect("/login");
})

app.get("/secret",requireLogin, (req, res) => {
    res.render("secret.ejs");
})
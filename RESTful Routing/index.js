const express = require("express");
const app = express();
const path = require('path');
const { v4: uuid } = require("uuid");
const methodOverride = require("method-override");
uuid();

app.listen(3000, () => {
    console.log("Listening on PORT 3000...");
})

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"))

let comments = [
    {
        id: uuid(),
        username: "Todd",
        comment: "lol that is so funny"
    },
    {
        id: uuid(),
        username: "Skyler",
        comment: "I like to go birdwatching with my dog"
    },
    {
        id: uuid(),
        username: "Sk8erBoi",
        comment: "Plz delete your account, Todd"
    },
    {
        id: uuid(),
        username: "onlysayswoof",
        comment: "woof woof woof"
    }
]

app.get("/", (req, res) => {
    res.render("home.ejs");
})

app.get("/comments", (req, res) => {
    res.render("comments/index.ejs", { comments });
})

app.get("/comments/new", (req, res) => {
    res.render("comments/new.ejs");
})

app.post("/comments", (req, res) => {
    const newUsername = req.body.username;
    const newComment = req.body.comment;
    const comment = {
        id: uuid(),
        username: newUsername,
        comment: newComment
    };
    comments.push(comment);
    res.redirect("/comments");
})

app.get("/comments/:id", (req, res) => {
    const { id } = req.params;
    const c = comments.find(c => c.id === id);
    res.render("comments/show", { c });
})

app.get("/comments/edit/:id", (req, res) => {
    const { id } = req.params;
    const c = comments.find(c => c.id === id);
    res.render("comments/edit.ejs", { c });
})

app.patch("/comments/:id", (req, res) => {
    const { id } = req.params;
    const c = comments.find(c => c.id === id);
    c.comment = req.body.comment;
    res.redirect(`/comments/${id}`);
})

app.delete("/comments/delete/:id",(req,res)=>{
    const {id} = req.params;
    comments = comments.filter(c => c.id!==id);
    res.redirect("/comments");
})
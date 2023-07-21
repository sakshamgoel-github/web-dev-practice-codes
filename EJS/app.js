const express = require("express");
app = express();
const path = require("path");

app.listen(1234, ()=>{
    console.log("Listening on PORT 1234...");
})
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.get("/",(req,res)=>{
    res.render("home");
})

app.get("/cats",(req,res)=>{
    const cats = [
        "Blue","Rocket","Monty","Stephanie","Winston"
    ];
    res.render("cats",{cats});
})

app.use((req,res)=>{
    res.send("No path found");
}
)
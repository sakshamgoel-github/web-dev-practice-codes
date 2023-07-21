const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
app.use(cookieParser("mysecret"));

app.listen(3000,()=>{
    console.log("Listening");
});

app.get("/",(req,res)=>{
    res.cookie("name","CR7",{signed:true});
    res.send("Ok");
})

app.get("/cookie",(req,res)=>{
    console.log(req.signedCookies);
    res.send("dsov");
})

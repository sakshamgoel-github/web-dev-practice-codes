const express = require("express");
const app = express();

app.listen(3000,()=>{
    console.log("Listening on PORT 3000");
});

const session = require("express-session");
sessionOptions = {secret:"fknfnbf", resave:false, saveUninitialized:false};
app.use(session(sessionOptions));

app.get("/count",(req,res)=>{
    if(req.session.count)
    req.session.count += 1; 
    else{
        req.session.count = 1;
    }
    res.send(`Count = ${req.session.count}`);
})
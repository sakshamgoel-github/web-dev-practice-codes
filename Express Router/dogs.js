const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("All Dogs");
})

router.post("/dogs",(req,res)=>{
    res.send("Edit");
})

module.exports = router;
const mongoose = require('mongoose');
mongoose.set('strictQuery',false);
mongoose.connect('mongodb://localhost:27017/movieApp',{useNewUrlParser:true})
    .then(() => {
        console.log("Connection Open...");
    })
    .catch((err)=>{
        console.log("ERROR FOUND...!!!");
        console.log(err);
    });

const movieSchema = new mongoose.Schema({
    title:String,
    year:Number,
    score:Number,
    rating:String
});

const Movie = mongoose.model("Movie",movieSchema);

const movie1 = new Movie({
    title:"Deadpool",
    year:2017,
    score:8.8,
    rating:"Above 16"
});

console.log(movie1);
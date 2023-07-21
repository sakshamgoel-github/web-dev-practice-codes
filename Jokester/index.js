const jokes = require("give-me-a-joke");
jokes.getRandomDadJoke(j => {
    console.log(j);
})
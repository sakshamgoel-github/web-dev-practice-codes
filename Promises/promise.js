function fakeRequest(url) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            let rand = Math.random();
            if (rand > 0.5) {
                console.log(`Request to ${url} has been successfull...`);
                resolve("CR7 is goat");
            }
            else {
                console.log(`Request to ${url} is declined...`);
                reject("Aw Snap!");
            }
        }, 2000);
    }
    );
}

fakeRequest("www.football.com")
    .then((data) => {
        console.log("Your data is :");
        console.log(`${data}`);
    })
    .catch((err) => {
        console.log(err);
    });



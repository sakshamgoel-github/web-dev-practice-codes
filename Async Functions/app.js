const fakeRequest = async (url) => {
    let rand = Math.random();
    if (rand > 0.5) {
        console.log(`Request to ${url} has been successfull...`);
        return "CR7 is g.o.a.t";
    }
    else {
        console.log(`Request to ${url} is declined...`)
        throw "Aw Snap!";
    }

}

// To use setTimeOut you may use older way of writing functions
const fakeRequest2 = (url) => { 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let rand = Math.random();
            if (rand > 0.5) {
                console.log(`Request to ${url} has been successfull...`);
                resolve("CR7 is g.o.a.t");
            }
            else {
                console.log(`Request to ${url} is declined...`)
                reject("Aw Snap!");
            }
        }, 2000);
    })


}

//The benefit of async await is that you get rid of .then() and .catch()
async function func() {
    try {
        const data = await fakeRequest2("www.goal.com");
        console.log(data);
    }
    catch (e) {
        console.log(e);
    }
}

func();
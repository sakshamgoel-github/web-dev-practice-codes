const changecolour = (colour) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = colour;
            resolve();
        }, 1000);
    })
}

async function nationalFlag() {
    await changecolour("orange");
    await changecolour("white");
    await changecolour("green");
}

nationalFlag();
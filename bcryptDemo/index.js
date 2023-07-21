const bcrypt = require("bcrypt");
// const hashPassword = async () => {
//     for (let i = 1; i < 14; ++i) {
//         const salt = await bcrypt.genSalt(i);
//         const pass = await bcrypt.hash("saksham", salt);
//         console.log(pass);
//     }

// }
// hashPassword();

const login = async (password) => {
    const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash("saksham", salt);
    const res = await bcrypt.compare(password, hash);
    if (res) {
        console.log("Yes");
    }
    else console.log("No");
}


login("saksham");
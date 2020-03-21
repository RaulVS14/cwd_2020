let database = [
    {
        username: "alex",
        password: "supermassivepassword"
    },
    {
        username: "smithy",
        password: "jackhittheroad"
    },
    {
        username: "bobby",
        password: "bobtheblob"
    }
];

let newsFeed = [
    {
        username: "Bobby",
        timeline: "Just pure awesome"
    },
    {
        username: "Smithy",
        timeline: "Shake that, boogeyman"
    }
];


function requestVerification() {
    let userNamePrompt = prompt("what's your username");
    let passwordPrompt = prompt("what's your password");
    return [userNamePrompt, passwordPrompt]
}

function isUserValid(username, password) {
    for (let el of database) {
        if (username === el.username && password === el.password) {
            return true;
        }
    }
    return false;
}

function signIn(user, pass) {
    if (isUserValid(user, pass)) {
        console.log(newsFeed)
    } else {
        alert("wrong username and password");
        signIn(...requestVerification());
    }
}

signIn(...requestVerification());
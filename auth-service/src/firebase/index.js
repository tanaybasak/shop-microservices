const firebase = require("firebase-admin");
const credentials = require("./cred.json");
firebase.initializeApp({
    credential: firebase.credential.cert(credentials),
    databaseURL: "https://react-shop-8b22e-default-rtdb.firebaseio.com",
});

module.exports = firebase;

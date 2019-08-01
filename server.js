// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/database");

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA9m9P-5JkTne-HXgEFe3K0cw29BW04X3g",
    authDomain: "fir-2998c.firebaseapp.com",
    databaseURL: "https://fir-2998c.firebaseio.com",
    projectId: "fir-2998c",
    storageBucket: "",
    messagingSenderId: "1082407435121",
    appId: "1:1082407435121:web:04bbd6272a88108c"
};

console.log("Incializando aplicativo...")

// Initialize Firebase
firebase.initializeApp(firebaseConfig)


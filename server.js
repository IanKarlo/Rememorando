// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/database");
require("firebase/firestore");

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

var firestore = firebase.firestore()
var auth = firebase.auth()

function criarUsuario(){
// Tests signIn
    auth.createUserWithEmailAndPassword(
        "gabrielvanderlei10@hotmail.com",
        "123456"
    ).then(() => {console.log("Usuário criado com sucesso.")})
    .catch((e) => {console.log("Erro ao criar usuário: "+ e)})
}

function logarUsuario(fn){
    // Tests signIn
    auth.signInWithEmailAndPassword(
        "gabrielvanderlei10@hotmail.com",
        "123456"
    ).then(() => {console.log("Usuário logado com sucesso.");fn()})
    .catch((e) => {console.log("Erro ao logar usuário: "+ e)})
}

function testarAuth(){
    criarUsuario()
    logarUsuario()
}

//testarAuth();

var objetos = firebase.firestore().collection("objetos")
var remedios = firebase.firestore().collection("remedios")
var rotinas = firebase.firestore().collection("rotinas")

logarUsuario(() => {
    console.log("Bem vindo ao Routine, um aplicativo desenvolvido para auxiliar as pessoas a não esquecerem suas rotinas, compartilhando-as com que mais importa.")

    criarRemedio(
        auth.currentUser.uid,
        "Lápis",
        "Um simples lapis",
        "Em baixo do travesseiro",
        (id) => {
            console.log("Adicionado ("+id+")")

            editarRemédio(id,
                auth.currentUser.uid,
                "Talvez um lapis",
                "Em algum local",
                "Talvez",
                () => {console.log("Alterado")}
            )
        }
    )

    listarRemedios()
});


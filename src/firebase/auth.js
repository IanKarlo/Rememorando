import {auth} from '../firebase/config.js'

export function criarUsuario(email, senha, fn){
    auth.createUserWithEmailAndPassword(
        email,
        senha
    ).then(() => {console.log("Usuário criado com sucesso."); fn()})
    .catch((e) => {console.log("Erro ao criar usuário: "+ e)})
}

export function logarUsuario(email, senha, fn){
    // Tests signIn
    auth.signInWithEmailAndPassword(
        email,
        senha
    ).then(() => {console.log("Usuário logado com sucesso.");fn()})
    .catch((e) => {alert("Erro ao logar usuário: "+ e)})
}

export function onLogin(el, fn){
    auth.onAuthStateChanged((user) => {
        if(user) fn();
        else { 
            alert("Usuário deslogado")
            el.history.push("/")
        }
    })
}

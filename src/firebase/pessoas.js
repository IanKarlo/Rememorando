import {firestore, auth} from '../firebase/config.js'

var pessoas = firestore.collection("pessoas")

export function criarPessoa(usuarioConectado, nomeDoObjeto, desc, local, ok){
    console.log("Adicionando objeto...")

    pessoas.add({
        "owner": usuarioConectado,
        "nome": nomeDoObjeto,
        "desc": desc,
        "local": local
    }).then((doc) => {ok(doc.id)})
}

export function editarPessoa(id, usuarioConectado, nomeDoObjeto, desc, local, ok){
    console.log("Modificando objeto ("+id+")...")

    pessoas.doc(id).set({
        "owner": usuarioConectado,
        "nome": nomeDoObjeto,
        "desc": desc,
        "local": local
    }).then(() => {console.log("Documento alterado.")})
}

export function removerPessoa(id, fn){
    console.log("Removendo objeto("+id+") ...")
    pessoas.doc(id).delete().then(() => {console.log("Removido."); fn()})
}

export function listarPessoas(initfn, fn){
    console.log("Listando objetos...")
    initfn()
    
    var pessoasDoUsuario = pessoas.where("owner", "==", auth.currentUser.uid)
    pessoasDoUsuario.get().then(function(snapshot){
        snapshot.forEach((doc) => {
            var dados = doc.data()
            fn(dados, doc.id)
        })
    })
}

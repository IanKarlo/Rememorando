import {firestore, auth} from '../firebase/config.js'

var objetos = firestore.collection("objetos")

export function criarObjeto(usuarioConectado, nomeDoObjeto, desc, local, ok){
    console.log("Adicionando objeto...")

    objetos.add({
        "owner": usuarioConectado,
        "nome": nomeDoObjeto,
        "desc": desc,
        "local": local
    }).then((doc) => {ok(doc.id)})
}

export function editarObjeto(id, usuarioConectado, nomeDoObjeto, desc, local, ok){
    console.log("Modificando objeto ("+id+")...")

    objetos.doc(id).set({
        "owner": usuarioConectado,
        "nome": nomeDoObjeto,
        "desc": desc,
        "local": local
    }).then(() => {console.log("Documento alterado.")})
}

export function removerObjeto(id, fn){
    console.log("Removendo objeto("+id+") ...")
    objetos.doc(id).delete().then(() => {console.log("Removido."); fn()})
}

export function listarObjetos(initfn, fn){
    console.log("Listando objetos...")
    initfn()
    
    var objetosDoUsuario = objetos.where("owner", "==", auth.currentUser.uid)
    objetosDoUsuario.get().then(function(snapshot){
        snapshot.forEach((doc) => {
            var dados = doc.data()
            fn(dados, doc.id)
        })
    })
}

import {firestore, auth} from '../firebase/config.js'

var remedios = firestore.collection("remedios")

export function listarRemedios(initfn, fn){
    console.log("Listando remedios...")
    initfn()

    var remediosDoUsuario = remedios.where("owner", "==", auth.currentUser.uid)
    remediosDoUsuario.get().then(function(snapshot){
        snapshot.forEach((doc) => {
            var dados = doc.data()
            fn(dados, doc.id)
        })
    })
}

export function editarRemedio(id, usuarioConectado, nomeDoRemedio, desc, local, ok){
    console.log("Modificando objeto ("+id+")...")

    remedios.doc(id).set({
        "owner": usuarioConectado,
        "nome": nomeDoRemedio,
        "desc": desc,
        "local": local
    }).then(() => {console.log("Remédio alterado.")})
}

export function removerRemedio(id, fn){
    console.log("Removendo remédio("+id+") ...")
    remedios.doc(id).delete().then(() => {console.log("Removido."); fn()})
}

export function criarRemedio(usuarioConectado, nomeDoRemedio, desc, local, ok){
    console.log("Adicionando remedio...")

    remedios.add({
        "owner": usuarioConectado,
        "nome": nomeDoRemedio,
        "desc": desc,
        "local": local
    }).then((doc) => {ok(doc.id)})
}
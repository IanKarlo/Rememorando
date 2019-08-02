import {firestore, auth} from '../firebase/config.js'

var rotinas = firestore.collection("rotinas")

export function listarRotinas(initfn, fn){
    console.log("Listando remedios...")
    initfn()

    var rotinasDoUsuario = rotinas.where("owner", "==", auth.currentUser.uid)
    rotinasDoUsuario.get().then(function(snapshot){
        snapshot.forEach((doc) => {
            var dados = doc.data()
            console.log(dados.nome + " - " + dados.desc)
            fn(dados, doc.id)
        })
    })
}


export function editarRotina(id, usuarioConectado, nomeDaRotina, desc, local, ok){
    console.log("Modificando objeto ("+id+")...")

    rotinas.doc(id).set({
        "owner": usuarioConectado,
        "nome": nomeDaRotina,
        "desc": desc,
        "local": local
    }).then(() => {console.log("Remédio alterado.")})
}


export function removerRotina(id, fn){
    console.log("Removendo remédio("+id+") ...")
    rotinas.doc(id).delete().then(() => {console.log("Removido."); fn()})
}


export function criarRotina(usuarioConectado, nomeDaRotina, desc, local, ok){
    console.log("Adicionando remedio...")

    rotinas.add({
        "owner": usuarioConectado,
        "nome": nomeDaRotina,
        "desc": desc,
        "local": local
    }).then((doc) => {ok(doc.id)})
}
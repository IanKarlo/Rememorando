import firestore from 'config.js'

var objetos = firestore.collection("objetos")

function criarObjeto(usuarioConectado, nomeDoObjeto, desc, local, ok){
    console.log("Adicionando objeto...")

    remedios.add({
        "owner": usuarioConectado,
        "nome": nomeDoObjeto,
        "desc": desc,
        "local": local
    }).then((doc) => {ok(doc.id)})
}

function editarObjeto(id, usuarioConectado, nomeDoObjeto, desc, local, ok){
    console.log("Modificando objeto ("+id+")...")

    remedios.doc(id).set({
        "owner": usuarioConectado,
        "nome": nomeDoObjeto,
        "desc": desc,
        "local": local
    }).then(() => {console.log("Documento alterado.")})
}

function removerObjeto(id){
    console.log("Removendo objeto("+id+") ...")
    remedios.doc(id).delete().then(() => {console.log("Removido.")})
}

function listarObjetos(){
    console.log("Listando objetos...")

    var remediosDoUsuario = remedios.where("owner", "==", auth.currentUser.uid)
    remediosDoUsuario.get().then(function(snapshot){
        snapshot.forEach((doc) => {
            var dados = doc.data()
            console.log(dados.nome + " - " + dados.desc)
        })
    })
}

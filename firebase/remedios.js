import firestore from 'config.js'

var remedios = firestore.collection("remedios")

function listarRemedios(){
    console.log("Listando remedios...")

    var remediosDoUsuario = remedios.where("owner", "==", auth.currentUser.uid)
    remediosDoUsuario.get().then(function(snapshot){
        snapshot.forEach((doc) => {
            var dados = doc.data()
            console.log(dados.nome + " - " + dados.desc)
        })
    })
}

function editarRemedio(id, usuarioConectado, nomeDoRemedio, desc, local, ok){
    console.log("Modificando objeto ("+id+")...")

    remedios.doc(id).set({
        "owner": usuarioConectado,
        "nome": nomeDoRemedio,
        "desc": desc,
        "local": local
    }).then(() => {console.log("Remédio alterado.")})
}

function removerRemedio(id){
    console.log("Removendo remédio("+id+") ...")
    remedios.doc(id).delete().then(() => {console.log("Removido.")})
}

function criarRemedio(usuarioConectado, nomeDoRemedio, desc, local, ok){
    console.log("Adicionando remedio...")

    remedios.add({
        "owner": usuarioConectado,
        "nome": nomeDoRemedio,
        "desc": desc,
        "local": local
    }).then((doc) => {ok(doc.id)})
}
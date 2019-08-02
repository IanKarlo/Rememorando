import firestore from 'config.js'

var rotinas = firestore.collection("rotinas")

function listarRotinas(){
    console.log("Listando remedios...")

    var rotinasDoUsuario = rotinas.where("owner", "==", auth.currentUser.uid)
    rotinasDoUsuario.get().then(function(snapshot){
        snapshot.forEach((doc) => {
            var dados = doc.data()
            console.log(dados.nome + " - " + dados.desc)
        })
    })
}

function editarRotina(id, usuarioConectado, nomeDaRotina, desc, local, ok){
    console.log("Modificando objeto ("+id+")...")

    rotinas.doc(id).set({
        "owner": usuarioConectado,
        "nome": nomeDaRotina,
        "desc": desc,
        "local": local
    }).then(() => {console.log("Remédio alterado.")})
}

function remvoerRotina(id){
    console.log("Removendo remédio("+id+") ...")
    rotinas.doc(id).delete().then(() => {console.log("Removido.")})
}

function criarRotina(usuarioConectado, nomeDaRotina, desc, local, ok){
    console.log("Adicionando remedio...")

    rotinas.add({
        "owner": usuarioConectado,
        "nome": nomeDaRotina,
        "desc": desc,
        "local": local
    }).then((doc) => {ok(doc.id)})
}
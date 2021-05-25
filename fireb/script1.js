// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBVomzWxB-xRliYBEmY1b32WLhd0o6Iee8",
    authDomain: "booming-rush-157505.firebaseapp.com",
    databaseURL: "https://booming-rush-157505.firebaseio.com",
    projectId: "booming-rush-157505",
    storageBucket: "booming-rush-157505.appspot.com",
    messagingSenderId: "841174010887",
    appId: "1:841174010887:web:2a93a7803f53961a756ea2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const Aliens = "Aliens"

 let db = firebase.firestore()


 //Adicionar um documento sem setar o nome do documento
 // ocacionando a geração de um ID aleatório
function setDocumentWithRandomID(){ db.collection(Aliens).add({

  annunaki:{
    ataque:900,
    cor:"marrom",
    defesa:250}

}).then((doc)=>{

console.log("Alien adicionado", doc)

}).catch(err =>{

console.log(err)

})

}

// Adicionar um documento setando o nome do documento
//Não gerando um ID aleatório e sim o pŕoprio nome do documento.

function SetDocumentWithIDName(){ db.collection(Aliens).doc("Grey").set(
  
  {
    raca: "Grey",
    ataque:600,
    defesa:500
  }


).then(()=>{

console.log("Grey adicionado")

}).catch(err =>{

console.log(err)

})

}

//Atualiza o documento

function UpdateID() { db.collection(Aliens).doc("Grey").update(
  
  {
    raca: "Grey",
    ataque:600,
    defesa:500
  }


).then(()=>{

console.log("Grey adicionado")

}).catch(err =>{

console.log(err)

})

}
//Atualiza o documento mas não altera o seu conteúdo, ou  seja, adiciona
//o conteúdo e atualiza, mas retorna um array devido ao arrayUnion
//Para em vez de fazer o update do ''Array'' você quiser remover,
//basta apenas em vez de escrever arratUnion, vc escreve ''arrayRemove''
db.collection(Aliens).doc("Grey").update(
  
  {
    
    defesa:firebase.firestore.FieldValue.arrayUnion(800)
  }


).then(()=>{

console.log("Grey adicionado")

}).catch(err =>{

console.log(err)

})

//Se quiser atualizar incrementando um valor

function incrementValueInField(){ db.collection(Aliens).doc("Grey").update(
  
  {
    
    ataque:firebase.firestore.FieldValue.increment(60)
  }


).then(()=>{

console.log("Grey adicionado")

}).catch(err =>{

console.log(err)

})

}
//Código pra apagar um campo do documento, neste caso,
//está apagando o campo ''ataque''.

function deleteField(){ db.collection(Aliens).doc("Grey").update(
  
  {
    
    ataque:firebase.firestore.FieldValue.delete()
  }


).then(()=>{

console.log("Ataque do Grey deletado")

}).catch(err =>{

console.log(err)

})

}
//Código para deletar todo o documento, neste caso,
// pagando o documento ''Grey''.

function DeleteIDName(){db.collection(Aliens).doc("Grey").update().then(()=>{

console.log("Doumento apagado")

}).catch(err =>{

console.log(err)

})

}
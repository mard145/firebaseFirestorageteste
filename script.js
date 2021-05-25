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

 let db = firebase.firestore()

  //Ler todos os dados de uma coleção

/*  db.collection("Aliens").get()
                        .then((snapshot)=>{

       snapshot.forEach((doc)=>{

        alien = doc.data()
       console.log(alien)
        

    })

  })
*/
  //Onsnapshot para acompanhar em tempo real modificações
  //que acontece nos documentos;
  // Para usar o Onsnapshot em um documento específico
  //basta tirar o get() e o then() e colocar ''.onSnapshot((snapshot)=>){
  //códigos }

  db.collection("Aliens").onSnapshot((snapshot)=>{
 

snapshot.forEach((doc)=>{

let alien = doc.data()
console.log(alien)


})

})

//Pegar valor do objeto por referência, por exemplo, estou pegando referencias especificas
// por ID '' TECXQBHUYtwhlFCjNWht ''


  let docRef = db.collection("Aliens").doc('Life')

  docRef.get().then((doc)=>{
    let hp = document.getElementById('life')
    let life = doc.data().Life

    
    hp.innerHTML = life

    console.log(life)
   
})


let Ref = db.collection("Aliens").doc('pleidiano')

Ref.get().then((doc)=>{
  let card1 = document.getElementsByClassName('card')[0]
  let ataque1 = doc.data().ataque

  
  card1.innerHTML = ataque1

  console.log(ataque1)
 
})


let Refe = db.collection("Aliens").doc('reptiliano')

Refe.get().then((doc)=>{
  let card2 = document.getElementsByClassName('card')[1]
  let ataque2 = doc.data().ataque

  
  card2.textContent = ataque2

  console.log(ataque2)
 
})









    
     
    

  





  // Selecionar alvos especificos do objeto

  /*

  db.collection("Aliens").where("ataque", ">=", 300).get()
  .then((snapshot)=>{

    snapshot.forEach((doc)=>{

        Alien = doc.data()
        console.log(Alien.ataque, Alien.defesa)

    })


  })
  */
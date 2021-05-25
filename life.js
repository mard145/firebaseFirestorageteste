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

    
  
     docRef = db.collection("Aliens").doc('Life')
    
    docRef.get().then((doc)=>{
    
      let lifeHTML = document.getElementById('life')  
     
      lifeHTML.innerHTML = doc.data()
     
    console.log(lifeHTML)
    
    }) 
    
    
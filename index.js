const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");
require("express");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: '### FIREBASE API KEY ###',
    authDomain: '### FIREBASE AUTH DOMAIN ###',
    projectId: '### CLOUD FIRESTORE PROJECT ID ###'
  });
  
  var db = firebase.firestore();
  var app = express();
  var path = require('path');

  app.get('/', function(req, res){
    resi.sendFile(path.join(__dirname +  '/index.html'))
  });

function post(postText){
    db.collection("posts").add({
    first: "Ada",
    last: "Lovelace",
    born: 1815
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});
}

app.listen(3000, function() {
    console.log('Listening on port 3000!')
});
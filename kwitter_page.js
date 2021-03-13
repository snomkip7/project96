user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
document.getElementById("welcome").innerHTML = "Welcome " + user_name + "!";
//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyAELccqOw4WtwlScED3Ci9hoqZgZge2CcA",
      authDomain: "bwitter-209ea.firebaseapp.com",
      databaseURL: "https://bwitter-209ea-default-rtdb.firebaseio.com",
      projectId: "bwitter-209ea",
      storageBucket: "bwitter-209ea.appspot.com",
      messagingSenderId: "514440680719",
      appId: "1:514440680719:web:195a10018bc96216799a7a"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

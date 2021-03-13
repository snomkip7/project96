user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

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
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 //Start code
 console.log("Room Name - " + Room_names);
 row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' > #"+ Room_names +"</div><hr>"
 document.getElementById("output").innerHTML += row;
 //End code
 });});}
getData();

function addRoom(){
 room_name = document.getElementById("room_name").value;

 firebase.database().ref("/").child(room_name).update({
       purpose : "adding room name"
 });

 localStorage.setItem("room_name", room_name);

 window.location = "kwitter_page.html"
}
function redirectToRoomName(name){
 console.log(name);
 localStorage.setItem("room_name", name);
 window.location = "kwitter_page.html";
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}

 var firebaseConfig = {
    apiKey: "AIzaSyDMcaFCr7AHY6abqOA_GIhp7HS8eOSMXhE",
    authDomain: "kwitter-cefb1.firebaseapp.com",
    databaseURL: "https://kwitter-cefb1-default-rtdb.firebaseio.com",
    projectId: "kwitter-cefb1",
    storageBucket: "kwitter-cefb1.appspot.com",
    messagingSenderId: "268780299023",
    appId: "1:268780299023:web:9229bd08ab1c58889d147a",
    measurementId: "G-KFXX2Y3H5W"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

function addUser(){
    user_name = document.getElementById("user_name").value;
    
    localStorage.setItem("user_name", user_name);

    window.location = "kwitter_room.html";
}
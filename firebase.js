var app_fireBase = {};
(function(){
   
 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDHmQwVpNqWbcSMT72GQFfiL-83hXwvKek",
    authDomain: "weblogin-622c3.firebaseapp.com",
    databaseURL: "https://weblogin-622c3.firebaseio.com",
    projectId: "weblogin-622c3",
    storageBucket: "weblogin-622c3.appspot.com",
    messagingSenderId: "494592228407"
  };
  firebase.initializeApp(config);

app_fireBase = firebase;
})()
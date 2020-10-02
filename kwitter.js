var firebaseConfig = {
  apiKey: "AIzaSyC65LqEa4UvY_lVdgCveA9o520mbnzVNRs",
  authDomain: "kwitter-60d58.firebaseapp.com",
  databaseURL: "https://kwitter-60d58.firebaseio.com",
  projectId: "kwitter-60d58",
  storageBucket: "kwitter-60d58.appspot.com",
  messagingSenderId: "998646493151",
  appId: "1:998646493151:web:4277d568e00e8d29aede6a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);







function addUser()
{
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name" , user_name);
    window.location = "kwitter_room.html";
}
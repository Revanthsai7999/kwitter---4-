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
    
    
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    
    function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
    }
    
    function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
          childKey = childSnapshot.key;
          Room_names = childKey;
          console.log("Room Name - " + Room_names);
          row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
          document.getElementById("output").innerHTML += row;
        });
      });
    }
    
    getData();
    
    function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
    }
    
    
    
    function logout()
    {
          localStorage.removeItem("user_name");
          localStorage.removeItem("room_name");
          window.location="index.html";
    }

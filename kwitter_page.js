
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
room_name = localStorage.getItem("room_name");


function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });
      document.getElementById("msg").value = "";
}








function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code

                        //End code
                  }
            });
      });
}
getData();





function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
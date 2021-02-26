firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.

      document.getElementById("user_div").style.display = "initial";
      document.getElementById("login_div").style.display = "none";
    } else {
      // No user is signed in.

      document.getElementById("user_div").style.display = "none";
      document.getElementById("login_div").style.display = "initial";
    }
  });


function Login() {
    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;

    window.alert(userEmail + " " + userPass);
}
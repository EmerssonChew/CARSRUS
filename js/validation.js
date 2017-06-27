function validate() {
  var email = document.getElementById('email').value;
  var msg = document.getElementById('msg');
  msg.className = "alert alert-success";
  msg.innerHTML = email + ' has successfully registered / logged in.';
}

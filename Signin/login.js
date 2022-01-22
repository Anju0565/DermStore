
document.querySelector("#submit").addEventListener("submit", signIN);
var regdUsers = JSON.parse(localStorage.getItem("LogginDetails"));
console.log(regdUsers);
function signIN(event) { 
  event.preventDefault()
  var email = document.querySelector("#email").value;
  var password = document.querySelector("#password").value;
  // if(email =="admin" && password =="admin"){
  //   window.location.href = "admin.html"
  // }
    for (var i = 0; i < regdUsers.length; i++) {
        
      if (regdUsers[i].email_id == email && regdUsers[i].password_log !== password) {
        alert("Incorrect Password, Please Try Again");

      }
      else if(regdUsers[i].email_id!== email){
          alert("No User Exist! Please Create an Account")
      }
      else if(regdUsers[i].email_id == email && regdUsers[i].password_log == password) {
        alert("Login Successful");
        window.location.href = "index.html";
      }
      
    }
}
document.querySelector("#new_customer").addEventListener("click",newAccount);
function newAccount(event){
  event.preventDefault();
  window.location.href = "signup.html";
}
document.querySelector("#logo").addEventListener("click",logo);
function logo(event){
  event.preventDefault();
  window.location.href = "index.html"
}
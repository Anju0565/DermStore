document.querySelector("#form").addEventListener("submit",signIn);
    var userdata= JSON.parse(localStorage.getItem("LogginDetails",userdata))||[]
    function signIn(event){
        event.preventDefault();
        var full_name = document.querySelector("#full_name").value;
        var email_id = document.querySelector("#email").value;
        var confirm_email = document.querySelector("#confirm_email").value;
        var password = document.querySelector("#password").value;
        var confirm_password = document.querySelector("#confirm_password").value;
        var phn = document.querySelector("#phone").value;
            var data = {
                full_name: full_name,
                email_id: email_id,
                confirm_email: confirm_email,
                password_log: password,
                confirm_password: confirm_password,
                phone: phn
            };
        if(email_id==confirm_email && password == confirm_password){
            userdata.push(data);
            localStorage.setItem("LogginDetails", JSON.stringify(userdata));
            alert("Account Created Successfully")
            window.location.href = "index.html"
        }
        else if(email_id != confirm_email){
            alert("Email Doesn't Match");
        }
        else if(password == confirm_password){
            alert("Password Doesn't Match");
        }
    }
    
    document.querySelector("#fb").addEventListener("click", function () {
    window.location.href = "https://www.facebook.com/";
  });
  document.querySelector("#google").addEventListener("click", function () {
    window.location.href = "https://www.gmail.com/";
  });
  document.querySelector("#logo").addEventListener("click",logo);
function logo(event){
  event.preventDefault();
  window.location.href = "index.html"
}
var wishArr =[];
  var product = JSON.parse(localStorage.getItem("cartArr"))||[];
  display(product);
  
  function display(product){
    product.map(function(elem,index){
    var div = document.createElement("div");
    var image = document.createElement("img");
    image.setAttribute("src",elem.img);
    var wish = document.createElement("button");
    wish.innerHTML = '<i class="fas fa-trash-alt"></i>    Remove';
    wish.addEventListener("click", function () {
      console.log(elem);
      deleteRow(index);
      window.location.reload();
    });
    var name = document.createElement("h4");
    name.textContent = elem.name;
    var price = document.createElement("h5");
    price.textContent = elem.price;
    var quan = document.createElement("h5");
    quan.textContent = "1";
    
    div.append(image,name,quan,price,wish);
    document.querySelector("#cart_item").append(div);
    })
    if(product.length === 0){
        document.querySelector("#cart_item >h3").textContent = "There is no item in cart";
    }
    else{
        document.querySelector("#cart_item >h3").textContent = product.length +" Items in your cart";
    }
    
  }
  
function deleteRow(index){
    product.splice(index,1)
        localStorage.setItem("cartArr",JSON.stringify(product))
        display(product)
}
//   localStorage.setItem("cartArr",JSON.stringify(product))
document.querySelector("#log").addEventListener("click",login);
function login(event){
  event.preventDefault();
  window.location.href = "login.html"
}
document.querySelector("#register").addEventListener("click",register);
function register(event){
  event.preventDefault();
  window.location.href = "signup.html"
}
document.querySelector("#logo").addEventListener("click",logo);
function logo(event){
  event.preventDefault();
  window.location.href = "index.html"
}
document.querySelector("#cart").addEventListener("click",cart);
function cart(event){
  event.preventDefault();
  window.location.href = "cart.html"
}
document.querySelector("#myFav").addEventListener("click",wish);
function wish(event){
  event.preventDefault();
  window.location.href = "wishlist.html"
}
document.querySelector("#feature").addEventListener("click",prod);
function prod(event){
  event.preventDefault();
  window.location.href = "prod.html"
}
document.querySelector("#offer").addEventListener("click",prod);
document.querySelector(".mySlides").addEventListener("click",prod);
document.querySelector(".image").addEventListener("click",prod);

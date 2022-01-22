var cartArr =[];
var wishArr =[];
var product = JSON.parse(localStorage.getItem("prodData"))||[];
display(product);

function display(product){
  product.map(function(elem){
  var div = document.createElement("div");
  var img_div = document.createElement("div");
  var image = document.createElement("img");
  image.setAttribute("src",elem.img);
  var wish = document.createElement("button");
  wish.innerHTML = '<i class="far fa-heart"></i>';
  wish.addEventListener("click", function () {
    console.log(elem);
    addToWish(product);
  });
  var name = document.createElement("h4");
  name.textContent = elem.name;
  var price = document.createElement("h4");
  price.textContent = elem.price;
  var rating = document.createElement("h5");
  rating.textContent = elem.rating;
  var button = document.createElement("button");
  button.textContent = "QUICK BUY";
  button.addEventListener("click", function () {
    // console.log(elem);
    addToCart(product);
    alert("Added To Cart");
  });
  
  img_div.append(image,wish);
  div.append(img_div,name,rating,price,button);
  document.querySelector("#prod_item").append(div);
  })

  
}

function addToCart(product) {
// console.log(elem);
cartArr.push(product);
localStorage.setItem("cartArr", JSON.stringify(product));
}
function addToWish(product) {
// console.log(elem);
wishArr.push(product);
localStorage.setItem("wishArr", JSON.stringify(product));
}
localStorage.setItem("prodData",JSON.stringify(product))




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

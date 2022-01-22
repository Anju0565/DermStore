var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}
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
// function prod(event){
//   event.preventDefault();
//   window.location.href = "prod.html"
// }

    document.querySelector("#button").addEventListener("click" , place);
    var placedata= JSON.parse(localStorage.getItem("placedata",placedata)) || []
    function place(event){
    event.preventDefault();
        var placename = document.querySelector("#place").value
        var placecity = document.querySelector("#city").value
        var placeimage = document.querySelector("#image").value
        var fooddetail = document.querySelector("#food").value
        var placedetail  = document.querySelector("#placede").value
        var placeprice  = document.querySelector("#price").value
        var pricedetail =document.querySelector("#pricedetail").value
        var placeleft  = document.querySelector("#left").value
    
    
        var data={
            placename: placename,
            placecity: placecity,
            placeimage:placeimage,
            placedetail:placedetail,
            fooddetail: fooddetail,
            placeprice : placeprice,
            pricedetail:pricedetail,
            placeleft:placeleft,
        };
        
        placedata.push(data)
        console.log(placedata)
        localStorage.setItem("placedata" ,JSON.stringify(placedata))
    
    }
    document.querySelector("#src").addEventListener("click",home);
    function home(event){
        event.preventDefault();
        window.location.href = "index.html"
    }
function myFunction(){
    let humburger = document.querySelector(".navigation-bar");
    if(humburger.style.display === "block"){
        humburger.style.display = "none";
    }else{
        humburger.style.display = "block";
    }
}

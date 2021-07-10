var Shopper = 1;
document.querySelector(".Buying").innerHTML =Shopper;

function displayHoodie(){
    var HoodieCheckBox = document.getElementById("HoodieOnly")
    var hoodie = document.getElementById("Hoodie");
    if(HoodieCheckBox.checked){
        hoodie.style.display = "flex"
    }
    if(!HoodieCheckBox.checked){
        hoodie.style.display = "none"
    }
    
}

function displayWinterJacket(){
    var winterJacket = document.getElementById("WinterJacket");
    var WinterJacketCheckBox = document.getElementById("WinterJacketOnly");
    if(WinterJacketCheckBox.checked){
        winterJacket.style.display = "flex"
    }
    if(!WinterJacketCheckBox.checked){
        winterJacket.style.display = "none"
    }
}

function displayT_Shirts(){
    var t_Shirt = document.getElementById("T-Shirt");
    var T_ShirtCheckBox = document.getElementById("T-ShirtOnly");
    if(T_ShirtCheckBox.checked){
        t_Shirt.style.display = "flex"
    }
    if(!T_ShirtCheckBox.checked){
        t_Shirt.style.display = "none"
    }
}

window.onscroll = function(){
    var kc = document.documentElement.scrollTop;
    var kc1 = document.documentElement.scrollTop;
    var header = document.getElementById("header");
    var logo = document.getElementById("logo");
    var hinhanh = document.getElementById("hinhanh");
    var menu = document.getElementById("menu");
    var hinhdungyen = document.getElementById("hinhdungyen");
   
   if(kc>50){
        hinhanh.style.height = "167px";
        hinhanh.style.width ="250px";
        header.style.padding = "0px 0px";
        logo.style.fontSize = "30px";
        menu.style.top = "150px";
   }else{
        hinhanh.style.height = "167px";
        hinhanh.style.width ="302px";
        header.style.padding = "0px 0px";
        logo.style.fontSize = "40px";
        menu.style.top = "170px";
   }

    if(kc1>538){
        hinhdungyen.classList.add("hieuung1");
    }
    else{
        hinhdungyen.classList.remove("hieuung1");
    }
}

function opentimkiem(){
    var khung = document.getElementById("khung");
    if(khung.classList.contains("hieuung")){
        khung.classList.remove("hieuung");
    }else{
    khung.classList.add("hieuung");
    }
    console.log(kc);
}
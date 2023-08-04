var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
let gettombol = document.getElementById("tentang");



function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var tentang = document.getElementById("tentang");
var target = document.querySelector(".subtitle");


// ------------------tombol about me---------------------------------
tentang.addEventListener("click", function(event){
    event.preventDefault();
    target.scrollIntoView({behavior:"smooth"});
});



// ----------------beralih ke tab project----------
document.getElementById("pro").addEventListener("click", function(){
    window.location.href = "project.html"
});


// -------------------beralih ke tab portfolio-----------------
document.getElementById("port").addEventListener("click", function(event){
    event.preventDefault();
    window.location.href = "portfolio.html";
});



// -----------------------------beralih ke tab contact-------------------
document.getElementById("kontak").addEventListener("click", function(){
    window.location.href = "contact.html";
});


// -------------------------kembali ke home-------------------------------
document.addEventListener("DOMContentLoaded", function(){
    const pgup = document.getElementById("kembali_ke_atas");

    window.onscroll=function(){
        if(document.body.scrollTop>100||document.documentElement.scrollTop>100){
            pgup.style.display = "block";
        }
        else{
            pgup.style.display="none";
        }
    }



    pgup.addEventListener("click", function(){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })
})


// -------- header background + shadow -------- \\
let header = document.getElementById("header");
window.onload = function () {
    if (scrollY > 10){
        header.style.boxShadow = "0 5px 20px 0 rgba(0, 0, 0, 0.13)";
        header.style.backgroundColor = "white";
    };
    // if (document.body.offsetWidth < 544){
    //     blogBar.style.width = "34%";
    // }
}
document.onscroll = function(){
    if (scrollY > 10){
        header.style.boxShadow = "0 5px 20px 0 rgba(0, 0, 0, 0.13)";
        header.style.backgroundColor = "white";
    }else{
        header.style.boxShadow = "none";
        header.style.backgroundColor = "";
    };
};
// ------------------------ \\



// -------- nav move -------- \\
let headerBars = document.getElementById("header-bars");
let navContent = document.getElementById("nav-content");
let navShadow = document.getElementById("nav-shadow");
headerBars.onclick = function(){
    navContent.style.transform = "translateX(300px)";
    navShadow.style.display = "block";
}
document.addEventListener("click", function(event){
    if(event.target.getAttribute("id") == "nav-shadow"){
        navContent.style.transform = "translateX(-300px)";
        navShadow.style.display = "none";
    }
})
// ------------------------ \\


// let button = document.getElementById("button");
// let box = document.getElementById("box");

// let c = 3;
// let m = 0;
// let r = true; 
// button.onclick = function(){
//     if(r){
//         if(m != (c*100)-100){
//             m += 100;
//             box.style.transform = `translateX(-${m}vw)`;
//         }else{
//             m -= 100;
//             box.style.transform = `translateX(-${m}vw)`;
//             r = false;
//         }
//     }else{
//         if(m != 0){
//             m -= 100;
//             box.style.transform = `translateX(-${m}vw)`;
//         }else{
//             m += 100;
//             box.style.transform = `translateX(-${m}vw)`;
//             r = true;
//         }
//     }
// }

// setInterval(function(){
//     button.click();
// },3000)


let navItem = document.getElementById("nav");
let menuBar = document.querySelector(".fa-bars")
let closeMark = document.querySelector(".fa-xmark");

closeMark.addEventListener('click',(e)=>{
    navItem.classList.add("close-sidebar");
    
    if(navItem.classList.contains("open-sidebar")){
        navItem.classList.remove("open-sidebar");
    }

})

menuBar.addEventListener('click',(e)=>{
    navItem.classList.add("open-sidebar");
    if(navItem.classList.contains("close-sidebar")){
        navItem.classList.remove("close-sidebar");
    }

})


console.log(menuBar);

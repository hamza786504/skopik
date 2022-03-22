

const burger_menu = document.querySelector(".burger_menu");
const menu_bar = document.querySelector(".menu_bar");
const static_header = document.querySelector(".static_header");
const sections = document.querySelectorAll(".menu_active_link");
const navLi = document.querySelectorAll("nav.navbar .menu_bar ul li");
const anchors = document.querySelectorAll("a");
const mobile_menu_Bar = document.getElementById("menu_bar");



anchors.forEach((anchor) => {
    anchor.addEventListener("click",function(){
        mobile_menu_Bar.classList.toggle("menu_active");
    })
})
burger_menu.addEventListener("click",function(){
    menu_bar.classList.toggle("menu_active");
});


window.addEventListener("scroll", (event) => {

    // if(this.scrollY = 0){
    //     fixedheader.style.display = "none";
    //     static_header.style.display = "flex";

    // }if(this.scrollY > 0){
    //     fixedheader.style.display = "flex";
    //     static_header.style.display = "none";
    // }
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(pageYOffset >= sectionTop){
            current = section.getAttribute("id");
        }
    });

    navLi.forEach((li) => {
        li.classList.remove("active");
        if(li.classList.contains(current)){
            li.classList.add("active");
        }
    })
    // if(screen.width >= 848){
    //     if(this.scrollY >= 610){
    //         static_header.classList.add("fixed_header");
    //         static_header.style.position = "fixed";
    //         static_header.style.top = "0px";
    //     }
    //     if(this.scrollY <= 610){
    //         static_header.classList.remove("fixed_header");
    //         static_header.style.position = "relative";
    //         static_header.style.top = "auto";
    //     }
    // }else if(screen.width <= 848){
    //     if(this.scrollY > 370){
    //         static_header.classList.toggle("fixed_header");
    //         static_header.style.position = "fixed";
    //         static_header.style.top = "0px";
    //     }
    //     if(this.scrollY <= 370){
    //         static_header.classList.toggle("fixed_header");
    //         static_header.style.position = "relative";
    //         static_header.style.top = "auto";
    //     }
    // }
    
});
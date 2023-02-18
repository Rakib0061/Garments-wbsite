// *****************************preloader************

let preeloader = document.querySelector(".preeloader");
window.addEventListener("load",()=>{
    setTimeout(() => {
    preeloader.style.display = "none";
    }, 1000);
});

// *****************************preloader************






// *****************************Sticky Navbar************

let navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{
    let Y = window.scrollY;
        navbar.classList.toggle("sticky",Y > 0);
});


// *****************************Sticky Navbar************





// *****************************Parallax*****************

let mousemove = document.getElementById("mousemove");

document.addEventListener("mousemove",function(e){
    
    let X = (window.innerWidth - e.clientX) / 30;
    let Y = (window.innerHeight - e.clientY) / 20;

    mousemove.style.transform = `translateX(${X}px) translateY(${Y}px)`;
});

// *****************************Parallax******************





// *****************************Slider Button******************
 
// mousemove ###image tag### ;
let i = 0;
let btn_custom = document.querySelectorAll(".btn_custom");
let slide = ["./image/banner.jpg","./image/banner-3.jpg","./image/banner-2.jpg"];

btn_custom[1].addEventListener("click",()=>{
    i++;
    i = i > slide.length-1 ? 0 : i;
    mousemove.setAttribute("src",slide[i]);
});

btn_custom[0].addEventListener("click",()=>{
    i--;
    i = i < 0 ? slide.length-1 : i;
    mousemove.setAttribute("src",slide[i]);
});

// *****************************Slider Button******************





// *****************************Opacity Effect******************

let about_us_img = document.querySelector(".about_us_img");

window.addEventListener("scroll",()=>{
    let scroll_Y = this.scrollY;
    
    if(scroll_Y > 450){
        about_us_img.style.opacity = 1;
        about_us_img.style.transition = 2 + "s";
    }
});

// *****************************Opacity Effect******************






// *****************************review Swiper slider******************

var swiper = new Swiper(".mySwiper", {
    spaceBetween : 30,
    autoplay:{
        delay : 3000,
    },
});

// *****************************review Swiper slider******************





// *****************************Number Incresing******************

let number = document.querySelectorAll(".number");

number.forEach(value =>{
    let num = value.innerHTML = 0;
    let target = +value.getAttribute("data-target");
    let duration = target / 8000;
        
    let repeted = setInterval(() => {
        num++;
        if(num < target){
            value.innerHTML = `${Math.ceil(num + duration)}`
            console.log(num + duration);
        }
        else if( target === 700 ){
            clearInterval(repeted);
            console.log("vaijan")
            console.log(num)
            console.log(duration)
        }
    }, 1);
});


// *****************************Number Incresing******************

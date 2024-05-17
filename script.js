// swiper-slide-fully-visible

function landingPageSlider(){
  var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    mousewheel: true,
    coverflowEffect: {
      rotate: 70,
      stretch: 30,
      depth: 200,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
});
}

landingPageSlider();


function sliderContent(){
  let sliderWrapper = document.querySelector(".swiper-wrapper");
  let sliderImages = [
    {img: "images/img-1-apexlegends.jpg", title: "APEX LEGENDS"},
    {img: "images/img-2-manorlords.jpg", title: "MANOR LORDS"},
    {img: "images/img-3-vrising.jpg", title: "VRISING"},
    {img: "images/img-4-1361526.jpeg", title: "GRAY ZONE"},
  ]
  
  sliderImages.forEach(function(slide){
    let swiperSlide = document.createElement("div");
    swiperSlide.classList.add("swiper-slide");
    swiperSlide.innerHTML = `
        <img src="${slide.img}"/>
        <h1>${slide.title}</h1>
    `;
    sliderWrapper.appendChild(swiperSlide);
  })
}





Shery.mouseFollower({
  //Parameters are optional.
  skew: true,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});


Shery.imageMasker(".swiper-slide img" /* Element to target.*/, {
  //Parameters are optional.
  mouseFollower: true,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});


Shery.hoverWithMediaCircle("img" /* Element to target.*/, {
  images: ["images/img-1-apexlegends.jpg", "images/img-2-manorlords.jpg", "images/img-3-vrising.jpg", "images/img-4-1361526.jpeg"] /*OR*/,
  //videos: ["video1.mp4", "video2.mp4"],
});


// gsap.to(".second-main", {
//   top: 0,
//   scrollTrigger: {
//     scroller: "body",
//     trigger: ".second-main",
//     start: "top 95%",
//     end: "top 10%",
//     scrub: 1
//   }
// })


var apexImg = document.querySelector("#manorlordsImg");
var apexTitle =document.querySelector("#manorlordsTitle");

apexImg.addEventListener("mouseenter", function(){
  apexTitle.style.display = "block";
})

apexImg.addEventListener("mouseout", function(){
  apexTitle.style.display = "none";
})






// FOOTER ANIMATION

var footerSteam = document.querySelector(".footer-title");
let clutter = "";
let footerTitle = footerSteam.textContent;
for(let i = 0; i<footerTitle.length; i++) {
clutter += `<span>${footerTitle[i]}</span>`;
}
footerSteam.innerHTML = clutter;


gsap.from(".footer-title span", {
top: "-350px",
duration: .8,
stagger: .1,
ease: "poweri.out",
scrollTrigger: {
  scroller: "body",
  trigger: ".footer-bottom",
  start: "top 85%",
  end: "top 82%",
  scrub: 3,
}
})



gsap.from(".btm-line, .top-line", {
width: 0,
duration: 1,
delay: .5,
scrollTrigger: {
  scroller: "body",
  trigger: ".f-mid",
  start: "top 60%",
  end: "top 50%",
  scrub: 1,
}
})

gsap.from(".valve-section", {
opacity: 0,
scrollTrigger: {
  scroller: "body",
  trigger: ".f-mid",
  start: "top 50%",
  end: "top 40%",
  scrub: 1,
}
})


gsap.from('.footer-top', {
y: -100,
opacity: 0,
duration: 1,
scrollTrigger: {
  scroller: "body",
  trigger: ".footer-top",
  start: "top 50%",
  end: "top 45%",
  scrub: 1,
}
})



// CATEGORY SECTION
let active = 4;
let categories = document.querySelectorAll(".panel h2");
let first = document.querySelectorAll(".first");

gsap.to(categories, {
  opacity: .4
})
gsap.to(categories[active-1], {
  opacity: 1
})
greyout();
gsap.to(first[active-1], {
  opacity: 1,
  scale: 1
})

categories.forEach((val, idx) => {
  val.addEventListener("click", () => {
    gsap.to(".circle", {
      rotate: -(4 - (idx+1))*50,
      ease: Expo.easeInOut,
      duration: 1,
    })
    greyout();

    gsap.to(val, {
      opacity: 1
    })
    gsap.to(first[idx], {
      opacity: 1,
      scale: 1
    })
  })
})


function greyout() {
  gsap.to(categories, {
    opacity: .6
  })
  gsap.to(first, {
    opacity: .4,
    scale: .2
  })
}



let tl = gsap.timeline();

tl.from(".category-title", {
  x: -600,
  duration: 2,
  scrollTrigger: {
    scroller: "body",
    trigger: ".category-page",
    start: "top 90%",
    end: "top 80%",
    scrub: 2
  }
})

tl.from(".panel h2", {
  x: -500,
  duration: .4,
  stagger: .05,
  scrollTrigger: {
    scroller: "body",
    trigger: ".category-page",
    start: "top 85%",
    end: "top 75%",
    scrub: 1
  }
  
})
tl.from(".circle", {
  rotate: 90,
  ease: "poweri.out",
  duration: 1,
  scrollTrigger: {
    scroller: "body",
    trigger: ".category-page",
    start: "top 95%",
    end: "top 80%",
    scrub: 2,
  }
})


let swiper = document.querySelector(".swiper");
let videoBtn = document.querySelector(".vdo-btn");
let closeBtn = document.querySelector(".close-btn");
let overlay = document.querySelector(".overlay");

videoBtn.addEventListener("click", function(){
  // swiper.style.top = "-100vh";
  overlay.style.display = "none";
  closeBtn.style.display = "block";
  gsap.to(".close-btn", {
    top: "15%"
  })
  gsap.to(swiper, {
    top: "-100vh"
  })
})

closeBtn.addEventListener("click", function(){
  overlay.style.display = "block";
    gsap.to(".close-btn", {
      top: "-15%"
    })
    gsap.to(swiper, {
      top: "50%"
    })
})



function slider() {
  let imgs = ["images/img-1-apexlegends.jpg", "images/img-2-manorlords.jpg", "images/img-3-vrising.jpg", "images/img-1-apexlegends.jpg"];

  let imagesContainer = [["images/apex-images/apex1.jpg", "images/apex-images/apex2.jpg", "images/apex-images/apex3.jpg", "images/apex-images/apex4.jpg"], ["images/apex-images/apex1.jpg", "images/apex-images/apex2.jpg", "images/apex-images/apex3.jpg", "images/apex-images/apex4.jpg"], ["images/apex-images/apex1.jpg", "images/apex-images/apex2.jpg", "images/apex-images/apex3.jpg", "images/apex-images/apex4.jpg"], ["images/apex-images/apex1.jpg", "images/apex-images/apex2.jpg", "images/apex-images/apex3.jpg", "images/apex-images/apex4.jpg"]]
  
  let swiperSlides = document.querySelectorAll(".swiper-slide");
  let swiperImages = document.querySelectorAll(".swiper-slide img");
  let firstImg = document.querySelector("#firstimg");
  let frontImage = document.querySelector(".swiper-slide-fully-visible img");
  let idx;
  idx = 0;
  
  let frontSlide = document.querySelector(".swiper-slide-fully-visible");
  
  frontSlide.addEventListener("mouseenter", function(){
    setInterval(function() {
      if(idx>3){
        idx = 0;
      }
      swiperSlides.forEach((slide ,index) => {
        if(slide.classList.contains("swiper-slide-fully-visible")){
          slide.querySelector("img").src = `${imagesContainer[index][idx]}`;
        }
      })
      idx ++; 
    }, 3000);
  
  })
  frontSlide.addEventListener("mouseleave", function(){
    idx = 0;
    swiperSlides.forEach((slide ,index) => {
      if(slide.classList.contains("swiper-slide-fully-visible")){
        slide.querySelector("img").src = `${imagesContainer[index][idx]}`;
      }
    })
  
  })
}

// slider();














let navBtn = document.querySelector(".nav-btn");
let navMenu = document.querySelector(".nav-menu");
let naveCloseBtn = document.querySelector(".nav-close-btn");

let navToggle;
navBtn.addEventListener("click", function(){

  navMenu.style.display = "block";
  navBtn.style.zIndex = 500,
  gsap.to(navMenu, {
    height: "100vh",
    duration: .5
  })
})

naveCloseBtn.addEventListener("click", function(){
  gsap.to(navMenu, {
    height: "0",
    duration: 2,
  })
  navMenu.style.display = "none";
})








// gsap.to(".category-page", {
//   y: "-100vh",
//   scrollTrigger: {
//     markers: true,
//     scroller: "body",
//     trigger: ".category-page",
//     start: "top 90%",
//     end: "top 60%",
//     scrub: 1,
//   }
// })




// Explore page 
let exploreTitle = document.querySelector(".explore-title");
gsap.from(exploreTitle, {
  y: -800,
  opacity: 0,
  scrollTrigger: {
    scroller: "body",
    trigger: ".explore-page",
    start: "top 60%",
    end: "top 50%",
    scrub: 1
  }
})


exploreTl = gsap.timeline();
exploreTl.from(".cards", {
  scale: 0,
  duration: 1,
  stagger: .4,
  scrollTrigger: {
    scroller: "body",
    trigger: ".explore-page",
    start: "top 20%",
    end: "top -10%",
    scrub: 4
  }
})


gsap.from(".offer-title h1", {
  x: -800,
  opacity: 0,
  scrollTrigger: {
    scroller: "body",
    trigger: ".offer-page",
    start: "top 60%",
    end: "top 50%",
    scrub: 1
  }
})
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


// Shery.imageMasker("img" /* Element to target.*/, {
//   //Parameters are optional.
//   mouseFollower: true,
//   ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//   duration: 1,
// });


// Shery.hoverWithMediaCircle("img" /* Element to target.*/, {
//   images: ["images/img-1-apexlegends.jpg", "images/img-2-manorlords.jpg", "images/img-3-vrising.jpg", "images/img-4-1361526.jpeg"] /*OR*/,
//   //videos: ["video1.mp4", "video2.mp4"],
// });


gsap.to(".second-main", {
  top: 0,
  scrollTrigger: {
    scroller: "body",
    trigger: ".second-main",
    start: "top 95%",
    end: "top 10%",
    scrub: 1
  }
})



var apexImg = document.querySelector("#manorlordsImg");
var apexTitle =document.querySelector("#manorlordsTitle");

apexImg.addEventListener("mouseenter", function(){
  apexTitle.style.display = "block";
})

apexImg.addEventListener("mouseout", function(){
  apexTitle.style.display = "none";
})






// FOOTER ANIMATION

function footerAnime(){
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
      // markers: true,
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
}



footerAnime();




// CATEGORY SECTION
let active = 4;
let categories = document.querySelectorAll(".panel h2");
let first = document.querySelectorAll(".first");

gsap.to(categories, {
  opacity: .6
})
gsap.to(categories[active-1], {
  opacity: 1
})
gsap.to(first[active-1], {
  opacity: 1
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
      opacity: 1
    })
  })
})


function greyout() {
  gsap.to(categories, {
    opacity: .6
  })
  gsap.to(first, {
    opacity: .4
  })
}

gsap.to(".circle", {
  rotate: 0,
  ease: Expo.easeInOut,
  duration: 2
})
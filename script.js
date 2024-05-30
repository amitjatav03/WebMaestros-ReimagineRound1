
// (function () {
//   const locomotiveScroll = new LocomotiveScroll({
//     el: document.querySelector(".main"),
//     smooth: true,
// })();



// CURSORS

let imgCursor = document.querySelector(".img-crsr");
let swipSlides = document.querySelectorAll(".swiper-slide img");

swipSlides.forEach((slid) => {
  slid.addEventListener("mousemove", function(dets){
    console.log(dets.target);
    imgCursor.style.opacity = "1";
    gsap.to(imgCursor, {
      x: dets.x - 100,
      y: dets.y - 100,
    })
  })
  slid.addEventListener("mouseleave", function(dets){
    imgCursor.style.opacity = "0";
  })
})



function loco() {
  function init() {
    gsap.registerPlugin(ScrollTrigger);
  
    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
  
    // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });
  
  
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
  
  }
  
  init()
}

loco();



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





function sheryJs(){
  Shery.mouseFollower({
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: .1,
  });
  
  
  Shery.imageMasker(".swiper-slide img" , {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
}
// sheryJs();









function footerAnimation(){
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
    scroller: ".main",
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
    scroller: ".main",
    trigger: ".f-mid",
    start: "top 60%",
    end: "top 50%",
    scrub: 1,
  }
  })
  
  gsap.from(".valve-section", {
  opacity: 0,
  scrollTrigger: {
    scroller: ".main",
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
    scroller: ".main",
    trigger: ".footer-top",
    start: "top 50%",
    end: "top 45%",
    scrub: 1,
  }
  })
}
footerAnimation();






// CATEGORY SECTION
let active = 4;
let categories = document.querySelectorAll(".panel h2");
let first = document.querySelectorAll(".first");

gsap.to(categories, {
  opacity: .4
})
greyout();
gsap.to(categories[active-1], {
  opacity: 1
})

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
    scroller: ".main",
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
    scroller: ".main",
    trigger: ".category-page",
    start: "top 85%",
    end: "top 75%",
    scrub: 1
  }
  
})
gsap.from(".circle", {
  rotate: 180,
  ease: "poweri.out",
  duration: .8,
  scrollTrigger: {
    scroller: ".main",
    trigger: ".category-page",
    start: "top 90%"
  }
})

document.querySelector(".category-page").addEventListener("mousemove", function(event){
  var width = window.innerWidth;
  var height = window.innerHeight;
  positionX = (event.clientX/width) - 0.55;
  positionY = (event.clientY/height) - 0.55;
  gsap.to(".first img", { 
      rotationY: positionX * 25,
      rotationX: positionY * 25,
      ease: "none"
  });
})

let catHoverSound = document.querySelector(".category-panel-hover");
categories.forEach(function(cat){
  cat.addEventListener("click", function(){
    console.log("hoverinng")
    catHoverSound.play();
  })
})

function stopSongs() {
  catHoverSound.pause();
  catHoverSound.currentTime = 0;
}






let swiper = document.querySelector(".swiper");
let videoBtn = document.querySelector(".vdo-btn");
let closeBtn = document.querySelector(".close-btn");
let overlay = document.querySelector(".overlay");

let playToggle = 0;
videoBtn.addEventListener("click", function(){
  if(playToggle === 0) {
    videoBtn.classList.remove("ri-play-circle-fill");
    videoBtn.classList.add("ri-close-circle-fill")
    
    overlay.style.display = "none";
      gsap.to(swiper, {
        top: "-100vh"
      })
      playToggle = 1;
    }
    else if(playToggle === 1) {
      videoBtn.classList.remove("ri-close-circle-fill");
      videoBtn.classList.add("ri-play-circle-fill")
      overlay.style.display = "block";
      gsap.to(swiper, {
        top: "50%"
      })
      playToggle = 0;
    }
})



function slider() {

  let imagesContainer = [["images/landing-page-images/apex/img1.jpg", "images/landing-page-images/apex/img2.jpg", "images/landing-page-images/apex/img3.jpg", "images/landing-page-images/apex/img4.jpg"], ["images/gos/gos1.jpg", "images/gos/gos2.jpg", "images/gos/gos3.jpg", "images/gos/gos4.jpg"], ["images/apex-images/apex1.jpg", "images/apex-images/apex2.jpg", "images/apex-images/apex3.jpg", "images/apex-images/apex4.jpg"], ["images/pubg-images/pubg1.jpg", "images/apex-images/apex2.jpg", "images/apex-images/apex3.jpg", "images/apex-images/apex4.jpg"]]
  
  let swiperSlides = document.querySelectorAll(".swiper-slide");
  // let swiperImages = document.querySelectorAll(".swiper-slide img");
  // let firstImg = document.querySelector("#firstimg");
  // let frontImage = document.querySelector(".swiper-slide-fully-visible img");
  let idx;
  idx = 0;
  
  let frontSlide = document.querySelector(".swiper-slide-fully-visible");

  setInterval(function() {
    if(idx>3){
      idx = 0;
    }
    swiperSlides.forEach((slide ,index) => {
      if(slide.classList.contains("swiper-slide-active")){
        slide.querySelector("img").src = `${imagesContainer[index][idx]}`;
      }
    })
    idx ++; 
  }, 3000);
  
  // frontSlide.addEventListener("mouseleave", function(){
  //   swiperSlides.forEach((slide ,index) => {
  //     if(slide.classList.contains("swiper-slide-active")){
  //       slide.querySelector("img").src = `${imagesContainer[index][0]}`;
  //     }
  //   })
  
  // })
}

slider();





// STEAM GIFT CARDS SECTION 

let swooshSound = document.querySelector(".swoosh-sound");
let giftContainer = document.querySelector(".container");



function giftCardsAnimation(){
  let leftContCards = document.querySelectorAll(".gift-cards");
  let leftCardsArr = [...leftContCards];
  
  function updateCards() {
      leftCardsArr.forEach(e => {
          e.classList.remove("card1");
          e.classList.remove("card2");
          e.classList.remove("card3");
          e.classList.remove("card4");
          e.classList.remove("card5");
          e.classList.remove("card6");
      });
      leftCardsArr.forEach((card, idx) => {
          card.classList.add(`card${idx+1}`);
      })
  }
  
  function animateLeftCards() {
      leftCardsArr.push(leftCardsArr.shift());
      // leftCardsArr.unshift(leftCardsArr.pop());
      updateCards();
  }
  
  
  
  
  let rightContCards = document.querySelectorAll(".gift-rcards");
  let rightCardsArr = [...rightContCards];
  
  function updateRCards() {
      rightCardsArr.forEach(e => {
          e.classList.remove("rcard1");
          e.classList.remove("rcard2");
          e.classList.remove("rcard3");
          e.classList.remove("rcard4");
          e.classList.remove("rcard5");
          e.classList.remove("rcard6");
      });
      rightCardsArr.forEach((card, idx) => {
          card.classList.add(`rcard${idx+1}`);
      })
  }
  
  function animateRightCards() {
      rightCardsArr.push(rightCardsArr.shift());
      // rightCardsArr.unshift(rightCardsArr.pop());
      updateRCards();
  }
  
  setInterval(()=>{
      animateLeftCards();
      animateRightCards();
  }, 900);
  
}

giftCardsAnimation();















// NAVIGATION MENU 
let navBtn = document.querySelector(".nav-btn");
let closeNav = document.querySelector(".close-nav");
let navMenu = document.querySelector(".nav-menu");

navBtn.addEventListener("click", function(){
  gsap.to(navMenu, {
    opacity: 1,
    display: "block",
    height: "100%",
  })
})

closeNav.addEventListener("click", function(){
  gsap.to(navMenu, {
    opacity: 0,
    height: 0,
    display: "none"
  })
})









gsap.from(".offer-title h1", {
  x: -800,
  opacity: 0,
  scrollTrigger: {
    scroller: ".main",
    trigger: ".offer-page",
    start: "top 60%",
    end: "top 50%",
    scrub: 1
  }
})




let footerCircle = document.querySelector(".footer-circle");
let footerBottom = document.querySelector(".footer-bottom");

footerBottom.addEventListener("mousemove", (dets) => {
  gsap.to(footerCircle, {
    left: dets.x,
    y: dets.y - 500,
  })
  gsap.to(footerCircle, {
    // display: "block",
    scale: 20,
    duration: 2
  })
})

footerBottom.addEventListener("mouseleave", () => {
  gsap.to(footerCircle, {
    // display: "none",
    scale: 0,
    duration: 2.4
  })
})

gsap.to(".rounded-div-wrapper", {
  height: 100,
  marginTop: "-90px",
  scrollTrigger: {
    trigger: ".category-page",
    scroller: ".main",
    start: "top 90%",
    end: "top 70%",
    scrub: .8
  }
})
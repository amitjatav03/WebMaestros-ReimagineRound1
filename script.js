
// (function () {
//   const locomotiveScroll = new LocomotiveScroll({
//     el: document.querySelector(".main"),
//     smooth: true,
// })();


function loader() {
  let tl = gsap.timeline();


  for(let i=0; i<9; i++){
      tl.to(".upper-circle", {
          // transform: `translate(-50%, -50%) rotateZ(-81deg)`,
          rotation: "+=36",
          duration: .3,
          ease: "circ.out"
        })  
      }
  
  gsap.to(".lower-circle", {
    rotation: "955",
      duration: 3,
      ease: "circ.out"
    })
  
    
    
  tl.to(".loader", {
      delay: 1,
      y: "-100%",
      ease: "circ.out"
  })
}

loader();


// CURSORS

let imgCursor = document.querySelector(".img-crsr");
let swipSlides = document.querySelectorAll(".swiper-slide img");

swipSlides.forEach((slid) => {
  slid.addEventListener("mousemove", function(dets){
    imgCursor.style.opacity = ".7";
    gsap.to(imgCursor, {
      x: dets.x - 90,
      y: dets.y - 800,
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
      smooth: true,
      lerp: 0.08
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
    mousewheel: true,
    parallax: true,
    speed: "600",
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    coverflowEffect: {
      rotate: 70,
      stretch: 30,
      depth: 200,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination"
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
let catSection = document.querySelector(".category-page");
let catPanel = document.querySelector(".panel");
let categories = document.querySelectorAll(".panel h2");
let first = document.querySelectorAll(".first");
let catImages = document.querySelectorAll(".cat-img");
let desc = document.querySelector(".cat-desc");
let catBgm;
let catCircle = document.querySelector(".circle");
let catToggle = 0;
var catOverlay;
let catCursor = document.querySelector(".category-crsr");
let catTitle = document.querySelectorAll(".category-title");
let clickedCategory = document.querySelector(".clicked-category");
let closeCatBtn;
let categoryDetails = [
  {categoryTitle: "ACTION", categoryDesc: "Dive into high-speed, adrenaline-pumping adventures where reflexes and skill are key. Experience intense combat, thrilling chases, and epic battles in dynamic and fast-paced environments.", wallpaperSrc: "live wallpapers/action.mp4", categoryAudio: "sounds/category-sounds/s1.mp3"},
  {categoryTitle: "ANIME", categoryDesc: "Dive into vibrant worlds inspired by your favorite anime. Enjoy captivating storylines, stylized visuals, and dynamic gameplay that bring beloved characters and epic adventures to life.", wallpaperSrc: "live wallpapers/anime2.mp4", categoryAudio: "sounds/category-sounds/s2.mp3"},
  {categoryTitle: "ALL SPORTS", categoryDesc: "Experience the thrill of competition with realistic or fantasy sports simulations. Play your favorite sports, master skills, and compete for glory in immersive and dynamic arenas.", wallpaperSrc: "live wallpapers/all-sports.mp4", categoryAudio: "sounds/category-sounds/s3.mp3"},
  {categoryTitle: "ROLL PLAYING", categoryDesc: "Embark on epic adventures, customize characters, and explore vast worlds. Experience captivating stories where every choice matters in our diverse RPG collection.", wallpaperSrc: "live wallpapers/rpg.mp4", categoryAudio: "sounds/category-sounds/s4.mp3"},
  {categoryTitle: "SURVIVAL", categoryDesc: "Test your endurance and resourcefulness in harsh environments. Gather resources, build shelters, and fend off dangers as you strive to stay alive in challenging settings.", wallpaperSrc: "live wallpapers/survival.mp4", categoryAudio: "sounds/category-sounds/s5.mp3"},
  {categoryTitle: "MULTIPLAYER", categoryDesc: "Connect with friends and players worldwide in competitive or cooperative modes. Engage in battles, teamwork, and strategic gameplay across a variety of exciting and dynamic environments.", wallpaperSrc: "live wallpapers/multiplayer.mp4", categoryAudio: "sounds/category-sounds/s6.mp3"},
  {categoryTitle: "PUZZLE", categoryDesc: "Challenge your mind with engaging and thought-provoking puzzles. Test your logic, strategy, and problem-solving skills across a variety of captivating and addictive gameplay experiences.", wallpaperSrc: "live wallpapers/puzzle.mp4", categoryAudio: "sounds/category-sounds/s7.mp3"}
]

catSection.addEventListener("mousemove", function(dets){
  gsap.to(catCursor, {
    left: dets.x - 30,
    top: dets.y - 40,
  })
})

catImages.forEach(function(catImg){
  catImg.addEventListener("mousemove", function(){
    gsap.to(catCursor, {
      scale: 1,
    }) 
  })
  catImg.addEventListener("mouseout", function(){
    gsap.to(catCursor, {
      scale: 0,
    }) 
  })
})




catImages.forEach(function(catImg, idx){
  catImg.addEventListener("click", function(){
    clickedCategory.innerHTML = ``;
    let clickedCatDetails = `
      <audio class="cat-bgm" src="${categoryDetails[idx].categoryAudio}"></audio>
      <div class="category-side-overlay bg-black opacity-0 z-[1200] absolute top-0 left-0 w-full h-full"></div>
      <video class="cat-bg w-full h-full z-[-1] absolute top-0 left-0 object-cover" src="${categoryDetails[idx].wallpaperSrc}" autoplay muted loop></video>
      <h1 class="text-[4vw] z-[1250] text-white font-[abc] tracking-tight font-semibold">${categoryDetails[idx].categoryTitle}</h1>
      <p class="desc w-[65%] z-[1250] text-[1.6vw] text-center text-white">
        ${categoryDetails[idx].categoryDesc}
      </p>
      <button class="view border-2 z-[1250] border-white hover:bg-white hover:text-black cursor-pointer mt-4 text-white text-2xl px-2 py-1 rounded-md">View More</button>
      <i id="cc" class="close-cat ri-arrow-left-circle-line z-[1250] text-white text-[4.5vw] cursor-pointer hover:text-slate-500"></i>
      `;
    clickedCategory.innerHTML = clickedCatDetails;
    catOverlay = document.querySelector(".category-side-overlay");
    catBgm = document.querySelector(".cat-bgm");
    
    catTitle.forEach(t => {
      t.style.display = "none";
    })
    catPanel.style.display = "none";
    catBgm.play();
    clickedCategory.style.display = "flex";
    clickedCategory.style.opacity = 1;
    catOverlay.style.opacity = .6;
    catOverlay.style.display = "block";
    gsap.to(catImg, {
      // width: "20vw",
      // height: "32vw",
      opacity: 0,
      duration: .4
    })
    gsap.to(desc, {
      opacity: 1,
    })
    closeCatBtn = document.querySelector(".close-cat");

  closeCatBtn.addEventListener("click", function(){
    console.log("Hello");
    catTitle.forEach(t => {
      t.style.display = "block";
    })
    catPanel.style.display = "block";
    catBgm.pause();
    catBgm.currentTime = 0;
    clickedCategory.style.opacity = 0;
    clickedCategory.style.display = "none";
    catOverlay.style.opacity = 0;
    catOverlay.style.display = "none";
    gsap.to(catImg, {
      width: "30vw",
      height: "45vw",
      opacity: 1,
      duration: .4
    })
    gsap.to(desc, {
      opacity: 0,
    })
  });
  })
  
  
})







gsap.to(categories, {
  opacity: .4
})
greyout();
gsap.to(categories[active-1], {
  opacity: 1,
  fontWeight: "bold",
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
      opacity: 1,
      fontWeight: "bold",
    })
    gsap.to(first[idx], {
      opacity: 1,
      scale: 1
    })
  })
})


function greyout() {
  gsap.to(categories, {
    opacity: .6,
    fontWeight: "normal"
  })
  gsap.to(first, {
    opacity: .4,
    scale: .2
  })
}



let tl = gsap.timeline();

tl.from(".category-title", {
  y: -600,
  duration: 1,
  scrollTrigger: {
    scroller: ".main",
    trigger: ".category-page",
    start: "top 90%",
    end: "top 80%",
    scrub: 1
  }
})

tl.from(".panel h2", {
  x: -500,
  duration: .4,
  stagger: .05,
  scrollTrigger: {
    scroller: ".main",
    trigger: ".category-page",
    start: "top 75%",
    end: "top 65%",
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

// document.querySelector(".category-page").addEventListener("mousemove", function(event){
//   var width = window.innerWidth;
//   var height = window.innerHeight;
//   positionX = (event.clientX/width) - 0.55;
//   positionY = (event.clientY/height) - 0.55;
//   gsap.to(".first img", { 
//       rotationY: positionX * 25,
//       rotationX: positionY * 25,
//       ease: "none"
//   });
// })

let catHoverSound = document.querySelector(".category-panel-hover");
categories.forEach(function(cat){
  cat.addEventListener("click", function(){
    catHoverSound.currentTime = ".25";
    catHoverSound.speed = "12";
    catHoverSound.play();
    })
})

function stopSongs() {
  catHoverSound.pause();
  catHoverSound.currentTime = 0;
}


// CLICKED Category

// catImages.forEach((img, idx) => {
//   img.addEventListener("click", () => {
//     let clickedCatDetails = `
//       <audio class="rpg-bgm" src="${categoryDetails[idx].categoryAudio}"></audio>
//       <div class="category-side-overlay bg-black opacity-0 z-[1200] absolute top-0 left-0 w-full h-full"></div>
//       <video class="rpg-bg w-full h-full z-[-1] absolute top-0 left-0" src="${categoryDetails[idx].wallpaperSrc}" autoplay muted loop></video>
//       <h1 class="text-[4vw] z-[1250] text-white font-[abc] tracking-tight font-semibold">${categoryDetails[idx].categoryTitle}</h1>
//       <p class="desc w-[65%] z-[1250] text-[1.6vw] text-center text-white">
//         ${categoryDetails[idx].categoryDesc}
//       </p>
//       <button class="border-2 z-[1250] border-white hover:bg-white hover:text-black cursor-pointer mt-4 text-white text-2xl px-2 py-1 rounded-md">View More</button>
//       <i class="close-cat ri-arrow-left-circle-line z-[1250] text-white text-[4.5vw] cursor-pointer hover:text-slate-500"></i>
//     `
//     clickedCategory.innerHTML = clickedCatDetails;

//   })
// })






let swiper = document.querySelector(".swiper");
let videoBtn = document.querySelector(".vdo-btn");
let closeBtn = document.querySelector(".close-btn");
let overlay = document.querySelector(".overlay");
let mainVid = document.querySelector(".main-video");

let playToggle = 0;
videoBtn.addEventListener("click", function(){
  if(playToggle === 0) {
    videoBtn.classList.remove("ri-play-circle-fill");
    videoBtn.classList.add("ri-close-circle-fill");
    mainVid.currentTime = 0;
    mainVid.play();
    mainVid.muted = !mainVid.muted; 
    
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
      mainVid.muted = !mainVid.muted;
      gsap.to(swiper, {
        top: "50%"
      })
      playToggle = 0;
    }
})



function slider() {

  let imagesContainer = [
    ["images/landing-page-images/sottr/img1.jpg", "images/landing-page-images/sottr/img2.jpg", "images/landing-page-images/sottr/img3.jpg", "images/landing-page-images/sottr/img4.jpg"], 
    ["images/landing-page-images/rdr2/img1.jpg", "images/landing-page-images/rdr2/img2.jpg", "images/landing-page-images/rdr2/img3.jpg", "images/landing-page-images/rdr2/img4.jpg"], 
    ["images/landing-page-images/ghost-of-tsushima/img1.jpg", "images/landing-page-images/ghost-of-tsushima/img2.jpg", "images/landing-page-images/ghost-of-tsushima/img3.jpg", "images/landing-page-images/ghost-of-tsushima/img4.jpg"], 
    ["images/landing-page-images/pubg/img1.jpg", "images/landing-page-images/pubg/img2.jpg", "images/landing-page-images/pubg/img3.jpg", "images/landing-page-images/pubg/img4.jpg"],
    ["images/landing-page-images/valhalla/img1.jpg", "images/landing-page-images/valhalla/img2.jpg", "images/landing-page-images/valhalla/img3.jpg", "images/landing-page-images/valhalla/img4.jpg"], 
    ["images/landing-page-images/apex/img1.jpg", "images/landing-page-images/apex/img2.jpg", "images/landing-page-images/apex/img3.jpg", "images/landing-page-images/apex/img4.jpg"], 
  ];
  
  let swiperSlides = document.querySelectorAll(".swiper-slide");
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
  }, 4000);
  
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
function navMenu(){
  let navBtn = document.querySelector(".nav-btn");
  let closeNav = document.querySelector(".close-nav");
  let navMenu = document.querySelector(".nav-menu");
  let openNavSound = document.querySelector(".open-nav-sound");
  let closeNavSound = document.querySelector(".close-nav-sound");
  let navOverlay = document.querySelector(".nav-overlay");

  openNavSound.volume = 1;
  closeNavSound.volume = 1;

  
  navBtn.addEventListener("click", function(){
    openNavSound.currentTime = ".20";
    navOverlay.style.display = "block";
    openNavSound.play();
    gsap.to(navMenu, {
      display: "flex",
      duration: .2,
      ease: "poweri.out",
      opacity: 1,
      right: "1%",
      })
      })
      
    closeNav.addEventListener("click", function(){
    navOverlay.style.display = "none";
    closeNavSound.play();
    gsap.to(navMenu, {
      display: "none",
      duration: .2,
      ease: "poweri.out",
      opacity: 0,
      right: "-50%",
    })
  })

  

}
navMenu();


let navItems = document.querySelectorAll(".nav-items h1");
let navHoverSound = document.querySelector(".nav-hover-sound");

navItems.forEach(function(item){
  item.addEventListener("mouseover", function(){
    navHoverSound.play();
  })
  item.addEventListener("mouseout", function(){
    navHoverSound.pause();
    navHoverSound.currentTime = "0";
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




function footerTitleHoverAnime(){
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
}

footerTitleHoverAnime();



// gsap.to(".rounded-div-wrapper", {
//   height: 100,
//   marginTop: "-90px",
//   scrollTrigger: {
//     trigger: ".category-page",
//     scroller: ".main",
//     start: "top 90%",
//     end: "top 70%",
//     scrub: .8
//   }
// })








// gsap.to(".nt-slice", {
//   scale: 1,
//   stagger: 0.2,
//   scrollTrigger: {
//     scroller: ".main",
//     trigger: ".new-and-trending-section",
//     start: "top 80%",
//     end: "top -70%",
//     scrub: .2
//   }
// })


// gsap.to(".ts-slice", {
//   scale: 1,
//   stagger: 0.2,
//   scrollTrigger: {
//     scroller: ".main",
//     trigger: ".top-sellers-section",
//     start: "top 80%",
//     end: "top -90%",
//     scrub: .2
//   }
// })



let expTitles = document.querySelectorAll(".exp-titles");
let selectedCont = document.querySelector(".selected-section");
expTitles.forEach((etitle, eidx) => {
  etitle.addEventListener("click", function(){
    selectedCont.style.transform = `translateX(-${eidx*100}%)`;
  })
})



let NewAndTrendingCont = document.querySelector(".new-and-trending-section");




// INSTALL STEAM MENU 
function installSteam(){
  let installBtn = document.querySelector(".install-btn");
  let closeBtnSteam = document.querySelector(".close-steam-install");
  let installSteam = document.querySelector(".install-steam-section");
  let navOverlay = document.querySelector(".nav-overlay");
  
  installBtn.addEventListener("click", function(){
    navOverlay.style.display = "block";
    gsap.to(installSteam, {
      duration: .2,
      ease: "poweri.out",
      top: "50%",
    })
  })
  
closeBtnSteam.addEventListener("click", function(){
    navOverlay.style.display = "none";
    gsap.to(installSteam, {
      duration: .2,
      ease: "poweri.out",
      top: "-50%",
    })
  })
}
installSteam();  




let slices = document.querySelectorAll(".slice");
let sliceHover = document.querySelector(".slice-hover-sound");
slices.forEach((slice)=>{
  slice.addEventListener("mousemove", ()=>{
    sliceHover.play();
  })
  slice.addEventListener("mouseout", ()=>{
    sliceHover.pause();
    sliceHover.currentTime = "0";
  })
})





// Shuffle letter Navigation Hover
jQuery('document').ready(function($) {
	// Set effect velocity in ms
	var velocity = 50;
	
	var shuffleElement = $('.shuffle');

	$.each( shuffleElement, function(index, item) {
		$(item).attr('data-text', $(item).text());
	});

	var shuffle = function(o) {
		for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
		return o;
	};

	var shuffleText = function(element, originalText) {
		var elementTextArray = [];
		var randomText = [];

		for ( i=0;i<originalText.length;i++) {
			elementTextArray.push(originalText.charAt([i]));
		};

		var repeatShuffle = function(times, index) {
			if ( index == times ) {
				element.text(originalText);
				return;
			} 

			setTimeout( function() {
				randomText = shuffle(elementTextArray);
				for (var i=0;i<index;i++) {
					randomText[i] = originalText[i];	
				}
				randomText = randomText.join('');
				element.text(randomText);
				index++;
				repeatShuffle(times, index);
			}, velocity);	
		}
		repeatShuffle(element.text().length, 0);
	}

	shuffleElement.mouseenter(function() {
		shuffleText($(this), $(this).data('text'));
	});
});



// New and Trending Section 

let exploreTitles = document.querySelectorAll(".exp-titles");

exploreTitles.forEach(function(exTitle){
  exTitle.addEventListener("click", function(){
    inactiveTitle();
    exTitle.classList.add("active-title");
  })
})

function inactiveTitle(){
  exploreTitles.forEach(function(exTitle){
    exTitle.classList.remove("active-title")
  })
}

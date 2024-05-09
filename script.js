var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    mousewheel: true,
    coverflowEffect: {
      rotate: 70,
      stretch: 0,
      depth: 200,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });


Shery.mouseFollower({
  //Parameters are optional.
  skew: true,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});


Shery.imageMasker("img" /* Element to target.*/, {
  //Parameters are optional.
  mouseFollower: true,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});


Shery.hoverWithMediaCircle("img" /* Element to target.*/, {
  images: ["images/img-1-apexlegends.jpg", "images/img-2-manorlords.jpg", "images/img-3-vrising.jpg", "images/img-4-1361526.jpeg"] /*OR*/,
  //videos: ["video1.mp4", "video2.mp4"],
});

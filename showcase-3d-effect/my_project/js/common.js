document.addEventListener("DOMContentLoaded", function () {
  const ShowSlider = new Swiper(".showcase__carousel", {
    loop: true,
    slidesPerView: 3,
    speed: 1800,
    centeredSlides: true,
  });

  document.querySelector("video").playbackRate = 2;
});

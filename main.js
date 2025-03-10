const search = document.querySelector(".search-box");
const cart = document.querySelector(".cart");
const user = document.querySelector(".user");
const navbar = document.querySelector(".navbar");

document.querySelector("#search-icon").onclick = () => {
    search.classList.toggle("active");
    cart.classList.remove("active");
    user.classList.remove("active");
    navbar.classList.remove("active");
};

document.querySelector("#cart-icon").onclick = () => {
    cart.classList.toggle("active");
    search.classList.remove("active");
    user.classList.remove("active");
    navbar.classList.remove("active");
};

document.querySelector("#cart-user").onclick = () => {
  user.classList.toggle("active");
  search.classList.remove("active");
  cart.classList.remove("active");
  navbar.classList.remove("active");
};

document.querySelector("#menu-icon").onclick = () => {
  navbar.classList.toggle("active");
  search.classList.remove("active");
  cart.classList.remove("active");
  user.classList.remove("active");
};

window.onscroll = () => {
  search.classList.remove("active");
  cart.classList.remove("active");
  user.classList.remove("active");
  navbar.classList.remove("active");
};

var swiper = new Swiper(".new-arrival", {
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    568: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1020: {
      slidesPerView: 4,
    },
  },
});
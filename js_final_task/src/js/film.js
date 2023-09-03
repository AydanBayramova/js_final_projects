// document.querySelector('.checkbtn').addEventListener('click', function () {
//     document.getElementById('respon').classList.toggle('active');
// });
var swiper = new Swiper(".film_slayt", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  var swiper = new Swiper(".actions", {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault(); // Sayfanın yeniden yüklenmesini engelle
      event.stopPropagation(); // Event yayılmasını durdur
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });
  


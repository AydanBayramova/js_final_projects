document.getElementById("mode-btn").addEventListener("click",()=>{
    document.body.classList.toggle('dark');
    localStorage.setItem('mode', document.body.classList);
  })
  if (localStorage.getItem('mode')!="") {
    document.body.classList.add(localStorage.getItem('mode'));
    document.getElementById("mode-btn").checked="true";
  }
  var swiper = new Swiper(".myhistory", {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  const menuToggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');
  
  menuToggle.addEventListener('click', () => {
      menu.classList.toggle('active');
  });
  
  
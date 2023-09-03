document.getElementById("mode-btn").addEventListener("click",()=>{
    document.body.classList.toggle('dark');
    localStorage.setItem('mode', document.body.classList);
  })
  if (localStorage.getItem('mode')!="") {
    document.body.classList.add(localStorage.getItem('mode'));
    document.getElementById("mode-btn").checked="true";
  }
  

    var swiper = new Swiper(".myslayt", {
      slidesPerView: 3,
      spaceBetween: 30,
      freeMode: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
    $(document).ready(function() {
      $('.list').slice(0, 3).addClass('active'); // İlk 3 listeyi göster
    
      $('.select').click(function() {
        $('.list').addClass('active'); // Tüm listeleri göster
        $('.select').hide(); // See All butonunu gizle
      });
    });
    

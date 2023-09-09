var swiper = new Swiper(".filmcome", {
  slidesPerView: "auto",
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
var swiper = new Swiper(".myfilm", {
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const downloadLink = document.getElementById('setting_link');
const drawer = document.getElementById('setprofil');
const drawerContent = document.getElementById('pset');

downloadLink.addEventListener('click', (event) => {
    event.preventDefault(); 
    event.stopPropagation(); 
    drawer.classList.toggle('open'); 

    
    drawerContent.addEventListener('click', (event) => {
        event.stopPropagation(); 
    });
});


document.addEventListener('click', () => {
    drawer.classList.remove('open'); 
});
const proEdit = document.getElementById('getprofil');
const Profilitem = document.getElementById('edit_pro');
const Profsett = document.getElementById('pro_item');

proEdit.addEventListener('click', (event) => {
    event.preventDefault(); 
    event.stopPropagation(); 
   Profilitem.classList.toggle('open'); 

    
   Profsett.addEventListener('click', (event) => {
        event.stopPropagation(); 
    });
});


document.addEventListener('click', () => {
   Profilitem.classList.remove('open'); 
});

const proEdits = document.getElementById('getprofils');
const Profilitems = document.getElementById('edits_pro');
const Profsetts = document.getElementById('pros_item');

proEdits.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
   Profilitems.classList.toggle('open'); 

   
   Profsetts.addEventListener('click', (event) => {
        event.stopPropagation(); 
    });
});


document.addEventListener('click', () => {
   Profilitems.classList.remove('open'); 
});
// 
const proEditsd = document.getElementById('getdata');
const Profilitemsd = document.getElementById('edit_data');
const Profsettsd = document.getElementById('pro_data');

proEditsd.addEventListener('click', (event) => {
    event.preventDefault(); 
    event.stopPropagation(); 
   Profilitemsd.classList.toggle('open'); 

  
   Profsettsd.addEventListener('click', (event) => {
        event.stopPropagation(); 
    });
});


document.addEventListener('click', () => {
   Profilitemsd.classList.remove('open'); 
});

$(document).ready(function() {
  $(".read-more").click(function(e) {
    e.preventDefault();
    $(".hidden").slideToggle();
    $(".initial").slideToggle();
  });
});
$(document).ready(function() {
    $(".read-mores").click(function(e) {
      e.preventDefault();
      $(".hiddens").slideToggle();
      $(".initials").slideToggle();
    });
  });

  $(document).ready(function() {
    $(".read-moress").click(function(e) {
      e.preventDefault();
      $(".hiddenss").slideToggle();
      $(".initialss").slideToggle();
    });
  });
  const downloadLinkk = document.getElementById('download-link');
const drawerr = document.getElementById('drawer');
const drawerContentt = document.getElementById('drawer-content');

downloadLinkk.addEventListener('click', (event) => {
    event.preventDefault(); 
    event.stopPropagation(); 
    drawerr.classList.toggle('open'); 

    drawerContentt.addEventListener('click', (event) => {
        event.stopPropagation(); 
    });
});

document.addEventListener('click', () => {
    drawerr.classList.remove('open'); 
});
const switchButton = document.getElementById("flexSwitchCheckChecked");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  switchButton.checked = true;
}

switchButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});
const switchButtons = document.getElementById("flexSwitchCheckDefault");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  switchButtons.checked = true;
}


switchButtons.addEventListener("click", () => {
  document.body.classList.toggle("dark");


  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

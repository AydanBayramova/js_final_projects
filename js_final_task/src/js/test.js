const downloadLink = document.getElementById('download-link');
const drawer = document.getElementById('drawer');
const drawerContent = document.getElementById('drawer-content');

downloadLink.addEventListener('click', (event) => {
    event.preventDefault(); // Sayfanın yukarı kaymasını engellemek için
    event.stopPropagation(); // Olayın diğer öğelere etkisini engellemek için
    drawer.classList.toggle('open'); // open sınıfını ekleyip kaldırmak için toggle kullanın

    // Drawer içeriğine tıklanıldığında geri kapanmasını sağla
    drawerContent.addEventListener('click', (event) => {
        event.stopPropagation(); // Bu olayın üst öğelerine etki etmesini engelle
    });
});

// Sayfanın geri kalanına tıklama olayını dinleyin
document.addEventListener('click', () => {
    drawer.classList.remove('open'); // Drawer'ı kapatma sınıfını ekleyin
});

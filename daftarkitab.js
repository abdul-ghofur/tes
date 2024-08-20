// Get the button:
let mybutton = document.getElementById("myBtn");

// Saat pengguna menggulir ke bawah 20 piksel dari atas dokumen, tampilkan tombolnya
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2400) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Saat pengguna mengklik tombol tersebut, gulir ke bagian atas dokumen

function topFunction() {
  document.body.scrollTop = 0; 
  // Untuk Safari
  document.documentElement.scrollTop = 0; 
  // Untuk Chrome, Firefox, IE dan Opera
}

// Mengatur Tampilan Dark Mode 
          
 function toggleDarkMode() {
   const body = document.body;
     body.classList.toggle('dark-mode');
        }
const Gambar1 =  document.querySelector('section.b');
const tema =  document.querySelector('.container');
const toggle1 =  document.querySelector('.buttonChange .a.gambar1');
const toggle2 =  document.querySelector('.buttonChange .a.gambar2');
const toggle3 =  document.querySelector('.buttonChange .a.bg1');
const toggle4 =  document.querySelector('.buttonChange .a.bg2');

toggle1.addEventListener('click',function () {
   Gambar1.classList.toggle('gambar2'); 

});

toggle3.addEventListener('click',function () {
    tema.classList.toggle('tema2');
});

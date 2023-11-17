const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener(("click"), () => {
    nav.classList.add("visible");
})

cerrar.addEventListener(("click"), () =>{
    nav.classList.remove("visible");
})

const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_ie6z765';


   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Enviar');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});

(function(){
    
  const sliders = [...document.querySelectorAll('.grupos_body')];
  const buttonNext = document.querySelector('#next');
  const buttonBefore = document.querySelector('#before');
  let value;   

  buttonNext.addEventListener('click', ()=>{
      changePosition(1);
  });

  buttonBefore.addEventListener('click', ()=>{
      changePosition(-1);
  });

  const changePosition = (add)=>{
      const currentTestimony = document.querySelector('.grupos_body--show').dataset.id;
      value = Number(currentTestimony);
      value+= add;


      sliders[Number(currentTestimony)-1].classList.remove('grupos_body--show');
      if(value === sliders.length+1 || value === 0){
          value = value === 0 ? sliders.length  : 1;
      }

      sliders[value-1].classList.add('grupos_body--show');

  }

})();

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
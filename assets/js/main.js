/*=============== EXPANDED LIST ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]');


    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 60,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.tab-navigation a[href*=' + sectionId + ']')
               

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active');
            
		}else{
			sectionsClass.classList.remove('active')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)


/*=============== CLICK SECTIONS ACTIVE LINK ===============*/







/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 1000,
    delay:300,
    //reset: true, // Repeteción de animaciones
})

sr.reveal('.inicio__sombra', {origin:'bottom', delay: 800})
sr.reveal('.inicio__logo', {delay: 1600, distance: '200px', duration: 1500, scale: 0, rotate: {z:180}})
sr.reveal('.inicio__tabla', {delay: 1000, scale: 0, duration: 1500})
sr.reveal('.inicio__hoja-1, .inicio__hoja-2', {delay: 2200, scale: 0, duration: 1500, rotate: {z:360}})
sr.reveal('.inicio__tomate', {delay: 2800, scale: 0, duration: 1500, rotate: {z:90}})
sr.reveal('.inicio__pepperoni', {delay: 2600, scale: 0, duration: 1500, rotate: {z:180}})
sr.reveal('.inicio__datos', {delay: 1800})
sr.reveal('#nav__opciones', {delay: 100})
sr.reveal('#header', {delay: 100})
// sr.reveal('#nav-menu-opciones', {delay: 100})
sr.reveal('.main-container', {delay: 100})
sr.reveal('#secciones', {delay: 300})


// sr.reveal('.inicio__title', {delay: 1700})
// sr.reveal('.about__data', {origin: 'left'})
// sr.reveal('.about__images', {origin: 'right'})
// sr.reveal('.about__data', {origin: 'left'})
// sr.reveal('.about__coffee', {delay: 1000})
// sr.reveal('.about__leaf-1, .about__leaf-2', {delay: 1400, rotate: {z: 90}})
// sr.reveal('.products__card-menu, .products__card, .contact__info', {interval: 100})
// sr.reveal('.contact__shape', {delay: 600, scale: 0})
// sr.reveal('.contact__delivery', {delay: 1200})
// sr.reveal('.popular__swiper, .footer__container, .footer__copy')

/*=============== SWIPER POPULAR ===============*/

const swiperPopular = new Swiper('.menu__swiper', {
    // Optional parameters
    loop: true,
    grabCursor: true,
    spaceBetween: 31,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    breakpoints:{
        1150:{
            spaceBetween: 10,
        }
    }    
  });

  /*=============== PRODUCTOS SELECCIONADOS ===============*/

  const volverMenu = document.querySelector('#volver-menu');
  const productoSeleccionado = document.querySelector('#producto-seleccionado');
  const header = document.querySelector('#header');
  const navOpciones = document.querySelector('#nav__opciones');
  const secciones = document.querySelector('#secciones');
  const listadoMenues = document.querySelector('#menu-nuevo');
  const btnNapolitana = document.querySelector('#producto-napolitana');



  btnNapolitana.addEventListener("click", (e) => {

    //alert("Estas apretando el botón agregar producto");
    productoSeleccionado.classList.remove("oculto");
    header.classList.add("oculto");
    navOpciones.classList.add("oculto");
    secciones.classList.add("oculto");
    listadoMenues.classList.add("oculto");

  })



  volverMenu.addEventListener("click", (e) => {

    //alert("Estas apretando el botón agregar producto");
    productoSeleccionado.classList.add("oculto");
    header.classList.remove("oculto");
    navOpciones.classList.remove("oculto");
    secciones.classList.remove("oculto");
    listadoMenues.classList.remove("oculto");

})


/*=============== ACCION BARRA MENUES NUEVA ===============*/


const btnLeft = document.querySelector(".left-btn");
const btnRight = document.querySelector(".right-btn");
const tabMenu = document.querySelector(".tab-menu");

const iconVisibility = () =>{

    // scrollLeftValue: cantidad de desplazamiento actual del contenedor.

    let scrollLeftValue = Math.ceil(tabMenu.scrollLeft);

    //scrollableWidth: diferencia entre el ancho total del contenido y el ancho visible del contenedor.

    let scrollableWidth = tabMenu.scrollWidth - tabMenu.clientWidth;

    btnLeft.style.display = scrollLeftValue > 0 ? "block" : "none";
    btnRight.style.display = scrollableWidth > scrollLeftValue ? "block" : "none";
}


btnRight.addEventListener("click", () => {
    tabMenu.scrollLeft += 150;  
    // iconVisibility();
    setTimeout(() => iconVisibility(), 50);
})

btnLeft.addEventListener("click", () => {
    tabMenu.scrollLeft -= 150;
    setTimeout(() => iconVisibility(), 50);
}) 

window.onload = function (){

    // tabMenu.scrollWidth: Indica el ancho total del contenido dentro de tabMenu, incluyendo las partes que no son visibles (desplazables).
    // tabMenu.clientWidth: Representa el ancho visible del contenedor tabMenu (sin incluir las áreas desplazables).
    // window.innerWidth: Es el ancho total del área visible de la ventana del navegador.



    btnRight.style.display = tabMenu.scrollWidth > tabMenu.clientWidth || tabMenu.scrollWidth >= window.innerWidth ? "block" : "none";
    btnLeft.style.display = tabMenu.scrollWidth >= window.innerWidth ? "" : "none";
}

window.onresize = function (){
    btnRight.style.display = tabMenu.scrollWidth > tabMenu.clientWidth || tabMenu.scrollWidth >= window.innerWidth ? "block" : "none";
    btnLeft.style.display = tabMenu.scrollWidth >= window.innerWidth ? "" : "none";

    let scrollLeftValue = Math.round(tabMenu.scrollLeft);
    btnLeft.style.display = scrollLeftValue > 0 ? "block" : "none";
}

let activeDrag = false;

tabMenu.addEventListener("mousemove", (drag) =>{
    if(!activeDrag) return;
    tabMenu.scrollLeft -= drag.movementX;
    iconVisibility();
    tabMenu.classList.add("dragging");
})

document.addEventListener("mouseup", () =>{
    activeDrag = false;
    tabMenu.classList.remove("dragging");
})

tabMenu.addEventListener("mousedown", () => {
    activeDrag = true;
})


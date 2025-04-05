/*=============== EXPANDED LIST ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__lista a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active__link')
		}else{
			sectionsClass.classList.remove('active__link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)



/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
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
sr.reveal('#nav__opciones', {delay: 400})
sr.reveal('#header', {delay: 400})

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
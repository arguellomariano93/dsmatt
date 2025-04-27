/*=============== EXPANDED LIST ===============*/




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
sr.reveal('#contenedor-productos', {delay: 300})


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



//   btnNapolitana.addEventListener("click", (e) => {

//     //alert("Estas apretando el botón agregar producto");
//     productoSeleccionado.classList.remove("oculto");
//     header.classList.add("oculto");
//     navOpciones.classList.add("oculto");
//     secciones.classList.add("oculto");
//     listadoMenues.classList.add("oculto");

//   })



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

// Dar clase "active" segun tab que se clickea

const tabBtns = document.querySelectorAll("a.tab-btn");

const  tab_Nav = function(tabBtnClick){
    tabBtns.forEach((tabBtn) =>{
        tabBtn.classList.remove("active");
    });

    tabBtns[tabBtnClick].classList.add("active");
}

tabBtns.forEach((tabBtn, i) =>{
    tabBtn.addEventListener("click", ()=>{
        tab_Nav(i);
    })
});




//inicio de js para manejo de productos


//array productos

const productosArray = [
    {
        id: "pizza-napolitana",
        titulo: "Napolitana",
        imagen: "./assets/img/pizza-01.png",
        categoria: {
            nombre: "Pizzas",
            id: "pizza"
        },
        precio: "7000.25"
    },
    {
        id: "pizza-muzzarella",
        titulo: "Muzzarella",
        imagen: "./assets/img/pizza-02.png",
        categoria: {
            nombre: "Pizzas",
            id: "pizza"
        },
        precio: "5500.00"
    },
    {
        id: "pizza-pepperoni",
        titulo: "Pepperoni",
        imagen: "./assets/img/pizza-03.png",
        categoria: {
            nombre: "Pizzas",
            id: "pizza"
        },
        precio: "9540.15"
    },
    {
        id: "pizza-fugazzeta",
        titulo: "Fugazzeta",
        imagen: "./assets/img/pizza-04.png",
        categoria: {
            nombre: "Pizzas",
            id: "pizza"
        },
        precio: "7000.25"
    },
    {
        id: "pizza-completa",
        titulo: "Completa",
        imagen: "./assets/img/pizza-05.png",
        categoria: {
            nombre: "Pizzas",
            id: "pizza"
        },
        precio: "13500.00"
    },
    {
        id: "hambur-simple",
        titulo: "Simple",
        imagen: "./assets/img/hamburguesa-03.png",
        categoria: {
            nombre: "Hamburguesas",
            id: "hamburguesa"
        },
        precio: "5200.25"
    },
    {
        id: "hambur-especial",
        titulo: "Especial",
        imagen: "./assets/img/hamburguesa-02.png",
        categoria: {
            nombre: "Hamburguesas",
            id: "hamburguesa"
        },
        precio: "7000.00"
    },
    {
        id: "hambur-completa",
        titulo: "Completa",
        imagen: "./assets/img/hamburguesa-01.png",
        categoria: {
            nombre: "Hamburguesas",
            id: "hamburguesa"
        },
        precio: "7000.25"
    },
    {
        id: "empanada-carne-frita",
        titulo: "De Carne Fritas",
        imagen: "./assets/img/hamburguesa-01.png",
        categoria: {
            nombre: "Empanadas",
            id: "empanada"
        },
        precio: "15000.25"
    },
    {
        id: "empanada-pollo-frita",
        titulo: "De Pollo Fritas",
        imagen: "./assets/img/hamburguesa-01.png",
        categoria: {
            nombre: "Empanadas",
            id: "empanada"
        },
        precio: "15000.25"
    },
    {
        id: "lomopizza",
        titulo: "LomoPizza",
        imagen: "./assets/img/hamburguesa-03.png",
        categoria: {
            nombre: "LomoPizzas",
            id: "lomopizza"
        },
        precio: "25000.25"
    }
];


const contenedorProductos = document.querySelector("#contenedor-productos");
const tabDeMenues = document.querySelector("#listadoDeMenues");
let botonesAgregar = document.querySelectorAll(".producto__boton");
let numeroPedidos = document.querySelector("#numero-pedidos");

function cargarProductos() {
    const categorias = {};

    // Agrupar productos por categoría
    productosArray.forEach(producto => {
        const categoriaId = producto.categoria.id;

        if (!categorias[categoriaId]) {
            categorias[categoriaId] = {
                nombre: producto.categoria.nombre,
                productos: []
            };
        }

        categorias[categoriaId].productos.push(producto);
    });

    // Crear secciones para cada categoría
    for (const categoriaId in categorias) {
        const { nombre, productos } = categorias[categoriaId];

        const section = document.createElement("section");
        section.classList.add("section", categoriaId);
        section.id = categoriaId; // Asignar id basado en el id de la categoría

        const titulo = document.createElement("h2");
        titulo.textContent = nombre;
        titulo.classList.add("titulo__menu");
        section.appendChild(titulo);

        const tabProducto = document.createElement("ul");
        tabProducto.classList.add("tab-menu");

        // Crear el <li> para la categoría y añadirlo al tabDeMenues
        const liCategoria = document.createElement("li");
        liCategoria.classList.add("tab-btn");
        liCategoria.innerHTML = `
            <a href="#${categoriaId}" class="tab-btn">${nombre}</a>
        `;
        tabDeMenues.appendChild(liCategoria);

        productos.forEach(producto => {
            const article = document.createElement("article");
            article.classList.add("producto__tarjeta", "producto");
            const precioFormateado = formatearNumeroPrecio(producto.precio);

            article.innerHTML = `
               <div class="producto__imagen">
                  <div class="producto__sombra"></div>
                  <img src="${producto.imagen}" alt="${producto.titulo}" class="producto__principal">
               </div>
               <div class="producto__dato">
                  <h3 class="producto__nombre">${producto.titulo}</h3>
                  <span class="producto__precio">$ ${precioFormateado}</span>
               </div>
               <button class="producto__boton" id="${producto.id}">
                  <i class="ri-shopping-cart-fill"></i>
               </button>
            `;

            section.appendChild(article);
        });

        contenedorProductos.appendChild(section);
    }

    // Agregar sección de "fin de productos"
    const finProductos = document.createElement("section");
    finProductos.classList.add("section", "fin__productos");
    finProductos.id = "fin-productos";

    finProductos.innerHTML = `
        <div class="titulo__menu"></div>
        <article class="producto__tarjeta producto__fin">        
            <div class="producto__fin">
                <img src="assets/img/logoDsMatt.png" alt="imagen" class="logo__fin">
                <h3>¡Has llegado al final de la lista!</h3>
                <span>Recorré nuestras categorías y elegí lo que más te guste</span>                  
            </div>   
        </article>
    `;

    contenedorProductos.appendChild(finProductos);
    actualizarBotonesAgregar();
    //console.log(botonesAgregar);
}

cargarProductos();




//boton agregar producto

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto__boton");

    botonesAgregar.forEach(boton =>{
        boton.addEventListener("click", agregarAlCarrito);
    });
   
}

let productosEnCarrito;
const productosEnCarritoLS = JSON.parse(localStorage.getItem("productos-en-carrito"));

if (productosEnCarritoLS){
    productosEnCarrito = productosEnCarritoLS;
    actualizarNumeroPedidos();
} else{
    productosEnCarrito = [];
}

function agregarAlCarrito(e){
    const idBoton = e.currentTarget.id;
    const productoAgregado = productosArray.find(producto => producto.id === idBoton);
    //console.log(productoAgregado); 

    if(productosEnCarrito.some(producto => producto.id === idBoton)){
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    }else{
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);

    }
   
    //console.log(productosEnCarrito);
    actualizarNumeroPedidos();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
};

function actualizarNumeroPedidos (){
    let nuevoNumeroPedidos = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    //console.log(numeroPedidos);
    numeroPedidos.innerText = nuevoNumeroPedidos;
};



/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]');
//console.log(sections)


    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 60,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.tab-navigation a[href*=' + sectionId + ']')
              //console.log(sectionId);
              //console.log(sectionsClass);
               

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active');
            
		}else{
			sectionsClass.classList.remove('active')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive);

//función para formatear el importe con separador de miles "." y decimales ","
function formatearNumeroPrecio(importe){  
    let precio = parseFloat(importe);                 
    let numeroFormateado = precio.toFixed(2).replace(".", ",");
    // Agregar separador de miles
    numeroFormateado = numeroFormateado.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    return numeroFormateado;  
}
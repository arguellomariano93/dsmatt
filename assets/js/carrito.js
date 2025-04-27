const productosEnCarritos = JSON.parse(localStorage.getItem("productos-en-carrito"));
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const carritoConProductos = document.querySelector("#carrito-con-productos");
const carritoVacio = document.querySelector("#carrito-vacio");
const carritoAcciones = document.querySelector("#carrito-acciones");
const montoTotal = document.querySelector("#monto-total");

function cargarProductosCarrito(){
    if (productosEnCarritos && productosEnCarritos.length > 0){

        contenedorCarritoProductos.classList.remove("oculto");
        carritoAcciones.classList.remove("oculto");
        carritoVacio.classList.add("oculto");

        contenedorCarritoProductos.innerHTML = "";
        productosEnCarritos.forEach(producto =>{            
            let precio = parseFloat(producto.precio); // Convertir la cadena a un número
            let cantidad = parseFloat(producto.cantidad);
            let resultado = 0;        
            let precioRedondeado = parseFloat(precio.toFixed(2)); // Redondear a dos decimales       
            resultado = precioRedondeado * cantidad; // Multiplicar por la cantidad
            let resultadoRedondeado = parseFloat(resultado.toFixed(2));            
            let numeroFormateado = resultadoRedondeado.toFixed(2).replace(".", ","); 

            // Agregar separador de miles
            numeroFormateado = numeroFormateado.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

            const div = document.createElement("div");
            div.classList.add("contenedor__carrito");
            div.innerHTML = `
                    <div class="carrito__productos">
                        <div class="carrito__producto">
                            <div class="img__carrito-seleccionado">
                                <img src="${producto.imagen}" alt="${producto.titulo}" class="img__carrito">
                            </div>                                    
                            <div class="carrito__producto-titulo">   
                                <small>${producto.categoria.nombre}</small>
                                <h3>${producto.titulo}</h3>
                            </div>                  
                            <div class="carrito__producto-seleccionado">                     
                                <p id="${producto.id}">$ ${numeroFormateado}</p>
                                <div class="cantidad__seleccionada">
                                    <button class="restar__cantidad" id="${producto.id}">
                                        <i class="ri-delete-bin-5-fill"></i>
                                    </button>                                
                                    <span id="${producto.id}">${producto.cantidad}</span>                                 
                                    <button class="aumentar__cantidad" id="${producto.id}">
                                        <i class="ri-add-large-fill"></i>
                                    </button>
                                </div>                     
                            </div>                     
                        </div>                 
                    </div>          
            
                `;            

            contenedorCarritoProductos.append(div);   
            actualizarCantidadAgregar();
            actualizarCantidadRestar();
            actualizarTotal();
        })

        // Agregar sección de "fin de productos"
        const finProductos = document.createElement("div");
        finProductos.classList.add("contenedor__carrito-fin");

        finProductos.innerHTML = `
                <div class="carrito__productos-fin">                             
                </div>            
             `;
        contenedorCarritoProductos.appendChild(finProductos);        
    } else{
        productosEnCarrito = [];
        contenedorCarritoProductos.classList.add("oculto");
        carritoAcciones.classList.add("oculto");
        carritoVacio.classList.remove("oculto");
    }
}

cargarProductosCarrito();


//boton aumenta cantidad del producto

function actualizarCantidadAgregar() {
    botonesAgregar = document.querySelectorAll(".aumentar__cantidad");

    botonesAgregar.forEach(boton =>{
        boton.addEventListener("click", agregarCantidadCarrito);
    });   
}


function agregarCantidadCarrito(e){
    const idBoton = e.currentTarget.id;    
    //const productoAgregado = productosEnCarritos.find(producto => producto.id === idBoton);   

    if(productosEnCarritos.some(producto => producto.id === idBoton)){
        const index = productosEnCarritos.findIndex(producto => producto.id === idBoton);        
        productosEnCarritos[index].cantidad++;
        const spanCantidad = document.querySelector("span#"+idBoton);
        spanCantidad.innerText = productosEnCarritos[index].cantidad;

        let precio = parseFloat( productosEnCarritos[index].precio); // Convertir la cadena a un número
        let cantidad = parseFloat(productosEnCarritos[index].cantidad);
        let resultado = 0;        
        let precioRedondeado = parseFloat(precio.toFixed(2)); // Redondear a dos decimales        
    
        resultado = precioRedondeado * cantidad; // Multiplicar por la cantidad
        let resultadoRedondeado = parseFloat(resultado.toFixed(2));
        let numeroFormateado = resultadoRedondeado.toFixed(2).replace(".", ","); 

        // Agregar separador de miles
        numeroFormateado = numeroFormateado.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

        const pPrecio = document.querySelector("p#"+idBoton);
        pPrecio.innerText = ("$ " +numeroFormateado); 
        cargarProductosCarrito();       
    } else{
        //productoAgregado.cantidad = 1;
        //productosEnCarritos.push(productoAgregado);

    }   
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarritos));
};




//boton disminuir cantidad del producto


function actualizarCantidadRestar() {
    botonesAgregar = document.querySelectorAll(".restar__cantidad");

    botonesAgregar.forEach(boton =>{
        boton.addEventListener("click", restarCantidadCarrito);
    });
   
}


function restarCantidadCarrito(e){
    const idBoton = e.currentTarget.id;
    //console.log("el id es " + idBoton);
    const productoAgregado = productosEnCarritos.find(producto => producto.id === idBoton);
    //console.log(productoAgregado); 

    if (productoAgregado.cantidad > 1 ){
        
        if(productosEnCarritos.some(producto => producto.id === idBoton)){
        const index = productosEnCarritos.findIndex(producto => producto.id === idBoton);
        //console.log(index);
        //console.log(productoAgregado.cantidad);
        productosEnCarritos[index].cantidad--;
        //console.log(productoAgregado.cantidad);
        const spanCantidad = document.querySelector("span#"+idBoton);
        //console.log(spanCantidad);
        spanCantidad.innerText = productosEnCarritos[index].cantidad;


        let precio = parseFloat( productosEnCarritos[index].precio); // Convertir la cadena a un número
        let cantidad = parseFloat(productosEnCarritos[index].cantidad);
        let resultado = 0;        
        let precioRedondeado = parseFloat(precio.toFixed(2)); // Redondear a dos decimales
        //console.log(`El precio redondeado es ${precioRedondeado}, la cantidad es de ${producto.cantidad}`);

        
    
        resultado = precioRedondeado * cantidad; // Multiplicar por la cantidad
        let resultadoRedondeado = parseFloat(resultado.toFixed(2));
        //console.log(`El resultado es $ ${resultadoRedondeado}`);
        let numeroFormateado = resultadoRedondeado.toFixed(2).replace(".", ","); 

        // Agregar separador de miles
        numeroFormateado = numeroFormateado.replace(/\B(?=(\d{3})+(?!\d))/g, ".");


        const pPrecio = document.querySelector("p#"+idBoton);
        //console.log(pPrecio);
        pPrecio.innerText = ("$ " +numeroFormateado);
        cargarProductosCarrito();
        
    }else{
        //productoAgregado.cantidad = 1;
        //productosEnCarritos.push(productoAgregado);

    }   
    //console.log(productosEnCarritos);   

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarritos));

    } else {        
        const index = productosEnCarritos.findIndex(producto => producto.id === idBoton);        
        productosEnCarritos.splice(index, 1);
        cargarProductosCarrito();

        localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarritos));
    }    
};

//función para actualizar el total general
function actualizarTotal() {
    totalCalculado = productosEnCarritos.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
    let montoTotalFormateado = formatearNumeroPrecio(totalCalculado);
    montoTotal.innerText = `$ ${montoTotalFormateado}`; 
}


//función para formatear el importe con separador de miles "." y decimales ","
function formatearNumeroPrecio(importe){  
        let precio = parseFloat(importe);                 
        let numeroFormateado = precio.toFixed(2).replace(".", ",");
        // Agregar separador de miles
        numeroFormateado = numeroFormateado.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

        return numeroFormateado;  
}
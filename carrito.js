const btnCart = document.querySelector(".container-cart-icon");
const containerCartProducts = document.querySelector(".container-cart-products");

btnCart.addEventListener("click", function () {
	containerCartProducts.classList.toggle("hidden-cart");
});


let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const mostrarProductos = (productos) => {
	const contenedorProductos = document.querySelector(".product-list");
	contenedorProductos.innerHTML = "";
	productos.forEach((producto) => {
		const li = document.createElement("li");
		li.innerHTML = `<div class="card my-5 m-3 ">
    <img class="card-img-top" src="${producto.imagen}" alt="${producto.nombre}">
        <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>         
            <p class="product-description">${producto.descripcion}</p>
            
            <h4> $${producto.precioAnterior}</h4>   
            <p class="product-price">$${producto.precio}</p>
            <button id="agregar-${producto.id}" class="Comprar">Agregar al carrito</button>

</div>
</div>`;
            
		contenedorProductos.appendChild(li);
		const boton = document.getElementById(`agregar-${producto.id}`);
		boton.addEventListener("click", () => {
			agregarAlCarrito(producto.id);
			Toastify({
				text: "Producto agregado!",
				className: "info",
				style: {
				  background: "linear-gradient(to right, #00b09b, #96c93d)",
				  duration: 222000,
				  gravity: top,
				}
			   
			  }).showToast();
		});
	});
};

const agregarAlCarrito = (id) => {
	if (!carrito.some((producto) => producto.id === id)) {
		const producto = productos.find((producto) => producto.id === id);
    carrito.push({ ...producto, cantidad: 1 });
	} else {
		const producto = carrito.find((producto) => producto.id === id);
		producto.cantidad++;
	}
	
	localStorage.setItem("carrito", JSON.stringify(carrito));
	mostrarCarrito();
};

const mostrarCarrito = () => {
	const contenedorCarrito = document.querySelector(".carrito");
	contenedorCarrito.innerHTML = "";
	if (carrito.length > 0) {
		const productsCart = document.createElement("ul");
		productsCart.classList.add("productsCart");
		contenedorCarrito.appendChild(productsCart);
		const contenedorTotal = document.createElement("p");
		
    	contenedorTotal.classList.add("totalCarrito")

		actualizarTotal(contenedorTotal);
		contenedorCarrito.appendChild(contenedorTotal);
		carrito.forEach((producto) => {
			const li = document.createElement("li");
			li.innerHTML = `
				<p class="product-stock">${producto.cantidad}u.</p>
			<img class="img-card-top" src="${producto.imagen}" alt="${producto.nombre}" />
			<div class="productContent">
				<h3>${producto.nombre}</h3>
				<p class="product-description">${producto.descripcion}</p>
				<p class="product-price">$${producto.precio}</p>
				<p class="product-stock">${producto.cantidad}u.</p>
			</div>
			<button id="eliminar-${producto.id}" class="remove">Eliminar</button>
     
		`;
			productsCart.appendChild(li);
			const boton = document.getElementById(`eliminar-${producto.id}`);
			boton.addEventListener("click", () => {
				eliminarProducto(producto.id);
				Toastify({
					text: "Producto Eliminado!",
					className: "info",
					style: {
					  background: "linear-gradient(to right, #141414,  #ff2828)",
					  duration: 3000,
					  gravity: top,
					}
				   
				  }).showToast();
			});
		});
	} else {
		contenedorCarrito.innerHTML = '<p class="empty">No hay productos</p>';
	}
};

const eliminarProducto = (id) => {
	carrito = carrito.filter((producto) => producto.id !== id);
	localStorage.setItem("carrito", JSON.stringify(carrito));
	mostrarCarrito();

  }
;

const actualizarTotal = (contenedor) => {
	const total = carrito.reduce((acumulador, producto) => acumulador + producto.precio * producto.cantidad, 0);
	contenedor.textContent = `Total: $${total} `;
};


mostrarProductos(productos);
mostrarCarrito(); 

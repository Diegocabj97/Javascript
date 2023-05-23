class AllProducts{
  constructor(id,nombre,imagen,precioAnterior,precio,descripcion){
      this.id=id;
      this.nombre=nombre;
      this.imagen=imagen;
      this.precioAnterior=precioAnterior;
      this.precio=precio;
      this.descripcion=descripcion
  }
}

const Productos=[];
fetch("/Productos.json")
.then(Response=>Response.json())
.then(data=>{
  data.forEach(producto => {
      Productos.push(new AllProducts(producto.id,producto.nombre,producto.imagen,producto.precioAnterior,producto.precio,producto.descripcion))
  });
})


const productos =JSON.parse(localStorage.getItem("Productos")) || [];

const botonMeAMa=document.getElementById("MenorAMayor").addEventListener('click', function() {
  ordenarCardsPorPrecio(true);
});

let botonMaAMe=document.getElementById("MayorAMenor").addEventListener('click', function() {
  ordenarCardsPorPrecio(false);
});

function ordenarCardsPorPrecio(ascendente) {
  const cardsContainer = document.getElementById('cardsContainer');
  const cards = Array.from(cardsContainer.getElementsByClassName('card'));

  cards.sort((cardA, cardB) => {
    const priceA = parseFloat(cardA.querySelector('.product-price').textContent.replace(/\$/g, ''));
    const priceB = parseFloat(cardB.querySelector('.product-price').textContent.replace(/\$/g, ''));

    if (ascendente) {
      return priceA - priceB;
    } else {
      return priceB - priceA;
    }
  });

  cards.forEach(card => cardsContainer.appendChild(card));
}ordenarCardsPorPrecio(true)
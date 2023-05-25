
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
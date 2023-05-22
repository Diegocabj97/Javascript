hidemensajeSinResultados()

let cardOfertas =document.getElementsByClassName("cardsOfertas")
let cards =document.getElementsByClassName("card")
function hidemensajeSinResultados() {
    let message = document.getElementById("mensajeSinResultados");
    message.style.display = "none";
    let ordenarbutton=document.getElementById("dropdownOrdenar");
    ordenarbutton.style.display="block"
  }
function mensajeSinResultados() {
    let ordenarbutton=document.getElementById("dropdownOrdenar");
    ordenarbutton.style.display="none"
    let message = document.getElementById("mensajeSinResultados");
    message.style.display = "block";
    
}
  
  
  filtroTodos.addEventListener("change", function(Event){
    function filterCards() {
        let input = document.getElementById("filtroVideos").value.toLowerCase();
        let cards = document.getElementsByClassName("card");
        
        let resultadosEncontrados = false;
        for (let i = 0; i < cards.length; i++) {
            let title = cards[i].querySelector(".card-title").textContent.toLowerCase();
            if (title.includes("")) {
                cards[i].style.display = "";
                resultadosEncontrados = true;
            } else {
                cards[i].style.display = "none";
            }
        }
        return resultadosEncontrados;
    }
    
                let resultados = filterCards();
            !resultados ? mensajeSinResultados() :  hidemensajeSinResultados();
})


filtroMouses.addEventListener("change", function(Event){
    function filterCards() {
        let input = document.getElementById("filtroMouses").value.toLowerCase();
        let cards = document.getElementsByClassName("card");
        
        let resultadosEncontrados = false;
        for (let i = 0; i < cards.length; i++) {
            let title = cards[i].querySelector(".card-title").textContent.toLowerCase();
            if (title.includes("mouse")) {
                cards[i].style.display = "";
                resultadosEncontrados = true;
            } else {
                cards[i].style.display = "none";
            }
        }
        return resultadosEncontrados;
    }
    
   
                let resultados = filterCards();
            !resultados ? mensajeSinResultados() :  hidemensajeSinResultados();
})
filtroAlm.addEventListener("change", function(Event){function filterCards() {
    let input = document.getElementById("filtroVideos").value.toLowerCase();
    let cards = document.getElementsByClassName("card");
    
    let resultadosEncontrados = false;
    for (let i = 0; i < cards.length; i++) {
        let title = cards[i].querySelector(".card-title").textContent.toLowerCase();
        if (title.includes("disco")) {
            cards[i].style.display = "";
            resultadosEncontrados = true;
        } else {
            cards[i].style.display = "none";
        }
    }
    return resultadosEncontrados;
}

 
                let resultados = filterCards();
            !resultados ? mensajeSinResultados() :  hidemensajeSinResultados();
})

    filtroVideos.addEventListener("change", function(Event){
        function filterCards() {
            let input = document.getElementById("filtroVideos").value.toLowerCase();
            let cards = document.getElementsByClassName("card");
            
            let resultadosEncontrados = false;
            for (let i = 0; i < cards.length; i++) {
                let title = cards[i].querySelector(".card-title").textContent.toLowerCase();
                if (title.includes("nvidia")) {
                    cards[i].style.display = "";
                    resultadosEncontrados = true;
                } else {
                    cards[i].style.display = "none";
                }
            }
            return resultadosEncontrados;
        }
        
         
                         let resultados = filterCards();
                !resultados ? mensajeSinResultados() :  hidemensajeSinResultados();
    });
    
    filtroMother.addEventListener("change", function(Event){
        function filterCards() {
            let input = document.getElementById("filtroVideos").value.toLowerCase();
            let cards = document.getElementsByClassName("card");
            
            let resultadosEncontrados = false;
            for (let i = 0; i < cards.length; i++) {
                let title = cards[i].querySelector(".card-title").textContent.toLowerCase();
                if (title.includes("mother")) {
                    cards[i].style.display = "";
                    resultadosEncontrados = true;
                } else {
                    cards[i].style.display = "none";
                }
            }
            return resultadosEncontrados;
        }
        
         
                let resultados = filterCards();
            !resultados ? mensajeSinResultados() :  hidemensajeSinResultados();
                });
    filtroProce.addEventListener("change", function(Event){
        function filterCards() {
            let input = document.getElementById("filtroVideos").value.toLowerCase();
            let cards = document.getElementsByClassName("card");
            
            let resultadosEncontrados = false;
            for (let i = 0; i < cards.length; i++) {
                let title = cards[i].querySelector(".card-title").textContent.toLowerCase();
                if (title.includes("proce")) {
                    cards[i].style.display = "";
                    resultadosEncontrados = true;
                } else {
                    cards[i].style.display = "none";
                }
            }
            return resultadosEncontrados;
        }
        
         
                let resultados = filterCards();
            !resultados ? mensajeSinResultados() :  hidemensajeSinResultados();
    });
    filtroFuentes.addEventListener("change", function(Event){
        function filterCards() {
            let input = document.getElementById("filtroVideos").value.toLowerCase();
            let cards = document.getElementsByClassName("card");
            
            let resultadosEncontrados = false;
            for (let i = 0; i < cards.length; i++) {
                let title = cards[i].querySelector(".card-title").textContent.toLowerCase();
                if (title.includes("fuente")) {
                    cards[i].style.display = "";
                    resultadosEncontrados = true;
                } else {
                    cards[i].style.display = "none";
                }
            }
            return resultadosEncontrados;
        }
        
         
                let resultados = filterCards();
            !resultados ? mensajeSinResultados() :  hidemensajeSinResultados();
    });
        filtroRams.addEventListener("change", function(Event){
            function filterCards() {
                let input = document.getElementById("filtroVideos").value.toLowerCase();
                let cards = document.getElementsByClassName("card");
                
                let resultadosEncontrados = false;
                for (let i = 0; i < cards.length; i++) {
                    let title = cards[i].querySelector(".card-title").textContent.toLowerCase();
                    if (title.includes("ram")) {
                        cards[i].style.display = "";
                        resultadosEncontrados = true;
                    } else {
                        cards[i].style.display = "none";
                    }
                }
                return resultadosEncontrados;
            }
            
            
                let resultados = filterCards();
            !resultados ? mensajeSinResultados() :  hidemensajeSinResultados();
        });
        filtroMouseP.addEventListener("change", function(Event){
            function filterCards() {
                let input = document.getElementById("filtroVideos").value.toLowerCase();
                let cards = document.getElementsByClassName("card");
                
                let resultadosEncontrados = false;
                for (let i = 0; i < cards.length; i++) {
                    let title = cards[i].querySelector(".card-title").textContent.toLowerCase();
                    if (title.includes("mouse p")) {
                        cards[i].style.display = "";
                        resultadosEncontrados = true;
                    } else {
                        cards[i].style.display = "none";
                    }
                }
                return resultadosEncontrados;
            }
            
             
                let resultados = filterCards();
            !resultados ? mensajeSinResultados() :  hidemensajeSinResultados();
                    });

        filtroMoni.addEventListener("change", function(Event){
            function filterCards() {
                let input = document.getElementById("filtroVideos").value.toLowerCase();
                let cards = document.getElementsByClassName("card");
                
                let resultadosEncontrados = false;
                for (let i = 0; i < cards.length; i++) {
                    let title = cards[i].querySelector(".card-title").textContent.toLowerCase();
                    if (title.includes("monitor")) {
                        cards[i].style.display = "";
                        resultadosEncontrados = true;
                    } else {
                        cards[i].style.display = "none";
                    }
                }
                return resultadosEncontrados;
            }
            
            
            let resultados = filterCards();
        !resultados ? mensajeSinResultados() :  hidemensajeSinResultados();
        });
        filtroAuris.addEventListener("change", function(Event){
            function filterCards() {
                let input = document.getElementById("filtroVideos").value.toLowerCase();
                let cards = document.getElementsByClassName("card");
                
                let resultadosEncontrados = false;
                for (let i = 0; i < cards.length; i++) {
                    let title = cards[i].querySelector(".card-title").textContent.toLowerCase();
                    if (title.includes("Auri")) {
                        cards[i].style.display = "";
                        resultadosEncontrados = true;
                    } else {
                        cards[i].style.display = "none";
                    }
                }
                return resultadosEncontrados;
            }
            
             
                let resultados = filterCards();
            !resultados ? mensajeSinResultados() :  hidemensajeSinResultados();
        });
        filtroSillas.addEventListener("change", function(Event){
            function filterCards() {
                let input = document.getElementById("filtroVideos").value.toLowerCase();
                let cards = document.getElementsByClassName("card");
                
                let resultadosEncontrados = false;
                for (let i = 0; i < cards.length; i++) {
                    let title = cards[i].querySelector(".card-title").textContent.toLowerCase();
                    if (title.includes("Silla")) {
                        cards[i].style.display = "";
                        resultadosEncontrados = true;
                    } else {
                        cards[i].style.display = "none";
                    }
                }
                return resultadosEncontrados;
            }
            
             
                let resultados = filterCards();
            !resultados ? mensajeSinResultados() :  hidemensajeSinResultados();
        });
        
        filtroTeclados.addEventListener("change", function(Event){
            function filterCards() {
                let input = document.getElementById("filtroVideos").value.toLowerCase();
                let cards = document.getElementsByClassName("card");
                
                let resultadosEncontrados = false;
                for (let i = 0; i < cards.length; i++) {
                    let title = cards[i].querySelector(".card-title").textContent.toLowerCase();
                    if (title.includes("teclado")) {
                        cards[i].style.display = "";
                        resultadosEncontrados = true;
                    } else {
                        cards[i].style.display = "none";
                    }
                }
                return resultadosEncontrados;
            }
            
             
                let resultados = filterCards();
            !resultados ? mensajeSinResultados() :  hidemensajeSinResultados();
        });
        
        
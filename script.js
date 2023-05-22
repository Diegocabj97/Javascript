
                                /* Bienvenida al cliente y feedback mediante prompts */

/* 
const anio = 2023
let intentos=1
let identificar = true


do{
    let user = prompt ("Decime tu nombre")
    if(user === "" || user === null){
        break
    }
    

    if (user == "Diego Adrian" && intentos<=3){
        alert("Bienvenido " + user)

    identificar=false
    }
    else{
        alert ("no se reconoce el usuario: " + user)
        intentos++
        if(intentos>3){
            alert("Usted supero los 3 intentos")
            console.error("No hay mas intentos")
            break;
        }

    }
}  while(identificar)

                                //Filtro de edad

let aniodenacimiento= parseInt(prompt("Ingrese su año de nacimiento")) 

let edad =(anio - aniodenacimiento)


if (edad > 18 && edad <60)
   
    {
        alert("Eres mayor de edad, puedes ingresar al sitio web :)")
    } else if(edad>80){
        alert ("No se permite el ingreso a personas mayores de 80 años :(")
    } else if(edad<18){
        alert("Usted no es mayor de edad, no puede ingresar al sitio web :(")
    }else{
        alert("Debe ingresar sus datos correctamente para ingresar al sitio")
    }



let ayuda = confirm("Buen día! Puedo ayudarte con el producto que buscabas?")

if (ayuda===true){
    let producto = prompt("Que producto buscabas? Ingresa el producto")
    let marca = prompt("Selecciona la marca del " + producto)

    switch(marca){
        case "amd":
            alert ("Tenemos " + producto + " de la marca " + marca)
            break;

        case "nvidia":
        alert ("Tenemos " + producto + " de la marca " + marca)
            break;

        case "gigabyte":
            alert ("Tenemos " + producto + " de la marca " + marca)    
            break;
        
        default:
            alert("Lo siento, no tenemos productos de la marca" + marca)
            break;
    }
} */

                                // Suma del IVA para el carrito

/* 
function precioConIva (importe){
    let resultado = importe * IVA
    if (typeof importe === 'number' && !isNaN(importe)){
        
        alert ("El importe con iva incluido es: " + resultado)
    }else{
        alert("El importe ingresado no es válido")
        
    }
}

function precioFinal(){
    let precioProducto = parseInt(prompt ("Ingresa el precio del producto"))
    precioConIva (precioProducto)
}

precioFinal() */

                                // Calculadora de precios

/* function calculadora(numero1, numero2, operacion){
    let numero1 = parseInt(prompt ("Ingresa el primer numero"))
    let numero2 = parseInt(prompt ("Ingresa el segundo numero"))

    switch(operacion){
        case "+":
            return numero1 + numero2;
            break;
        case "-":
            return numero1 - numero2;
            break;
        case "*":
            return numero1 * numero2;
            break;
        case "/":
            return numero1 / numero2;
            break;
        default:
            return 0;
            break;
        }
} */            

                                                                // ARRAYS


const IVA=1.21



const Producto = function(nombre,precio,stock){

    this.nombre= nombre,
    this.precio= precio,
    this.stock= stock,
        this.precioMasIva = this.precio*IVA

        this.ajustarStock = function(unidadesVendidas){
            if (Number.isInteger(unidadesVendidas) && unidadesVendidas > 0 && this.stock >= unidadesVendidas) {
                this.stock -= unidadesVendidas;
                return true;
            }else{
                return false
            }
        }
    }
    
        

    
        let producto1= new Producto ("Monitor",15000,1)
        let producto2= new Producto ("Teclado",18000,10)
        let producto3= new Producto ("Procesador",24000, 5)
        let producto4= new Producto ("Video",27000,3)
        let producto5= new Producto ("Mouse Logitech G703",19000,2)
          

       

    let listaProductos =[producto1, producto2,producto3,producto4,producto5]
   

    
    function agregarProducto(){
        let nombre = prompt("ingresa el nombre del producto a agregar").trim();
        let precio =parseFloat(prompt("Ingresa el precio del producto a agregar"));
        let stock = parseInt(prompt("Ingresa el stock actual"))

        if (isNaN(precio) || isNaN(stock) || nombre === ""){
            alert("Por favor ingresa valores validos para agregar un producto.");
            return
        }
        let producto = new Producto(nombre,precio,stock)
        
        if (listaProductos.some((p) => p.nombre === producto.nombre)) {
            alert("El producto ya existe en la lista, vuelve a intentarlo");
            return agregarProducto();
        }else{
            alert ("El producto ha sido agregado a la lista")
        }
        
          listaProductos.push(producto);
          console.table(listaProductos);
        }
    
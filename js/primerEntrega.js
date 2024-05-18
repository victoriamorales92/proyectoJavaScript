alert("Bienvenido a Rise Capital!")

let ingreseSuNombre = prompt("Ingrese su nombre:");
let ingreseSuApellido = prompt("Ingrese su apellido:");
const VACIO = ""; 

if(ingreseSuNombre != VACIO && ingreseSuApellido != VACIO) {; 
alert("Su nombre es: " + ingreseSuNombre + " " +  " y su apellido es: " + ingreseSuApellido ); 
} else {
    alert("Falta ingresar información");
}

console.log(ingreseSuNombre != VACIO && ingreseSuApellido != VACIO)

let edadIngresada = prompt("Ingrese su Edad: ");

if (edadIngresada >= 21) { 
    alert("Su edad es: " + edadIngresada + ". Agradecemos su interés en operar con nosotros.");
} else if (edadIngresada > 0 && edadIngresada < 21) { 
    alert("Su edad es: " + edadIngresada + ". Para operar con nosotros, debe tener más de 21 años.Agradecemos su comprensión.");
} else if (edadIngresada <= 0) { 
    alert("La edad ingresada debe ser mayor a 0. Por favor, ingrese una edad válida.");
} else {
    alert("La edad ingresada no es válida. Por favor, ingrese una edad correcta.");
}



function despedir(){
    alert("Gracias por visitar nuestro sitio.");
}

despedir();


let mensajeDespedida = "¡Recorda seguirnos en nuestras redes sociales!";

for (let i = 0; i < 1; i++) {
    alert(mensajeDespedida);
}

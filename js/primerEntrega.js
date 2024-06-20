// alert("Bienvenido a Rise Capital!")

// let ingreseSuNombre = prompt("Ingrese su nombre:");
// let ingreseSuApellido = prompt("Ingrese su apellido:");

// if (ingreseSuNombre !== "" && ingreseSuApellido !== "") {
//     alert("Su nombre es: " + ingreseSuNombre + " y su apellido es: " + ingreseSuApellido);
// } else {
//     alert("Falta ingresar información");
// }

// console.log(ingreseSuNombre !== "" && ingreseSuApellido !== "");


// let edadIngresada = prompt("Ingrese su Edad: ");

// if (edadIngresada >= 21) {
//     alert("Su edad es: " + edadIngresada + ". Agradecemos su interés en operar con nosotros.");
// } else if (edadIngresada > 0 && edadIngresada < 21) {
//     alert("Su edad es: " + edadIngresada + ". Para operar con nosotros, debe tener más de 21 años.Agradecemos su comprensión.");
// } else if (edadIngresada <= 0) {
//     alert("La edad ingresada debe ser mayor a 0. Por favor, ingrese una edad válida.");
// } else {
//     alert("La edad ingresada no es válida. Por favor, ingrese una edad correcta.");
// }


// // Constructor de objeto para los planes de inversión

// function PlanInversion(nombre, inversionMinima, servicios) {
//     this.nombre = nombre;
//     this.inversionMinima = inversionMinima;
//     this.servicios = servicios;
// }

// // Instancia del Objeto PlanInversion

// const planPlatino = new PlanInversion(
//     "Plan Platino",
//     10000,
//     [
//         "Asesoría financiera personalizada",
//         "Acceso prioritario a oportunidades exclusivas",
//         "Informes detallados de rendimiento trimestrales",
//         "Gestión de riesgos avanzada"
//     ]
// );

// const planOro = new PlanInversion(
//     "Plan Oro",
//     5000,
//     [
//         "Asesoría financiera especializada",
//         "Acceso a oportunidades exclusivas",
//         "Informes de rendimiento semestrales"
//     ]
// );

// const planPlata = new PlanInversion(
//     "Plan Plata",
//     2000,
//     [
//         "Asesoría financiera básica",
//         "Informes de rendimiento anuales"
//     ]
// );

// const planBronce = new PlanInversion(
//     "Plan Bronce",
//     1000,
//     [
//         "Asesoría general",
//         "Acceso a nuestros recursos educativos",
//         "Informes de rendimiento semestrales"
//     ]
// );

// console.log(PlanInversion);


// // Lista Array con los planes disponibles

// const planes = [
//     {
//         nombre: "Plan Platino",
//         inversionMinima: 10000,
//         servicios: [
//             "Asesoría financiera personalizada",
//             "Acceso prioritario a oportunidades exclusivas",
//             "Informes detallados de rendimiento trimestrales",
//             "Gestión de riesgos avanzada"
//         ]
//     },
//     {
//         nombre: "Plan Oro",
//         inversionMinima: 5000,
//         servicios: [
//             "Asesoría financiera especializada",
//             "Acceso a oportunidades exclusivas",
//             "Informes de rendimiento semestrales"
//         ]
//     },
//     {
//         nombre: "Plan Plata",
//         inversionMinima: 2000,
//         servicios: [
//             "Asesoría financiera básica",
//             "Informes de rendimiento anuales"
//         ]
//     },
//     {
//         nombre: "Plan Bronce",
//         inversionMinima: 1000,
//         servicios: [
//             "Asesoría general",
//             "Acceso a nuestros recursos educativos",
//             "Informes de rendimiento semestrales"
//         ]
//     },
// ];

// console.log(planes);


// // Función para mostrar la información de los planes usando for...of

// function mostrarPlanes() {
//     for (const plan of planes) {
//         console.log("Nombre: " + plan.nombre);
//         console.log("Inversión Mínima: " + plan.inversionMinima + " USD");
//         console.log("Servicios:");
//         for (const servicio of plan.servicios) {
//             console.log("- " + servicio);
//         }
//         console.log("\n");
//     }
// }
// mostrarPlanes();
// // Función de búsqueda de un plan por nombre utilizando find

// const buscarPlanPorNombre = (nombre) => planes.find(plan => plan.nombre === nombre)


// // función de búsqueda

// const nombreBuscado = prompt("Ingrese el nombre del plan que desea buscar:");
// const planEncontrado = buscarPlanPorNombre(nombreBuscado);


// if (planEncontrado) {
//     console.log("Plan encontrado: " + planEncontrado.nombre);
//     console.log("Inversión Mínima: " + planEncontrado.inversionMinima + " USD");
//     console.log("Servicios:");
//     for (const servicio of planEncontrado.servicios) {
//         console.log("- " + servicio);
//     }
// } else {
//     alert('El plan con el nombre "' + nombreBuscado + '" no se encontró.');
// }


// function despedir() {
//     alert("Gracias por consultar nuestros planes de inversión. ¡Hasta pronto!");
// }

// despedir();

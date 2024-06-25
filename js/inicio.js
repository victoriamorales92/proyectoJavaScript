document.addEventListener("DOMContentLoaded", function() {
    // Recupera la edad almacenada al cargar la página
    let edadGuardada = localStorage.getItem("edadIngresada");
    if (edadGuardada) {
        document.getElementById("edadIngresada").value = edadGuardada;
    }
});

document.getElementById("formEdad").addEventListener("submit", function(event) {
    event.preventDefault();
    let edadIngresada = document.getElementById("edadIngresada").value.trim();

    // Verificar si la entrada está vacía
    mostrarMensaje(
        edadIngresada === "" ? "error" : isNaN(parseInt(edadIngresada)) || parseInt(edadIngresada) <= 0 ? "error" : edadIngresada >= 21 ? "success" : "info",
        edadIngresada === "" ? "Error" : isNaN(parseInt(edadIngresada)) || parseInt(edadIngresada) <= 0 ? "Error" : edadIngresada >= 21 ? "Éxito" : "Información",
        edadIngresada === "" ? "Por favor, ingrese su edad." : isNaN(parseInt(edadIngresada)) || parseInt(edadIngresada) <= 0 ? "La edad ingresada no es válida. Por favor, ingrese una edad mayor a 0." : edadIngresada >= 21 ? "Su edad es: " + edadIngresada + ". Agradecemos su interés." : "Su edad es: " + edadIngresada + ". Debe ser mayor de 21 años para continuar."
    );

    if (edadIngresada === "" || isNaN(parseInt(edadIngresada)) || parseInt(edadIngresada) <= 0) {
        return;
    }

    // Almacenar la edad en localStorage
    localStorage.setItem("edadIngresada", parseInt(edadIngresada));

    document.getElementById("formEdad").reset(); // Resetea el formulario
});

function mostrarMensaje(icono, titulo, texto) {
    Swal.fire({
        icon: icono,
        title: titulo,
        text: texto
    });
}

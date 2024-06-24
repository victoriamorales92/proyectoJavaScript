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

    if (edadIngresada === "") {
        mostrarMensaje("error", "Error", "Por favor, ingrese su edad.");
        return;
    }

    edadIngresada = parseInt(edadIngresada);

    if (isNaN(edadIngresada) || edadIngresada <= 0) {
        mostrarMensaje("error", "Error", "La edad ingresada no es válida. Por favor, ingrese una edad mayor a 0.");
        return;
    }

    // localStorage
    localStorage.setItem("edadIngresada", edadIngresada);

    if (edadIngresada >= 21) {
        mostrarMensaje("success", "Éxito", "Su edad es: " + edadIngresada + ". Agradecemos su interés.");
    } else {
        mostrarMensaje("info", "Información", "Su edad es: " + edadIngresada + ". Debe ser mayor de 21 años para continuar.");
    }

    document.getElementById("formEdad").reset(); // Resetea el formulario
});

function mostrarMensaje(icono, titulo, texto) {
    Swal.fire({
        icon: icono,
        title: titulo,
        text: texto
    });
}

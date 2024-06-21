document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('consultaForm');
    const mensajeExito = document.createElement('div');
    mensajeExito.classList.add('mensaje-exito');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar el envío del formulario por defecto

        // Obtener los valores del formulario
        const nombre = form.elements['nombre'].value;
        const apellido = form.elements['apellido'].value;
        const email = form.elements['email'].value;
        const consulta = form.elements['consulta'].value;

        // Crear un objeto con los datos del formulario
        const data = {
            nombre: nombre,
            apellido: apellido,
            email: email,
            consulta: consulta
        };

        // Guardar los datos en localStorage
        guardarConsultaEnLocalStorage(data);

        // Mostrar mensaje de éxito
        mostrarMensajeExito();

        // Limpia el formulario después de enviar
        form.reset();
    });

    // Función para guardar los datos en localStorage
    function guardarConsultaEnLocalStorage(data) {
        let consultas = JSON.parse(localStorage.getItem('consultas')) || [];
        consultas.push(data);
        localStorage.setItem('consultas', JSON.stringify(consultas));
    }

    // Función para mostrar el mensaje de éxito
    function mostrarMensajeExito() {
        mensajeExito.textContent = "Consulta enviada correctamente. Nos pondremos en contacto contigo.";
        form.insertAdjacentElement('afterend', mensajeExito); // Insertar mensaje después del formulario

        setTimeout(function() {
            mensajeExito.style.opacity = '0'; // Ocultar el mensaje
            setTimeout(function() {
                mensajeExito.remove(); // Eliminar el mensaje del DOM
            }, 1000); // Esperar 1 segundo para eliminar el elemento
        }, 3000); // Mostrar el mensaje durante 3 segundos 
    }
});

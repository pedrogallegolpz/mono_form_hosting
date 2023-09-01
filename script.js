document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registroForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Obtén los valores del formulario.
        const nombre = document.getElementById("nombre").value;
        const edad = document.getElementById("edad").value;

        // Crea una línea CSV con los datos del formulario.
        const csvLine = `${nombre},${edad}`;

        // Llama a la función para agregar la línea al archivo CSV en GitHub.
        agregarAlCSV(csvLine);
    });
});

async function agregarAlCSV(lineaCSV) {
    // Definir la URL del archivo CSV en tu repositorio.
    const csvURL = 'https://github.com/pedrogallegolpz/mono_form_hosting/blob/main/historial.csv';

    try {
        // Obtener el contenido actual del archivo CSV.
        const respuesta = await fetch(csvURL);
        const contenidoActual = await respuesta.text();

        // Agregar la nueva línea al contenido.
        const nuevoContenido = `${contenidoActual}\n${lineaCSV}`;

        // Enviar una solicitud PUT para actualizar el archivo CSV.
        await fetch(csvURL, {
            method: 'PUT',
            body: nuevoContenido,
        });

        alert('Registro exitoso.');

        // Puedes redirigir al usuario a otra página o realizar cualquier acción adicional aquí.
    } catch (error) {
        console.error('Error al agregar al CSV:', error);
        alert('Error al registrar. Por favor, inténtalo de nuevo.');
    }
}

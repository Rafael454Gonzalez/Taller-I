function validarFormularioEditar() {
    let fechaNacimiento = document.getElementById("id_fecha_nacimiento").value;
    let telefono = document.getElementById("id_telefono").value;
    let direccion = document.getElementById("id_direccion").value;
    let tipoSangre = document.getElementById("id_tipo_sangre").value;
    let alergiasMedicamentos = document.getElementById("id_alergias_medicamentos").value;
    let historialMedico = document.getElementById("id_historial_medico").value;
    let observaciones = document.getElementById("id_observaciones").value;
    let radiografias = document.getElementById("id_radiografias").files.length;

    if (fechaNacimiento.trim() === "") {
        alert("La fecha de nacimiento no puede estar vacía.");
        return false;
    }
    if (telefono.trim() === "") {
        alert("El teléfono no puede estar vacío.");
        return false;
    }
    if (direccion.trim() === "") {
        alert("La dirección no puede estar vacía.");
        return false;
    }
    if (tipoSangre.trim() === "") {
        alert("El tipo de sangre no puede estar vacío.");
        return false;
    }
    if (alergiasMedicamentos.trim() === "") {
        alert("Las alergias a medicamentos no pueden estar vacías.");
        return false;
    }
    if (historialMedico.trim() === "") {
        alert("El historial médico no puede estar vacío.");
        return false;
    }
    if (observaciones.trim() === "") {
        alert("Las observaciones no pueden estar vacías.");
        return false;
    }
    if (radiografias === 0) {
        alert("Debe adjuntar al menos una radiografía.");
        return false;
    }
    return true;
}


function validateForm() {
    const fechaVisita = document.getElementById('fecha_visita').value;
    const motivoVisita = document.getElementById('motivo_visita').value;
    const descripcion = document.getElementById('descripcion').value;
    const tratamiento = document.getElementById('tratamiento').value;
    const observaciones = document.getElementById('observaciones').value;
    const alergias = document.getElementById('alergias').value;


    if (!fechaVisita || !motivoVisita || !descripcion || !tratamiento || !observaciones || !alergias) {
        alert("Por favor, complete todos los campos obligatorios.");
        return false;
    }
    return true;
}


function validateFormPaciente() {
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
    const telefono = document.getElementById('telefono').value;
    const direccion = document.getElementById('direccion').value;
    const tipoSangre = document.getElementById('tipoSangre').value;

    if (!fechaNacimiento || !telefono || !direccion || tipoSangre === '') {
        alert('Por favor, complete todos los campos obligatorios.');
        return false;
    }

    // Validar el formato del teléfono (Ejemplo: 123-456-7890)
    const telefonoPattern = /^\d{3}-\d{3}-\d{4}$/;
    if (!telefonoPattern.test(telefono)) {
        alert('El teléfono debe tener el formato: 123-456-7890');
        return false;
    }

    return true; // Si todo es correcto, se envía el formulario
}

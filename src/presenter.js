// presenter.js

// Función para mostrar el mensaje en la interfaz de usuario
function mostrarMensaje(cantidad, precioItem, categoria, estado, totalOrden, tipoCliente, impuestoAdicional, descuentoAdicional, impuestoPorEstado, descuentoPorTotalOrden) {
    // Construir el mensaje con los datos proporcionados
    const mensaje = `Cantidad de ítems ingresados: ${cantidad}<br>Precio por ítem: ${precioItem}<br>Categoría seleccionada: ${categoria}<br>Estado seleccionado: ${estado}<br>Total de la orden: ${totalOrden}<br>Tipo de cliente: ${tipoCliente}<br>Impuesto adicional por categoría: ${impuestoAdicional}%<br>Descuento adicional por categoría: ${descuentoAdicional}%<br>Tasa de impuesto por estado: ${impuestoPorEstado}%<br>Tasa de descuento por total de la orden: ${descuentoPorTotalOrden}%`;

    // Mostrar el mensaje en el div con id "mensaje"
    document.getElementById('mensaje').innerHTML = mensaje;
}

// Exportar la función para que esté disponible para otros módulos
module.exports = { mostrarMensaje };

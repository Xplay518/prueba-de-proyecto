// presenter.js

// Función para mostrar el mensaje en la interfaz de usuario
function mostrarMensaje(cantidad, precioItem, categoria, estado, totalOrden, tipoCliente, impuestoAdicional, descuentoAdicional, tasaImpuesto, tasaDescuento) {
    // Calcular el precio neto
    const precioNeto = cantidad * precioItem;
    // Calcular el impuesto
    const impuesto = precioNeto * (tasaImpuesto / 100);
    // Calcular el descuento por categoría
    const descuentoPorCategoria = precioNeto * (descuentoAdicional / 100);
    // Calcular el descuento por total de la orden
    const descuentoPorTotalOrden = totalOrden * (tasaDescuento / 100);

    // Aplicar el descuento por categoría
    let precioConDescuento = precioNeto - descuentoPorCategoria;
    // Aplicar el descuento por total de la orden
    precioConDescuento -= descuentoPorTotalOrden;
    // Calcular el precio total
    const precioTotal = precioConDescuento + impuesto;

    // Construir el mensaje con los datos proporcionados
    const mensaje = `
        Cantidad de ítems: ${cantidad}<br>
        Precio por ítem: ${precioItem}$<br>
        Categoría seleccionada: ${categoria}<br>
        Estado seleccionado: ${estado}<br>
        Total de la orden: ${totalOrden}$<br>
        Tipo de cliente: ${tipoCliente}<br>
        Precio neto: ${precioNeto}$<br>
        Descuento por categoría: ${descuentoPorCategoria}$<br>
        Impuesto adicional: ${impuestoAdicional}%<br>
        Descuento adicional por categoría: ${descuentoAdicional}%<br>
        Impuesto para ${estado}: ${impuesto.toFixed(2)}$<br>
        Descuento por total de la orden: ${descuentoPorTotalOrden}$<br>
        Precio total (descuento e impuesto): ${precioTotal.toFixed(2)}$
    `;

    // Mostrar el mensaje en el div con id "mensaje"
    document.getElementById('mensaje').innerHTML = mensaje;
}

// Exportar la función para que esté disponible para otros módulos
module.exports = { mostrarMensaje };

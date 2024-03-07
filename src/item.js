// item.js

// Importar las funciones desde calculo.js
const { calcularImpuestoYDescuento, calcularImpuestoPorEstado, calcularDescuentoPorTotalOrden } = require('./calculo.js');
// Importar la función mostrarMensaje desde presenter.js
const { mostrarMensaje } = require('./presenter.js');

document.getElementById('mostrarBtn').addEventListener('click', function() {
    // Obtener los valores ingresados por el usuario
    const cantidad = parseInt(document.getElementById('cantidad').value);
    const precioItem = parseFloat(document.getElementById('precioItem').value);
    const categoria = document.getElementById('categoria').value;
    const estado = document.getElementById('estado').value;
    const totalOrden = parseFloat(document.getElementById('totalOrden').value);
    const tipoCliente = document.getElementById('tipoCliente').value;

    // Calcular el impuesto adicional y el descuento adicional por categoría utilizando la función importada
    const { impuestoAdicional, descuentoAdicional } = calcularImpuestoYDescuento(categoria);
    // Calcular el impuesto por estado utilizando la función importada
    const impuestoPorEstado = calcularImpuestoPorEstado(estado);
    // Calcular el descuento por total de la orden utilizando la función importada
    const descuentoPorTotalOrden = calcularDescuentoPorTotalOrden(totalOrden);

    // Llamar a la función mostrarMensaje en presenter.js para mostrar el mensaje en la interfaz de usuario
    mostrarMensaje(cantidad, precioItem, categoria, estado, totalOrden, tipoCliente, impuestoAdicional, descuentoAdicional, impuestoPorEstado, descuentoPorTotalOrden);
});

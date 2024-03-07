// item.js

// Importar las funciones calcularImpuestoYDescuento, calcularImpuestoPorEstado, calcularDescuentoPorTotalOrden desde calculo.js
const { calcularImpuestoYDescuento, calcularImpuestoPorEstado, calcularDescuentoPorTotalOrden } = require('./calculo.js');
// Importar la función mostrarMensaje desde presenter.js
const { mostrarMensaje } = require('./presenter.js');

document.getElementById('mostrarBtn').addEventListener('click', function() {
    // Obtener la cantidad de ítems ingresada por el usuario
    const cantidad = parseInt(document.getElementById('cantidad').value);
    // Obtener el precio por ítem ingresado por el usuario
    const precioItem = parseInt(document.getElementById('precioItem').value);
    // Calcular el total de la orden
    const totalOrden = cantidad * precioItem;
    // Obtener la categoría de producto seleccionada por el usuario
    const categoria = document.getElementById('categoria').value;
    // Obtener el estado seleccionado por el usuario
    const estado = document.getElementById('estado').value;
    // Obtener el tipo de cliente seleccionado por el usuario
    const tipoCliente = document.getElementById('tipoCliente').value;

    // Calcular el impuesto adicional y el descuento adicional por categoría utilizando la función importada
    const { impuestoAdicional, descuentoAdicional } = calcularImpuestoYDescuento(categoria);
    // Calcular el impuesto por estado utilizando la función importada
    const tasaImpuesto = calcularImpuestoPorEstado(estado);
    // Calcular el descuento por total de la orden utilizando la función importada
    const tasaDescuento = calcularDescuentoPorTotalOrden(totalOrden);

    // Llamar a la función mostrarMensaje en presenter.js para mostrar el mensaje en la interfaz de usuario
    mostrarMensaje(cantidad, precioItem, categoria, estado, totalOrden, tipoCliente, impuestoAdicional, descuentoAdicional, tasaImpuesto, tasaDescuento);
});

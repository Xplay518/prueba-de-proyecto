// presenter.js

// Importar la función mostrarMensaje desde presenter.js
const { mostrarMensaje } = require('./presenter.js');

document.getElementById('mostrarBtn').addEventListener('click', function() {
    // Obtener la cantidad de ítems ingresada por el usuario
    const cantidad = document.getElementById('cantidad').value;

    // Obtener la categoría de producto seleccionada por el usuario
    const categoria = document.getElementById('categoria').value;

    // Calcular el impuesto adicional y el descuento adicional por categoría utilizando la función importada
    const { impuestoAdicional, descuentoAdicional } = calcularImpuestoYDescuento(categoria);

    // Llamar a la función mostrarMensaje en presenter.js para mostrar el mensaje en la interfaz de usuario
    mostrarMensaje(cantidad, categoria, impuestoAdicional, descuentoAdicional);
});

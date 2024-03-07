// item.js

// Importar la función calcularImpuestoYDescuento desde calculo.js
const { calcularImpuestoYDescuento } = require('./calculo.js');

document.getElementById('mostrarBtn').addEventListener('click', function() {
    // Obtener la cantidad de ítems ingresada por el usuario
    const cantidad = document.getElementById('cantidad').value;

    // Obtener la categoría de producto seleccionada por el usuario
    const categoria = document.getElementById('categoria').value;

    // Calcular el impuesto adicional y el descuento adicional por categoría utilizando la función importada
    const { impuestoAdicional, descuentoAdicional } = calcularImpuestoYDescuento(categoria);

    // Crear un mensaje con la cantidad de ítems ingresados, la categoría seleccionada y los detalles adicionales
    const mensaje = `Cantidad de ítems ingresados: ${cantidad}<br>Categoría seleccionada: ${categoria}<br>Impuesto adicional: ${impuestoAdicional}%<br>Descuento adicional: ${descuentoAdicional}%`;

    // Mostrar el mensaje en el div con id "mensaje"
    document.getElementById('mensaje').innerHTML = mensaje;
});

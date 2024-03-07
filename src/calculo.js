// calculo.js

// Función para calcular el impuesto adicional y el descuento adicional por categoría
function calcularImpuestoYDescuento(categoria) {
  let impuestoAdicional = 0;
  let descuentoAdicional = 0;

  switch (categoria) {
      case 'alimentos':
          impuestoAdicional = 0; // 0% de impuesto adicional para alimentos
          descuentoAdicional = 2; // 2% de descuento adicional para alimentos
          break;
      // Agregar más casos para otras categorías aquí según sea necesario
      default:
          break;
  }

  return { impuestoAdicional, descuentoAdicional };
}

module.exports = calcularImpuestoYDescuento;

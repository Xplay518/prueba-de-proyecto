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
        case 'bebidasAlcoholicas':
            impuestoAdicional = 7; // 7% de impuesto adicional para bebidas alcohólicas
            descuentoAdicional = 0; // 0% de descuento adicional para bebidas alcohólicas
            break;
        case 'materialEscritorio':
            impuestoAdicional = 0; // 0% de impuesto adicional para material de escritorio
            descuentoAdicional = 1.5; // 1.5% de descuento adicional para material de escritorio
            break;
        case 'muebles':
            impuestoAdicional = 3; // 3% de impuesto adicional para muebles
            descuentoAdicional = 0; // 0% de descuento adicional para muebles
            break;
        default:
            break;
    }
  
    return { impuestoAdicional, descuentoAdicional };
  }
  
  module.exports = { calcularImpuestoYDescuento }; // Exportar la función como un objeto
  
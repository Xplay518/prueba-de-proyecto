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
        case 'Electronicos':
            impuestoAdicional = 4; // 4% de impuesto adicional para electrónicos
            descuentoAdicional = 1; // 1% de descuento adicional para electrónicos
            break;
        case 'Varios':
            impuestoAdicional = 0; // 0% de impuesto adicional para varios
            descuentoAdicional = 0; // 0% de descuento adicional para varios
            break;
        default:
            break;
    }
  
    return { impuestoAdicional, descuentoAdicional };
  }
  
  // Función para calcular el impuesto por estado
  function calcularImpuestoPorEstado(estado) {
    let tasaImpuesto = 0;
  
    switch (estado) {
      case 'UT':
        tasaImpuesto = 6.65;
        break;
      case 'NV':
        tasaImpuesto = 8.00;
        break;
      case 'TX':
        tasaImpuesto = 6.25;
        break;
      case 'AL':
        tasaImpuesto = 4.00;
        break;
      case 'CA':
        tasaImpuesto = 8.25;
        break;
      default:
        break;
    }
  
    return tasaImpuesto;
  }
  
  // Función para calcular el descuento basado en el total de la orden
  function calcularDescuentoPorTotalOrden(totalOrden) {
    let tasaDescuento = 0;
  
    if (totalOrden >= 1000 && totalOrden < 3000) {
      tasaDescuento = 3; // 3% de descuento para órdenes entre 1000 y 3000
    } else if (totalOrden >= 3000 && totalOrden < 7000) {
      tasaDescuento = 5; // 5% de descuento para órdenes entre 3000 y 7000
    } else if (totalOrden >= 7000 && totalOrden < 10000) {
      tasaDescuento = 7; // 7% de descuento para órdenes entre 7000 y 10000
    } else if (totalOrden >= 10000 && totalOrden < 30000) {
      tasaDescuento = 10; // 10% de descuento para órdenes entre 10000 y 30000
    } else if (totalOrden >= 30000) {
      tasaDescuento = 15; // 15% de descuento para órdenes mayores o iguales a 30000
    }
  
    return tasaDescuento;
  }
  
  module.exports = { calcularImpuestoYDescuento, calcularImpuestoPorEstado, calcularDescuentoPorTotalOrden };
  
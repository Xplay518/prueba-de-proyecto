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
  
  // Función para calcular el descuento adicional por tipo de cliente
  function calcularDescuentoPorTipoCliente(tipoCliente) {
    let descuentoPorTipoCliente = 0;
  
    switch (tipoCliente) {
      case 'Normal':
        descuentoPorTipoCliente = 0;
        break;
      case 'Recurrente':
        descuentoPorTipoCliente = 0.5; // 0.5% de descuento adicional para clientes recurrentes
        break;
      case 'Antiguo Recurrente':
        descuentoPorTipoCliente = 1; // 1% de descuento adicional para clientes antiguos recurrentes
        break;
      case 'Especial':
        descuentoPorTipoCliente = 1.5; // 1.5% de descuento adicional para clientes especiales
        break;
      default:
        break;
    }
  
    return descuentoPorTipoCliente;
  }
  
  // Función para aplicar descuentos de monto fijo según el tipo de cliente, el precio neto de la orden y la categoría del producto
  function aplicarDescuentoMontoFijo(precioNeto, categoria, tipoCliente) {
    let descuentoMontoFijo = 0;
  
    // Verificar si el tipo de cliente es Recurrente y el precio neto es mayor a 3000 y la categoría es Alimentos
    if (tipoCliente === 'Recurrente' && precioNeto > 3000 && categoria === 'alimentos') {
      descuentoMontoFijo = 100; // Descuento de $100 para clientes recurrentes con precio neto mayor a 3000 y categoría de alimentos
    }
  
    // Verificar si el tipo de cliente es Especial y el precio neto es mayor a 7000 y la categoría es Electrónicos
    if (tipoCliente === 'Especial' && precioNeto > 7000 && categoria === 'Electronicos') {
      descuentoMontoFijo = 200; // Descuento de $200 para clientes especiales con precio neto mayor a 7000 y categoría de electrónicos
    }
  
    return descuentoMontoFijo;
  }
  
  module.exports = { calcularImpuestoYDescuento, calcularImpuestoPorEstado, calcularDescuentoPorTipoCliente, aplicarDescuentoMontoFijo };
  
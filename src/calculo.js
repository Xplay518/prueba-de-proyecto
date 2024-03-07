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
  
  // Función para calcular el costo de envío según el peso volumétrico y el tipo de cliente
  function calcularCostoEnvio(peso, tipoCliente) {
    let costoEnvio = 0;
  
    if (peso >= 0 && peso <= 10) {
      costoEnvio = 0;
    } else if (peso <= 20) {
      costoEnvio = 3.5;
    } else if (peso <= 40) {
      costoEnvio = 5;
    } else if (peso <= 80) {
      costoEnvio = 6;
    } else if (peso <= 100) {
      costoEnvio = 6.5;
    } else if (peso <= 200) {
      costoEnvio = 8;
    } else {
      costoEnvio = 9;
    }
  
    // Aplicar descuento en el costo de envío según el tipo de cliente
    switch (tipoCliente) {
      case 'Normal':
        descuentoEnvio = 0;
        break;
      case 'Recurrente':
        descuentoEnvio = 0;
        break; // Descuento del 0% para clientes recurrentes
      case 'Antiguo Recurrente':
        descuentoEnvio = 1; // Descuento del 1% para clientes antiguos recurrentes
        break;
      case 'Especial':
        descuentoEnvio = 0; // Descuento inicial del 0% para clientes especiales
        break;
      // Agregar más casos para otros tipos de cliente y sus respectivos descuentos
      default:
        descuentoEnvio = 0;
        break;
    }
  
    costoEnvio -= (costoEnvio * descuentoEnvio) / 100;
  
    return costoEnvio;
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
  
  module.exports = { calcularImpuestoYDescuento, calcularCostoEnvio, aplicarDescuentoMontoFijo }; // Exportar las funciones como un objeto
  
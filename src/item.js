/// src/item.js

document.getElementById('mostrarBtn').addEventListener('click', function() {
  // Obtener la cantidad de ítems ingresada por el usuario
  const cantidad = document.getElementById('cantidad').value;

  // Mostrar una alerta con la cantidad de ítems ingresados
  alert(`Cantidad de ítems ingresados: ${cantidad}`);
});

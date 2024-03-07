// item.js

document.getElementById('mostrarBtn').addEventListener('click', function() {
  // Obtener la cantidad de ítems ingresada por el usuario
  const cantidad = document.getElementById('cantidad').value;

  // Obtener la categoría de producto seleccionada por el usuario
  const categoria = document.getElementById('categoria').value;

  // Mostrar una alerta con la cantidad de ítems ingresados y la categoría seleccionada
  alert(`Cantidad de ítems ingresados: ${cantidad}\nCategoría seleccionada: ${categoria}`);
});

document.getElementById('issueType').addEventListener('change', function() {
    var issueType = this.value;
    var issueDetails = document.getElementById('issueDetails');
  
    // Oculta todos los campos de detalles de problema
    var fields = issueDetails.getElementsByTagName('div');
    for (var i = 0; i < fields.length; i++) {
      fields[i].classList.add('hidden');
    }
  
     // Muestra los campos correspondientes al tipo de problema seleccionado
  if (issueType !== "") {
    document.getElementById(issueType).classList.remove('hidden');
  }
  });
  
  document.getElementById('issueForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario por defecto
  
    // Obtén los datos del formulario y realiza el envío o procesamiento adicional
    // ...  // Realizar la petición HTTP mediante Fetch API
  fetch('guardar.php', {
    method: 'POST',
    body: formData
  })
  .then(function(response) {
    if (response.ok) {
      console.log("Los datos se han guardado correctamente.");
    } else {
      console.log("Hubo un error al guardar los datos.");
    }
  })
  .catch(function(error) {
    console.log("Hubo un error en la petición:", error);
  });

  
    // Limpia el formulario después del envío
    this.reset();
  });
  
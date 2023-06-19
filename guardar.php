<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Obtener los valores de los campos enviados desde el cliente
  $email = $_POST['email'];
  $asunto = $_POST['asunto'];
  $descripcion = $_POST['descripcion'];

  // Crear una cadena con los datos a guardar en el archivo
  $data = "Email: $email\nAsunto: $asunto\nDescripción: $descripcion\n";

  // Ruta y nombre del archivo donde se guardará la información
  $archivo = 'datos.txt';

  // Guardar los datos en el archivo
  file_put_contents($archivo, $data, FILE_APPEND);

  // Enviar una respuesta al cliente
  echo "Los datos se han guardado correctamente.";
} else {
    // Si se recibe una solicitud que no es POST, puedes enviar una respuesta de error o redireccionar, según tus necesidades
    http_response_code(405);
    echo "Método no permitido";
  }
?>

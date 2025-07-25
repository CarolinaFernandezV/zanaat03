
<?php
$host = "localhost";
$user = "root";
$pass = ""; // Dejar vacío si estás usando XAMPP y no cambiaste la contraseña
$db   = "zanaat"; // Cambia esto si tu base de datos tiene otro nombre

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
  die("Conexión fallida: " . $conn->connect_error);
}
// echo "Conexión exitosa";
?>

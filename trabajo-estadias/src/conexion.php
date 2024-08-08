<?php
$conn = mysqli_connect("localhost","root","","bd_iniciosesion");
// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

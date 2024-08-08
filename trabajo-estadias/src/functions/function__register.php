<?php
include_once ("../conexion.php");

if (isset( $_POST["btn-register"] )) {

    $name = $_POST["nombre_reg"];
    $email = $_POST["correo_reg"];
    $password = $_POST["contra_reg"];
    
    $municipio = $_POST["municipio_text"];
    $calle = $_POST["calle_text"];
    $numero = $_POST["numero_text"];
    
    $address = "$municipio. $calle, No. #$numero";
    $type_carrer = $_POST["tipo_carrera"];
    
    
    $phone_number = $_POST["numero_telefono"];

    $sql__Register = "INSERT INTO `users`(`nombre`, `correo`, `contraseña`, `tipo_usuario`, `status`, `carrera`, `direccion`, `numero_celular`) VALUES ('$name','$email','$password','Aspirante','Desactivado','$type_carrer','$address','$phone_number')";
    $res = mysqli_query($conn, $sql__Register);

    if ($res){
      echo "<script> alert('Registro realizado con exito') </script>"; 
      header("Location: ../views/main.php   "); 
    }
}
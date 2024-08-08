<?php
include_once ("../conexion.php");


if (isset($_POST["btn-login"])) {
  
  $password = $_POST["password-log"];
  $email = $_POST["email-log"];
  // $user_type = $_POST["user-type-log"];

  $sql = "SELECT * FROM `users` WHERE `correo` = '$email'";
  $result = mysqli_query($conn, $sql);

  if ($result -> num_rows > 0) {
    $row = $result->fetch_assoc();   }

    if ($password == $row["contraseña"] && $email === $row["correo"]) {
      session_start();
      $_SESSION['id'] = $row["id"];
      $_SESSION['nombre'] = $row["nombre"];
      $_SESSION['correo'] = $row["correo"];
      $_SESSION['tipo'] = $row["tipo_usuario"];

      // $_SESSION['tipo'] = $row["tipo_usuario"];
      $_SESSION['TYPE_BUTTON'] = "materias";
      header("Location: ../views/main.php");

      exit();
    } else {
      ?>
        <script>
            alert('Upps... algo ingresaste mal.')
            location.href = "../../index.php"
        </script>
      <?php
    }
    
    } else {
      ?>
        <script>
            alert('Este correo no esta registrado.')
            location.href = "../../index.php"
        </script>
      <?php
    }

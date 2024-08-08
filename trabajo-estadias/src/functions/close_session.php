<?php

session_start();
$_SESSION['id'] = "";
$_SESSION['nombre'] = "";
$_SESSION['correo'] = "";
$_SESSION['tipo'] = "";
$_SESSION['TYPE_BUTTON'] = "";

session_destroy();
header("Location: ../../index.php");
exit( );
?>
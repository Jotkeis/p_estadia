<?php
!$_SESSION['id'] ? $_SESSION['id'] = 'undefined' : $usuario_id = $_SESSION['id'];
!$_SESSION['tipo'] ? $_SESSION['tipo'] = "undefined" : $role = $_SESSION['tipo'];

function Function_Validate_Session( $id ){
    if (!$id || $id == "undefined") {
        require_once("./not_found.php");
    }
}

Function_Validate_Session( $_SESSION['id'] );

// ATRAE EL NOMBRE DEPENDIENDO EL ID DE ROL
function Function_Name_Role($conn, $role){
    if( !$role || $role == "undefined"){
        ?>
            <script>
                alert('Tu formulario ha sido mandado al departamento de Escolares o esta siendo revisado.')
                location.href = "../../index.php"
            </script>
        <?php
    }else{
        $sql = "SELECT `tipo_usuario` FROM `role` WHERE `id` = $role";
        $res = mysqli_query($conn, $sql);

        if ($res) {
            if( $row = $res -> fetch_assoc()){
                return $row['tipo_usuario'];
            }
        }else{
            echo "Error base de datos";
        }
    }
}
// VARIABLE         FUNCTION_NAME_ROLE()
$user_name_role = Function_Name_Role($conn, $role);





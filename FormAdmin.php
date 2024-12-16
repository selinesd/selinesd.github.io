<?php
$con = mysqli_connect("localhost", "root", "", "enfermeria");

if (isset($_POST['submit'])) {
    $Nombre = trim($_POST['nombre']);
    $Usuario = trim($_POST['usuario']);
    $Contraseña = trim($_POST['contrasena']);
    $Cargo = trim($_POST['estado']);

    $consul = "INSERT INTO usuarios (Nombre, Usuario, Contraseña, id_posicion) VALUES ('$Nombre', '$Usuario', '$Contraseña', '$Cargo')";
    $conexion = mysqli_query($con, $consul);

    if ($conexion) {
        header("Location: indexadmin.html");
        exit();
    }
}

if (isset($_POST['delete'])) {
    $id = $_POST['id'];

    $query = "DELETE FROM usuarios WHERE id = $id";
    $resultado = mysqli_query($con, $query);

    if ($resultado) {
        echo 'Usuario eliminado correctamente';
    } else {
        echo 'Error al eliminar el usuario';
    }
}

$ash = "SELECT * FROM usuarios";
$aver = mysqli_query($con, $ash);

$array = [];

if (mysqli_num_rows($aver) > 0) {
    while ($row = mysqli_fetch_assoc($aver)) {
        $array[] = $row;
    }
}

echo json_encode($array);
?>

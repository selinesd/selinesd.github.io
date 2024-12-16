<?php

$user = $_POST['Correo'];
$pass = $_POST['contraseña'];

session_start();

$_SESSION['Usuario'] = $user;

$conexion = mysqli_connect("localhost", "root", "", "enfermeria");
$consulta = "SELECT * FROM usuarios where Usuario = '$user' and Contraseña = '$pass'";
$respuesta = mysqli_query($conexion, $consulta);

$filas = mysqli_fetch_array($respuesta);

if ($filas['id_posicion'] == 1) { // Admin
    header("location: indexadmin.php"); 
} else if ($filas['id_posicion'] == 2) { // Usuario
    header("location: index.php");
} else {
    header("Location: Login.html?error=usuario_no_encontrado");
}

mysqli_free_result($respuesta);
mysqli_close($conexion);
?>

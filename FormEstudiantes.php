<?php
$conn = mysqli_connect("localhost", "root", "", "enfermeria");

if(isset($_POST['Submit'])){
    $Nombre = trim($_POST['nombre']);
    $Curso = trim($_POST['curso']);
    $Seccion = trim($_POST['seccion']);
    $Nivel = trim($_POST['nivel']);
    $Nacimiento = trim($_POST['fechaNacimiento']);
    $Edad = trim($_POST['edad']);
    $Sexo = trim($_POST['sexo']);
    $Motivo = trim($_POST['motivo']);
    $Sintomas = trim($_POST['sintomas']);
    $Medicamentos = trim($_POST['medicamentos']);
    $Procedimiento = trim($_POST['procedimiento']);
    $NPadres = trim($_POST['padres']);
    $TPadres = trim($_POST['telefono']);
    $AntAler = isset($_POST['antecedentesAlergicos']);
    $AntPers = trim($_POST['antecedentesPersonales']);
    $Diagnostico = trim($_POST['diagnostico']);
    $FechaIngreso = trim($_POST['fechaIngreso']); 

    $consulta = "INSERT INTO resgistrarestudiante (Nombre, Curso, Seccion, Nivel, FechaNacimiento, Edad, Sexo, MotivoAtencion, Sintomas, Medicamentos, Procedimiento, NomApPadres, TelefonoPadres, AntAlergicos, AntPersonales, Diagnostico, FechaIngreso) VALUES ('$Nombre', '$Curso', '$Seccion', '$Nivel', '$Nacimiento', '$Edad', '$Sexo', '$Motivo', '$Sintomas', '$Medicamentos', '$Procedimiento', '$NPadres', '$TPadres', '$AntAler', '$AntPers', '$Diagnostico', '$FechaIngreso')";

    $unir = mysqli_query($conn, $consulta);

    if($unir){
        header("Location: index.html");
        exit;
    }else{
        die("Ha fallado");
    }
}

//Descargar Excel
if (isset($_GET['descargar']) && $_GET['descargar'] === 'excel') {
    header("Content-Type: application/vnd.ms-excel");
    header("Content-Disposition: attachment; filename=DatosEstudiantes.xls");
    header("Pragma: no-cache");
    header("Expires: 0");

    $sql = "SELECT * FROM resgistrarestudiante";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) > 0) {
        // Generar encabezados
        $row = mysqli_fetch_assoc($result);
        echo implode("\t", array_keys($row)) . "\n";

        // Generar filas
        do {
            echo implode("\t", array_values($row)) . "\n";
        } while ($row = mysqli_fetch_assoc($result));
    } else {
        echo "No hay datos disponibles.";
    }

    exit;
}

$aver = "SELECT Nombre, FechaIngreso, CONCAT(Curso, ' ', Seccion) AS Curso, Nivel, FechaNacimiento, Edad, Sexo, NomApPadres, TelefonoPadres FROM resgistrarestudiante";
$conectar = mysqli_query($conn, $aver);

$datos = [];

if(mysqli_num_rows($conectar) > 0){
    while($row = mysqli_fetch_assoc($conectar)){
        $datos[] = $row;
    }
}

$tabla2 = "SELECT MotivoAtencion, Sintomas, Medicamentos, Procedimiento, AntAlergicos, AntPersonales, Diagnostico FROM resgistrarestudiante";
$answer = mysqli_query($conn, $tabla2);

$data = [];

if(mysqli_num_rows($answer) > 0){
    while($fila = mysqli_fetch_assoc($answer)){
        $data[] = $fila;
    }
}

$periodo = isset($_GET['periodo']) ? $_GET['periodo'] : null;

if ($periodo) {
    switch ($periodo) {
        case 'día':
            $query = "
                SELECT FechaIngreso, COUNT(*) AS Cantidad
                FROM resgistrarestudiante
                GROUP BY FechaIngreso
                ORDER BY FechaIngreso;
            ";
            break;
        case 'semana':
            $query = "
                SELECT CONCAT(YEAR(FechaIngreso), '-', WEEK(FechaIngreso)) AS Semana, COUNT(*) AS Cantidad
                FROM resgistrarestudiante
                GROUP BY YEAR(FechaIngreso), WEEK(FechaIngreso)
                ORDER BY Semana;
            ";
            break;
        case 'mes':
            $query = "
                SELECT CONCAT(YEAR(FechaIngreso), '-', MONTH(FechaIngreso)) AS Mes, COUNT(*) AS Cantidad
                FROM resgistrarestudiante
                GROUP BY YEAR(FechaIngreso), MONTH(FechaIngreso)
                ORDER BY Mes;
            ";
            break;
        case 'año':
            $query = "
                SELECT YEAR(FechaIngreso) AS Año, COUNT(*) AS Cantidad
                FROM resgistrarestudiante
                GROUP BY YEAR(FechaIngreso)
                ORDER BY Año;
            ";
            break;
        default:
            $query = "
                SELECT Nivel, Curso, Seccion, COUNT(*) AS Cantidad
                FROM resgistrarestudiante
                GROUP BY Nivel, Curso, Seccion;
            ";
            break;
    }
} else {
    $query = "
        SELECT Nivel, Curso, Seccion, COUNT(*) AS Cantidad
        FROM resgistrarestudiante
        GROUP BY Nivel, Curso, Seccion;
    ";
}

$result = mysqli_query($conn, $query);
$estadisticas = [];

while ($fil = mysqli_fetch_assoc($result)) {
    $estadisticas[] = $fil;
}

header('Content-Type: application/json');
echo json_encode(['aver' => $datos, 'tabla2' => $data, 'query' => $estadisticas]);

mysqli_close($conn);
?>
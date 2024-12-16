

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HealthDesk - User Panel</title>
  <link rel="stylesheet" href="style.css">
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body>
  <div class="navbar">
    <button class="menu-toggle" onclick="toggleMenu()">☰</button>
    <div class="title">HealthDesk - User Panel</div>
    <div class="profile" onclick="toggleProfileMenu()">
      <img src="default-avatar.png" alt="Foto de perfil" class="profile-picture">
    </div>
    <div id="profileMenu" class="profile-menu" style="display: none;">
      <div class="profile-menu-content">
        <img src="default-avatar.png" alt="Foto de perfil" id="menuProfilePicture" class="profile-menu-picture">
        <button onclick="eliminarFoto()">Eliminar Foto</button>
        <input type="file" id="fileInput" accept="image/*" style="display: none;" onchange="cambiarFoto(event)">
        <button onclick="document.getElementById('fileInput').click()">Cambiar Foto</button>
      </div>
    </div>  
    </div>

  </div>
  <div id="overlay"></div>
  <div class="container">
    <nav class="sidebar" id="sidebar">
      <ul>
          <li onclick="mostrarBienvenida()"><i class="fas fa-house"></i><span>Inicio</span></li>
          <li onclick="mostrarFormulario()"><i class="fas fa-user-plus"></i><span>Registro de estudiantes</span></li>
          <li onclick="mostrarConsultas()"><i class="fas fa-search"></i><span>Consultas realizadas</span></li>
          <li onclick="mostrarEstadisticas()"><i class="fas fa-chart-bar"></i><span>Estadísticas</span></li>
          <li onclick="descargar()"><i class="fas fa-file-excel"></i><span>Cargar datos a Excel</span></li>
          <li id="Ayuda"><i class="fas fa-question-circle"></i><span>Ayuda</span></li>
          <li class="logout-option">
            <a href="#" onclick="mostrarConfirmacionCerrarSesion()"><i class="fas fa-sign-out-alt"></i><span>Cerrar Sesión</span></a>
          </li>
      </ul>
  </nav>
  
    <main class="main-content" id="mainContent">
      <img src="logosss.fw.png" alt="" id="logo">
      <h1>Bienvenid@</h1>
    </main>
  </div>
  <!-- Cuadro de confirmación -->
  <div id="confirmacion">
    <img src="logosss.fw.png" alt="" id="logo">
    <p>HealthDesk</p>
    <p>¿Estás seguro de que deseas cerrar sesión?</p>
    <button onclick="cerrarSesion()">Sí</button>
    <button onclick="cancelar()">No</button>
  </div>
  </div>

  <div id="mainContent"></div>
  <script src="sheet.js"></script>
  <script src="script.js"></script>
</body>
</html>

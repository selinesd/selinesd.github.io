
  // Función para alternar el menú
  function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('closed'); 
  }
  
  function mostrarBienvenida() {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <main class="main-content" id="mainContent">
      <img src="logosss.fw.png" alt="" id="logo">
      <h1>Bienvenid@</h1>
    </main>
     `;
  }

  //PERFIL
  function toggleProfileMenu() {
    const menu = document.getElementById('profileMenu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
  }
  
  function eliminarFoto() {
    const profilePicture = document.querySelector('.profile-picture');
    const menuPicture = document.getElementById('menuProfilePicture');
    const defaultImage = 'default-avatar.png'; 
    profilePicture.src = defaultImage;
    menuPicture.src = defaultImage;
    alert("La foto de perfil ha sido eliminada.");
  }
  
  function cambiarFoto(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const profilePicture = document.querySelector('.profile-picture');
        const menuPicture = document.getElementById('menuProfilePicture');
        profilePicture.src = e.target.result;
        menuPicture.src = e.target.result;
      };
      reader.readAsDataURL(file);
      alert("Foto de perfil actualizada.");
    }
  }
  
  // Ocultar el menú si se hace clic fuera de él
  document.addEventListener('click', (event) => {
    const menu = document.getElementById('profileMenu');
    const profile = document.querySelector('.profile');
    if (menu.style.display === 'block' && !menu.contains(event.target) && !profile.contains(event.target)) {
      menu.style.display = 'none';
    }
  });
  // Función para mostrar el formulario
  function mostrarFormulario() { 
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
    <form id="registroEstudiante" method="post" action="FormEstudiantes.php">
            <h2>Registrar Estudiante</h2>

            <div class="form-group">
                <label for="nombre" class="nombre">Nombre del Estudiante:</label>
                <label for="fechaIngreso" class="fechaIngreso">Fecha de Ingreso:</label>
                <label for="curso" class="curso">Curso:</label>
                <label for="seccion" class="seccion">Sección:</label><br>

                <input type="text" id="nombre" name="nombre" required>

                <input type="date" id="fechaIngreso" name="fechaIngreso" required>

                 <select id="curso" name="curso" required>
                    <option value="1ro">1ro</option>
                    <option value="2do">2do</option>
                    <option value="3ro">3ro</option>
                    <option value="4to">4to</option>
                    <option value="5to">5to</option>
                    <option value="6to">6to</option>
                    <option value="7mo">7mo</option>
                    <option value="8vo">8vo</option>
                </select>

                <select id="seccion" name="seccion" required>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                    <option value="E">E</option>
                </select>
                </div>

            <div class="form-group">
                <label for="nivel" class="nivel">Nivel:</label>
                <label for="fechaNacimiento" class="fechaNacimiento">Fecha Nacimiento:</label>
                <label for="edad" class="edad">Edad:</label>
                <label for="sexo" class="sexo">Sexo:</label><br>

                <select id="nivel" name="nivel" required>
                    <option value="Primario">Primario</option>
                    <option value="Secundario">Secundario</option>
                </select>

                <input type="date" id="fechaNacimiento" name="fechaNacimiento" required>


                <input type="number" id="edad" name="edad" required>

        
                <select id="sexo" name="sexo" required>
                    <option value="Masculino">Masculino</option>
                    <option value="Femenino">Femenino</option>
                </select>
            </div>
            <div class="form-group">
                <label for="motivo" class="motivo">Motivo de Atención:</label>
                <label for="sintomas" class="sintomas">Síntomas:</label><br>
                
                <textarea id="motivo" name="motivo" rows="3" required></textarea>
                <textarea id="sintomas" name="sintomas" rows="3" required></textarea>
            </div>


            <div class="form-group">
                <label for="medicamentos" class="medicamentos">Medicamentos Suministrados:</label>
                <label for="procedimiento" class="procedimiento">Procedimiento Médico:</label><br>
                <textarea id="medicamentos" name="medicamentos" rows="3"></textarea>
                <textarea id="procedimiento" name="procedimiento" rows="3"></textarea>
            </div>

            <div class="form-group">
                <label for="padres" class="padres">Nombre y Apellido de Padres:</label>
                <label for="telefono" class="telefono">Teléfono de Padre, Madre o Tutor:</label><br>

                <textarea type="text" id="padres" name="padres" required></textarea>
                <textarea type="tel" id="telefono" name="telefono" required></textarea>
            </div>
            <div class="form-group">
                <label class="antecedentes">Antecedentes Alérgicos:</label><br>
                <input type="checkbox" id="antecedentesAlergicos" name="antecedentesAlergicos">
                <label for="antecedentesAlergicos" class="checkbox-label">Sí</label>
                <input type="checkbox" id="antecedentesAlergicosa" name="antecedentesAlergicosa">
                <label for="antecedentesAlergicosa" class="checkbox-label">No</label>
          
                <label class="antecedentesPersonale">Antecedentes Personales:</label><br>
                <input type="checkbox" id="antecedentesPersonales" name="antecedentesPersonales">
                <label for="antecedentesPersonales" class="checkbox-label">Sí</label>
                <input type="checkbox" id="antecedentesPersona" name="antecedentesPersona">
                <label for="antecedentesPersona" class="checkbox-label">No</label>
            </div>
            <div class="form-group">
                <label for="diagnostico" class="diagnostico">Diagnóstico (Antes del medicamento):</label><br>
                <textarea id="diagnostico" name="diagnostico" rows="3" required></textarea>
            </div>
            <div class="form-group">
                <button type="submit" name="Submit">Guardar</button>
                <button type="reset">Cancelar</button>
            </div>
        </form>
    `;
  }

  function mostrarConsultas() {
    const mainContent = document.getElementById('mainContent');
    fetch('FormEstudiantes.php')
        .then(response => response.json())
        .then(data => {
            const rowsPerPage = 10; 
            let currentPage = 1;

            function createTables(page) {
                const startIndex = (page - 1) * rowsPerPage;
                const endIndex = startIndex + rowsPerPage;

                // Primera tabla
                const studentsPage = data.aver.slice(startIndex, endIndex);
                let tablaHTML1 = `
                <table>
                    <thead>
                        <tr>
                            <th>Estudiante</th>
                            <th>Ingresó</th>
                            <th>Curso</th>
                            <th>Nivel</th>
                            <th>Fecha Nac.</th>
                            <th>Edad</th>
                            <th>Sexo</th>
                            <th>Padres</th>
                            <th>Tel. Padres</th>
                        </tr>
                    </thead>
                    <tbody>
                `;
                studentsPage.forEach(estudiante => {
                    tablaHTML1 += `
                        <tr>
                            <td>${estudiante.Nombre}</td>
                            <td>${estudiante.FechaIngreso}</td>
                            <td>${estudiante.Curso}</td>
                            <td>${estudiante.Nivel}</td>
                            <td>${estudiante.FechaNacimiento}</td>
                            <td>${estudiante.Edad}</td>
                            <td>${estudiante.Sexo}</td>
                            <td>${estudiante.NomApPadres}</td>
                            <td>${estudiante.TelefonoPadres}</td>
                        </tr>
                    `;
                });
                tablaHTML1 += `</tbody></table>`;

                // Segunda tabla
                const table2Page = data.tabla2.slice(startIndex, endIndex);
                let tablaHTML2 = `
                <table>
                    <thead>
                        <tr>
                            <th>Motivo de Atención</th>
                            <th>Síntomas</th>
                            <th>Medicamentos Sub.</th>
                            <th>Procedimientos</th>
                            <th>Ant. Alérgicos</th>
                            <th>Ant. Personales</th>
                            <th>Diagnóstico</th>
                        </tr>
                    </thead>
                    <tbody>
                `;
                table2Page.forEach(estudiante => {
                    tablaHTML2 += `
                        <tr>
                            <td>${estudiante.MotivoAtencion}</td>
                            <td>${estudiante.Sintomas}</td>
                            <td>${estudiante.Medicamentos}</td>
                            <td>${estudiante.Procedimiento}</td>
                            <td>${estudiante.AntAlergicos}</td>
                            <td>${estudiante.AntPersonales}</td>
                            <td>${estudiante.Diagnostico}</td>
                        </tr>
                    `;
                });
                tablaHTML2 += `</tbody></table>`;

                mainContent.innerHTML = tablaHTML1 + tablaHTML2;
                createPagination(page);
            }

            function createPagination(currentPage) {
                const totalPages = Math.ceil(data.aver.length / rowsPerPage);
                let paginationHTML = `<div class="pagination">`;

                for (let page = 1; page <= totalPages; page++) {
                    paginationHTML += `
                        <button onclick="goToPage(${page})" ${page === currentPage ? 'class="active"' : ''}>
                            ${page}
                        </button>
                    `;
                }

                paginationHTML += `</div>`;
                mainContent.innerHTML += paginationHTML;
            }

            window.goToPage = function(page) {
                currentPage = page;
                createTables(page);
            };

            createTables(currentPage);
        })
        .catch(error => {
            console.error('Error en la carga de las tablas:', error);
        });
}

async function mostrarEstadisticas() {
    try {
        let statisticsContent = document.getElementById('statisticsContent');
        if (!statisticsContent) {
            console.log('Creando contenedor y canvas...');
            statisticsContent = document.createElement('div');
            statisticsContent.id = 'statisticsContent';
            statisticsContent.style.width = '70%';
            statisticsContent.style.margin = '20px auto';

            const canvas = document.createElement('canvas');
            canvas.id = 'chartbar';
            statisticsContent.appendChild(canvas);

            const buttonContainer = document.createElement('div');
            buttonContainer.style.textAlign = 'center';
            buttonContainer.style.marginBottom = '20px';

            const buttons = ['Día', 'Semana', 'Mes', 'Año'];
            buttons.forEach(label => {
                const button = document.createElement('button');
                button.textContent = label;
                button.style.margin = '5px';
                button.addEventListener('click', () => filtrarEstadisticas(label.toLowerCase()));
                buttonContainer.appendChild(button);
            });

            statisticsContent.insertBefore(buttonContainer, canvas);

            const mainContent = document.getElementById('mainContent');
            if (mainContent) {
                mainContent.innerHTML = '';
                mainContent.appendChild(statisticsContent);
            } else {
                document.body.appendChild(statisticsContent);
            }
        } else {
            console.log('Contenedor de estadísticas existente, limpiando...');
            statisticsContent.innerHTML = '';
            const canvas = document.createElement('canvas');
            canvas.id = 'chartbar';
            statisticsContent.appendChild(canvas);

            const buttonContainer = document.createElement('div');
            buttonContainer.style.textAlign = 'center';
            buttonContainer.style.marginBottom = '20px';

            const buttons = ['Día', 'Semana', 'Mes', 'Año'];
            buttons.forEach(label => {
                const button = document.createElement('button');
                button.textContent = label;
                button.style.margin = '5px';
                button.addEventListener('click', () => filtrarEstadisticas(label.toLowerCase()));
                buttonContainer.appendChild(button);
            });

            statisticsContent.insertBefore(buttonContainer, canvas);
        }
        await cargarEstadisticasIniciales();
    } catch (error) {
        console.error('Error al mostrar las estadísticas:', error);
    }
}

async function cargarEstadisticasIniciales() {
    const response = await fetch('FormEstudiantes.php');
    const data = await response.json();
    console.log('Datos obtenidos:', data);

    if (!data.query || data.query.length === 0) {
        console.error('No hay datos para mostrar.');
        return;
    }

    const estadisticas = data.query;
    const labels = estadisticas.map(item => `${item.Curso} ${item.Seccion} ${item.Nivel}`);
    const valores = estadisticas.map(item => item.Cantidad);

    const ctx = document.getElementById('chartbar').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Cantidad de Estudiantes',
                data: valores,
                backgroundColor: [
                    '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'
                ],
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'top' },
                title: {
                    display: true,
                    text: 'Estadísticas de Estudiantes por Curso y Sección'
                }
            }
        }
    });
}

async function filtrarEstadisticas(periodo) {
    try {
        const response = await fetch(`FormEstudiantes.php?periodo=${periodo}`);
        const data = await response.json();
        console.log('Datos filtrados obtenidos:', data);

        if (!data.query || data.query.length === 0) {
            console.error('No hay datos para mostrar.');
            return;
        }
        const estadisticas = data.query;
        const labels = estadisticas.map(item => {
            if (periodo === 'día') {
                return item.FechaIngreso;
            } else if (periodo === 'semana') {
                return item.Semana;
            } else if (periodo === 'mes') {
                return item.Mes;
            } else if (periodo === 'año') {
                return item.Año;
            }
        });
        const valores = estadisticas.map(item => item.Cantidad);

        const ctx = document.getElementById('chartbar').getContext('2d');
        const chart = Chart.getChart('chartbar');
        if (chart) {
            chart.destroy();
        }

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Cantidad de Estudiantes',
                    data: valores,
                    backgroundColor: [
                        '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'
                    ],
                    hoverOffset: 4
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { position: 'top' },
                    title: {
                        display: true,
                        text: `Estadísticas de Estudiantes por ${periodo}`
                    }
                }
            }
        });
    } catch (error) {
        console.error('Error al filtrar las estadísticas:', error);
    }
}

//Menú Ayuda
        document.getElementById('Ayuda').addEventListener('click', () =>{
            const manual = 'manual.pdf';
        
            window.open(manual, '_blank'); 
        });
    
        function descargar() {
            const url = "FormEstudiantes.php?descargar=excel";
        
            const link = document.createElement("a");
            link.href = url;
            link.download = "DatosEstudiantes.xls";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
        
        function mostrarConfirmacionCerrarSesion() {
            document.getElementById('confirmacion').style.display = 'block';
        }
        
        function cancelar() {
            document.getElementById('confirmacion').style.display = 'none';
        }
        
        function cerrarSesion() {
            document.getElementById('confirmacion').style.display = 'none';
        
            document.cookie.split(";").forEach(function(cookie) {
                var eqPos = cookie.indexOf("=");
                var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
                document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
            });
        
            var xhr = new XMLHttpRequest();
            xhr.open('GET', 'logout.php', true); 
        
            xhr.onload = function() {
                if (xhr.status == 200) {
                    window.location.href = 'login.html';
                } else {
                    alert("Error al cerrar sesión. Por favor, intente de nuevo.");
                }
            };
        
            xhr.onerror = function() {
                alert("Error de conexión con el servidor.");
            };
        
            xhr.send();
        }
        
        function mostrarAñadir() { 
            const mainContent = document.getElementById('mainContent');
            mainContent.innerHTML = `
               <div class="form-container">
                    <h2>Añadir enfermera</h2>
                    <form id="registro-form" action="FormAdmin.php" method="POST">
                      <div class="foto-container">
                        <label for="foto-input">
                          <img id="foto-preview" src="default-avatar.png" alt="Foto de Perfil">
                          <div>Cambiar Foto</div>
                        </label>
                        <input type="file" id="foto-input" accept="image/*" style="display: none;">
                      </div>
              
                      <label for="nombre">Nombre:</label>
                      <input type="text" id="nombre" name="nombre" required>
              
                      <label for="usuario">Usuario (Correo Electrónico):</label>
                      <input type="email" id="usuario" name="usuario" required>
              
                      <label for="contrasena">Contraseña:</label>
                      <input type="password" id="contrasena" name="contrasena" required>
              
                      <label for="estado">Estado:</label>
                      <select id="estado" name="estado" required>
                        <option value="" disabled selected>Selecciona</option>
                        <option value="1">Administrador</option>
                        <option value="2">Usuario</option>
                      </select>
              
                      <button type="submit" name="submit">Registrar</button>
                    </form>
                  </div>
            `;
            
            const fotoInput = document.getElementById('foto-input');
            const fotoPreview = document.getElementById('foto-preview');
        
            fotoInput.addEventListener('change', function(event) {
                const file = event.target.files[0]; 
                if (file) {
                    const reader = new FileReader();
                    reader.onload = function(e) {
                        fotoPreview.src = e.target.result; 
                    };
                    reader.readAsDataURL(file); 
                }
            });
        }

        //--------------------------
        
        function mostrarUsuarios() { 
            const mainContent = document.getElementById('mainContent');
            mainContent.innerHTML = `
                <div class="table-container">
                    <h2>Usuarios/Enfermeras</h2>
                    <input type="text" id="searchInput" onkeyup="searchTable()" placeholder="Buscar usuarios...">
                    <table id="registros-tabla">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Usuario</th>
                                <th>Contraseña</th>
                                <th>Estado</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody id="usuarios-tbody">
                            <!-- Los datos se cargarán aquí -->
                        </tbody>
                    </table>
                </div>
            `;
            cargarUsuarios();
        }
        
        function cargarUsuarios() {
            fetch('FormAdmin.php')
                .then(response => response.json())
                .then(data => {
                    const tbody = document.getElementById('usuarios-tbody');
                    tbody.innerHTML = ''; // Limpiar los datos actuales
        
                    data.forEach(usuario => {
                        const row = document.createElement('tr');
                        row.innerHTML = `
                            <td>${usuario.Nombre}</td>
                            <td>${usuario.Usuario}</td>
                            <td>${usuario.Contraseña}</td>  <!-- Aquí mostramos la contraseña -->
                            <td>${usuario.Estado}</td>
                            <td>
                                <button class="editar-btn" onclick="editRow(this, ${usuario.id})">Editar</button>
                                <button class="eliminar-btn" onclick="deleteRow(this, ${usuario.id})">Eliminar</button>
                            </td>
                        `;
                        tbody.appendChild(row);
                    });
                })
                .catch(error => console.log('Error al cargar los usuarios:', error));
        }
        
        function searchTable() {
            const input = document.getElementById('searchInput');
            const filter = input.value.toLowerCase();
            const table = document.getElementById('registros-tabla');
            const rows = table.getElementsByTagName('tr');
        
            for (let i = 1; i < rows.length; i++) {
                const cells = rows[i].getElementsByTagName('td');
                let match = false;
                for (let j = 0; j < cells.length - 1; j++) {  
                    if (cells[j].innerText.toLowerCase().includes(filter)) {
                        match = true;
                    }
                }
                rows[i].style.display = match ? '' : 'none';
            }
        }
        
        function editRow(button, id) {
            const row = button.parentNode.parentNode;
            const cells = row.getElementsByTagName('td');
            const nombre = cells[0].innerText.trim();
            const usuario = cells[1].innerText.trim();
            const contraseña = cells[2].innerText.trim(); 
            const estado = cells[3].innerText.trim();
        
            cells[0].innerHTML = `<input type="text" value="${nombre}" id="nombre-${id}">`;
            cells[1].innerHTML = `<input type="text" value="${usuario}" id="usuario-${id}">`;
            cells[2].innerHTML = `<input type="password" value="${contraseña}" id="contraseña-${id}">`; // Contraseña como campo de tipo password
            cells[3].innerHTML = `<input type="text" value="${estado}" id="estado-${id}">`;
        
            button.innerText = 'Guardar';
            button.onclick = function () {
                saveRow(button, id);
            };
        }
        
       function saveRow(button, id) {
    // Obtener valores de los campos
    const nombre = document.getElementById(`nombre-${id}`)?.value.trim();
    const usuario = document.getElementById(`usuario-${id}`)?.value.trim();
    const contraseña = document.getElementById(`contraseña-${id}`)?.value.trim();
    const estado = document.getElementById(`estado-${id}`)?.value.trim();

    // Validar que todos los campos estén llenos
    if (!nombre || !usuario || !contraseña || !estado) {
        alert('Todos los campos son obligatorios');
        return;
    }

    // Validar formato de los campos (opcional, mejora de seguridad)
    if (contraseña.length < 6) {
        alert('La contraseña debe tener al menos 6 caracteres');
        return;
    }

    // Crear el objeto FormData
    const formData = new FormData();
    formData.append('update', true);
    formData.append('id', id);
    formData.append('nombre', nombre);
    formData.append('usuario', usuario);
    formData.append('password', contraseña); // Mejor usar "password"
    formData.append('estado', estado);

    // Enviar datos al servidor
    fetch('FormAdmin.php', {
        method: 'POST',
        body: formData,
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            console.log('Respuesta del servidor:', data);
            if (data.includes('Datos actualizados correctamente')) {
                cargarUsuarios(); // Recargar la tabla
            } else {
                console.error('Error al guardar:', data);
                alert('Error al guardar los cambios. Verifique los datos e intente nuevamente.');
            }
        })
        .catch(error => {
            console.error('Error en fetch:', error);
            alert('Hubo un error al comunicarse con el servidor. Intente más tarde.');
        });
}       
        
        function deleteRow(button, id) {
            if (confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
                const formData = new FormData();
                formData.append('delete', true);
                formData.append('id', id);
        
                fetch('FormAdmin.php', {  // Asegúrate de que apunte a tu archivo PHP
                    method: 'POST',
                    body: formData
                })
                .then(response => response.text())
                .then(data => {
                    console.log(data);  // Verifica la respuesta del servidor
                    cargarUsuarios();  // Recargar los usuarios después de la eliminación
                })
                .catch(error => console.error('Error al eliminar los datos:', error));
            }
        }

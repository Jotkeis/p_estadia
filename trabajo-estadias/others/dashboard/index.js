const students = [
    { nombre: 'Alan', apellidos: 'Garcia', edad: 20, email: 'alan@example.com', direccion: 'San servando', carrera: 'TICS' },
    { nombre: 'Edgar', apellidos: 'Soria', edad: 20, email: 'edgar@example.com', direccion: 'Raul Salinas', carrera: 'TICS' },
    { nombre: 'Jona', apellidos: 'Cruz', edad: 20, email: 'jona@example.com', direccion: 'Rancho', carrera: 'TICS' },
    { nombre: 'Misa', apellidos: 'Web', edad: 20, email: 'misa@example.com', direccion: 'UTE', carrera: 'TICS' }
  ];


  //Mostrar datos de estudiantes
  function displayStudents() {
    const studentTable = document.getElementById('student-table');
    studentTable.innerHTML = '';

    students.forEach(student => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${student.nombre}</td>
        <td>${student.apellidos}</td>
        <td>${student.edad}</td>
        <td>${student.email}</td>
        <td>${student.direccion}</td>
        <td>${student.carrera}</td>
        <td>
          <a href="#" class="btn">Edit</a>
          <a href="#" class="btn btn-danger">Delete</a>
        </td>
      `;
      studentTable.appendChild(row);
    });
  }

  //Mostrar nuevos estudiantes
  function displayNewStudents() {
    const newStudentsTable = document.getElementById('new-students-table');
    newStudentsTable.innerHTML = '';

  }

  //Mostrar Estadisticas de los estudiantes
  function displayMajorStats() {
    const majorStatsElement = document.getElementById('major-stats');
    majorStatsElement.innerHTML = '';


  }

  //Llamar funciones
  displayStudents();
  displayNewStudents();
  displayMajorStats();
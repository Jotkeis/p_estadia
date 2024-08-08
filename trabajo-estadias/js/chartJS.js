const GraficPie = (teachers, students) => {
  const ctx = document.getElementById('myChart');
  console.log(teachers);
  console.log(students);

  const data = {
    labels: ['Maestros', 'Alumnos'],
    datasets: [{
      label: 'Distribución de Maestros y Alumnos',
      data: [teachers, students], // Usa los valores recibidos
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)'
      ],
      hoverOffset: 2
    }]
  };

  new Chart(ctx, {
    type: 'pie',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

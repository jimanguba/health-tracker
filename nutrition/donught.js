let myChart = document.getElementById('myChart').getContext('2d');

let newChart = new Chart(myChart, {
    type:'doughnut',
    data: {
        labels:['Fat', 'Carbohydrate', 'Protein'],
        datasets: [{
            label: 'Neutrition Chart',
            data: [40, 25, 35],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)'
            ],
            hoverOffset : 4
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
              position: 'bottom',
              labels: {
                  font: {
                      size: 25
                  }
              }
            },
            title: {
              display: true,
              text: 'Nutrition Chart',
              font: {
                  size: 30
              }
            }
        }
    },
    
});
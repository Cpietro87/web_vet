let ctx = document.getElementById('myChart');

let myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Rojo', 'Azul', 'Amarilos', 'verde', 'Purpa', 'naranja'],
        datasets: [{
            label: 'Colores favoritos',
            data: [12,20,4,7,10,15],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(223, 225, 71, 0.8)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    }
})
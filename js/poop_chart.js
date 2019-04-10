const createChart = function () {
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Australia', 'Canada', 'France', 'Germany', 'United Kingdom', 'USA','Others'],
            datasets: [{
                label: '# of top 1000 shitty movies',
                data: [30, 73, 26, 47, 37, 723, 64],
                backgroundColor: [
                    'rgba(204,255,0,0.2)',
                    'rgba(255,0,0,0.2)',
                    'rgba(51,0,255, 0.2)',
                    'rgba(0, 0, 0, 0.2)',
                    'rgba(255, 0, 102, 0.2)',
                    'rgba(238,238,238,0.2)',
                    'rgba(0,204,0,0.2)',
                ],
                borderColor: [
                    'rgba(204,255,0,1)',
                    'rgba(255,0,0,1)',
                    'rgba(51,0,255, 1)',
                    'rgba(0, 0, 0, 1)',
                    'rgba(255, 0, 102, 1)',
                    'rgba(119,119,119,1)',
                    'rgba(0,204,0,1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

// Ca ca te permet d'attendre que la page soit chargée pour faire ton script
$( document ).ready(function() {
    createChart();
});

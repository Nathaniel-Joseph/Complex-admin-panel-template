// jquery chart
    var xValues = [100,200,300,400,500,600,700,800,900,1000];

    new Chart("myChart", {
    type: "line",
    data: {
        labels: xValues,
        datasets: [{ 
            data: [4900,4900,4900,4900,5000,5900,6000,6900,7000,7900],
            borderColor: "green",
            fill: true
        }]
    },
    options: {
        legend: {display: false},
        scales: {
            xAxes: [{
                gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                }
            }],
            yAxes: [{
                gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                }   
            }]
        }
    }
    });
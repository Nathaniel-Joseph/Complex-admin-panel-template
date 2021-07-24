// jquery chart
    var xValues = [100,200,300,400,500,600,700,800,900,1000];

    new Chart("myChart", {
    type: "line",
    data: {
        labels: xValues,
        datasets: [{ 
            data: [7900,7000,6900,6000,5900,5000,6900,6000,7900,4000],
            borderColor: "#0d6efd",
            backgroundColor: [
                "#e7f1ff",
            ],
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
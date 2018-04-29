var options = {
    title: {
            display: true,
            text: 'Project/Work Monthly Distribution'
        },
    animation:{
        easing: "easeOutBack",
        animateRotate: true,
        render: true,
    }, 
    legend: {
        display: false,
        position: "bottom"
    }    
}

var ctx = document.getElementById('myChart').getContext('2d');

var myRadarChart = new Chart(ctx, {
    type: 'radar',
    data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September'
            , 'October', 'November', 'December'],
        datasets: [{
            label: "Neural Network Cars",
            backgroundColor: "rgba(0, 146, 165, 0.1)",
            borderColor: "rgba(0, 146, 165)",
            data: [0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 10, 20, 20]
        }, 
        {
            label: "Physics Engine",
            backgroundColor: "rgba(224, 215, 0, 0.1)",
            borderColor: "rgba(224, 215, 0)",
            data: [0, 0, 0, 0, 0, 0, 10, 15, 20]
        }, 
        {
            label: "TEDX",
            backgroundColor: "rgba(252, 4, 42, 0.10)",
            borderColor: "rgba(252, 4, 42)",
            data: [0, 0, 0, 20, 40]
        }, 
        {
            label: "Tintern",
            backgroundColor: "rgba(252, 128, 4, 0.1)",
            borderColor: "rgba(252, 128, 4)",
            data: [0, 0, 20, 20]
        }, 
        {
            label: "March Madness Predictor",
            backgroundColor: "rgba(38, 155, 255, 0.1)",
            borderColor: "rgba(38, 155, 255)",
            data: [20, 20, 30, 0, 0]
        }, 
        {
            label: "Hall of Fame Predictor",
            backgroundColor: "rgba(25, 177, 126, 0.1)",
            borderColor: "rgba(25, 177, 126, 0.93)",
            data: [0, 30, 40, 40, 0]
        },
        {
            label: "CryptoGraph",
            backgroundColor: "rgb(255, 216, 0, 0.1)",
            borderColor: "rgb(255, 216, 0)",
            data: [0, 0, 30, 40, 20]
        }, 
        {
            label: "Edelweiss Tech Analyst Intern",
            backgroundColor: "rgba(255, 196, 0, 0.1)",
            borderColor: "rgba(255, 196, 0)",
            data: [0, 0, 30, 40, 20]
        },
        {
            label: "Bolt VR Developer",
            backgroundColor: "rgba(109, 20, 198, 0.1)",
            borderColor: "rgba(109, 20, 198)",
            data: [0, 0, 0, 0, 0, 0, 0, 0, 15, 15, 15, 10, 10, 10]
        },
        {
            label: "Languages in Durham Project",
            backgroundColor: "rgba(4, 157, 163, 0.1)",
            borderColor: "rgba(4, 157, 163)",
            data: [0, 0, 0, 0, 10, 10, 15, 10, 15]       
            
        }
    ]
    },
    options: options
});
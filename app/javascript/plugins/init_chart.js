import Chart from 'chart.js'


let dashboard = document.getElementById('myChart');
if (dashboard) {
  const ct = document.getElementById("myChart");
  const new_data = ct.dataset.turnover.split('-');
  const new_names = ct.dataset.names.split('-');
  const ctx = document.getElementById("myChart").getContext('2d');
  var myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
          labels: new_names,
          datasets: [{
              label: 'Turnover',
              data: new_data,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.3)',
                  'rgba(54, 162, 235, 0.3)',
                  'rgba(255, 206, 86, 0.4)',
                  'rgba(75, 192, 192, 0.5)',
                  'rgba(153, 102, 255, 0.5)',
                  'rgba(255, 159, 64, 0.5)'
              ],
              borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          }
      }
  });

  const phones = document.querySelectorAll(".telephone");
  console.log(phones);
};
// phones.addEventListener("click", (event) => {
//   console.log(event);
//   console.log(event.currentTarget);
// });

import Chart from 'chart.js'


let dashboard = document.getElementById('myChart');
if (dashboard) {
  const ct = document.getElementById("myChart");
  const total = ct.dataset.total;
  // console.log(total);
  const new_data = ct.dataset.turnover.split('-');
  const new_names = ct.dataset.names.split('-');
  const ctx = document.getElementById("myChart").getContext('2d');

  // Chart.pluginService.register({
  //     // beforeRender: function (chart) {
  //     //   if (chart.config.options.showAllTooltips) {
  //     //     // create an array of tooltips
  //     //     // we can't use the chart tooltip because there is only one tooltip per chart
  //     //     chart.pluginTooltips = [];
  //     //     chart.config.data.datasets.forEach(function (dataset, i) {
  //     //       chart.getDatasetMeta(i).data.forEach(function (sector, j) {
  //     //         chart.pluginTooltips.push(new Chart.Tooltip({
  //     //           _chart: chart.chart,
  //     //           _chartInstance: chart,
  //     //           _data: chart.data,
  //     //           _options: chart.options,
  //     //           _active: [sector]
  //     //         }, chart));
  //     //       });
  //     //     });

  //     //     // turn off normal tooltips
  //     //     chart.options.tooltips.enabled = false;
  //     //   }
  //     // },
  //     afterDraw: function (chart, easing) {
  //       chart._drawTooltip();
  //     //   if (chart.config.options.showAllTooltips) {
  //     //     // we don't want the permanent tooltips to animate, so don't do anything till the animation runs atleast once
  //     //     if (!chart.allTooltipsOnce) {
  //     //       if (easing !== 1)
  //     //         return;
  //     //       chart.allTooltipsOnce = true;
  //     //     }

  //     //     // turn on tooltips
  //     //     chart.options.tooltips.enabled = true;
  //     //     Chart.helpers.each(chart.pluginTooltips, function (tooltip) {
  //     //       console.log(tooltip)
  //     //       tooltip.initialize();
  //     //       tooltip.draw();
  //     //       // we don't actually need this since we are not animating tooltips
  //     //       tooltip.pivot();
  //     //       tooltip.transition(easing).draw();
  //     //     });
  //     //     chart.options.tooltips.enabled = false;
  //     //   }
  //     }
  //   });



  var myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
          labels: new_names,
          datasets: [{
              label: 'Turnover',
              data: new_data,
              backgroundColor: [
                  'rgba(54, 162, 235, 0.9)',
                  'rgba(153, 102, 255, 0.9)',
                  'rgba(255, 206, 86, 0.9)',
                  'rgba(75, 192, 192, 0.9)',
                  'rgba(255, 99, 132, 0.9)',
                  'rgba(255, 159, 64, 0.9)'
              ],
              borderColor: [
                  'rgba(54, 162, 235, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(255, 99, 132, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true,
                      display:false

                  },
                    gridLines:{
                      display:false,
                      drawBorder: false,
                    }
              }]
          },
          tooltips: {
            enabled: true,
            intersect: false,
            titleFontFamily: "Nunito",
            footerFontSize: 24,
            bodyFontSize: 24
          },
          showAllTooltips: true,
          animation: {
            onAnimationComplete: function() {
              this.showTooltip(this.segments, true);
            },
          },
          legend: {
            display: false,
            fontColor: 'black',
            defaultFontFamily: "Nunito",
          }
      },
      centerText: {
        display: true,
        text: `${total} € Turnover`
      }
  });
};

Chart.Chart.pluginService.register({
  beforeDraw: function(chart) {
      if (chart.config.centerText.display !== null &&
          typeof chart.config.centerText.display !== 'undefined' &&
          chart.config.centerText.display) {
          drawTotals(chart);
      }
  },
});

function drawTotals(chart) {

    var width = chart.chart.width,
    height = chart.chart.height,
    ctx = chart.chart.ctx;

    ctx.restore();
    var fontSize = (height / 340).toFixed(2);
    ctx.font = fontSize + "em sans-serif";
    ctx.textBaseline = "middle";

    var fontFamily = "Nunito";
    ctx.fontFamily;

    var text = chart.config.centerText.text,
    textX = Math.round((width - ctx.measureText(text).width) / 2),
    textY = (height / 2);

    ctx.fillText(text, textX, textY);
    ctx.save();
}

// window.onload = function() {
//     var ctx = document.getElementById("chart-area").getContext("2d");
//     window.myDoughnut = new Chart(ctx, config);
// };


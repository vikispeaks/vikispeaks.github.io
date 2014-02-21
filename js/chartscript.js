$(document).ready( function() {


         $('#areachartcontainer').highcharts({
            chart: {
                type: 'areaspline'
            },
            title: {
                text: 'Skills'
            },
            legend: {
                layout: 'vertical',
                align: 'left',
                verticalAlign: 'top',
                x: 150,
                y: 100,
                floating: true,
                borderWidth: 1,
                backgroundColor: '#FFFFFF'
            },
            xAxis: {
                categories: [
                    '6:00',
                    '7:00',
                    '8:00',
                    '9:00',
                    '10:00',
                    '11:00',
                    '12:00'
                ],
            },
            yAxis: {
                title: {
                    text: ''
                }
            },
            legend: {
                layout: 'horizontal',
                align: 'bottom',
                verticalAlign: 'bottom',
                borderWidth: 0
            },
            credits: {
                enabled: false
            },
            plotOptions: {
                areaspline: {
                    fillOpacity: 0.5
                }
            },
            series: [{
                name: 'Russia',
                data: [0, 0, 2, 5, 4, 0]
            }, {
                name: 'USA',
                data: [0, 3, 4, 3, 0, 0]
            },
             {
                name: 'Newzealand',
                data: [0, 5, 5, 6, 2, 0]
            }]
        });



    $('#linechartcontainer').highcharts({
            title: {
                text: 'Visitors',
                x: -20 //center
            },
            xAxis: {
                categories: ['6:00','7:00','8:00','9:00','10:00','11:00',
                    '12:00','13:00','14:00','15:00']
            },
            yAxis: {
                title: {
                    text: ''
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            legend: {
                layout: 'horizontal',
                align: 'top',
                verticalAlign: 'top',
                borderWidth: 0
            },
            series: [{
                name: 'Visitors',
                data: [7.0, 6.9, 9.5, 14.5, 20.2, 25.2, 23.3, 18.3, 13.9, 9.6]
            },  {
                name: 'Returning Visitors',
                data: [3.9, 4.2, 5.7, 8.5, 11.9, 13.6, 15.2, 10.3, 6.6, 4.8]
            }]
        });


        $('div.highcharts-container svg text tspan:contains("Highcharts.com")').text("");

    
  });
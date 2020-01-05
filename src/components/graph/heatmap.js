import React, { Component } from 'react';
import Chart from 'react-apexcharts';

export default class Heatmap extends Component {
    constructor(props){
        super(props);
        function generateData(count, yrange) {
            var i = 0;
            var day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat']
            var series = [];
            while (i < count) {
                // var x = 'w' + (i + 1).toString();
                var x = day[i];
                var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
        
                series.push({
                    x: x,
                    y: y
                });
                i++;
            }
            return series;
        }

        this.state = {
          
            series: [{
              name: '12am',
              data: generateData(7, {
                min: 0,
                max: 90
              })
            },
            {
              name: '2am',
              data: generateData(7, {
                min: 0,
                max: 90
              })
            },
            {
              name: '4am',
              data: generateData(7, {
                min: 0,
                max: 90
              })
            },
            {
              name: '6am',
              data: generateData(7, {
                min: 0,
                max: 90
              })
            },
            {
              name: '10am',
              data: generateData(7, {
                min: 0,
                max: 90
              })
            },
            {
              name: '12pm',
              data: generateData(7, {
                min: 0,
                max: 90
              })
            },
            {
              name: '2pm',
              data: generateData(7, {
                min: 0,
                max: 90
              })
            },
            {
              name: '4pm',
              data: generateData(7, {
                min: 0,
                max: 90
              })
            },
            {
              name: '6pm',
              data: generateData(7, {
                min: 0,
                max: 90
              })
            }
            ],
            options: {
              chart: {
                height: 350,
                type: 'heatmap',
              },
              dataLabels: {
                enabled: false
              },
              colors: ["#008FFB"],
              title: {
                text: 'HeatMap Chart'
              },
            },
          
          
          };

    }
    render() {
        return (
            <div style={{ width: '45%',  height: 'auto', backgroundColor: '#fff' ,boxShadow: '0px 9px 7px 0px rgba(27,109,172,0.22)', alignSelf: 'center'}}>
                <Chart options={this.state.options} series={this.state.series} type="heatmap" height={350} />
            </div>
        )
    }
}

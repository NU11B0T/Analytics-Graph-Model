import React, { Component } from 'react';
import Chart from 'react-apexcharts';


export default class bar extends Component {
    constructor(props){
        super(props);
        this.state = {
          
            series: [{
              name: 'Followers Count',
              data: [44, 55, 41, 67, 22, 43, 21]
            }],
            options: {
              chart: {
                // height: 350,
                type: 'bar',
              },
              plotOptions: {
                bar: {
                  columnWidth: '50%',
                  endingShape: 'rounded'  
                }
              },
              dataLabels: {
                enabled: false
              },
              stroke: {
                width: 2
              },
              
              grid: {
                row: {
                  colors: ['#fff', '#f2f2f2']
                }
              },
              xaxis: {
                labels: {
                  rotate: -45
                },
                categories: ['Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
              },
              yaxis: {
                title: {
                  text: 'Count ',
                },
              },
              fill: {
                type: 'gradient',
                gradient: {
                  shade: 'light',
                  type: "horizontal",
                  shadeIntensity: 0.25,
                  gradientToColors: undefined,
                  inverseColors: true,
                  opacityFrom: 0.85,
                  opacityTo: 0.85,
                  stops: [50, 0, 100]
                },
              },
              title: {
                text: "Followers Chart",
                rotate: 90,
                offsetY: 0,
                offsetX: 0,
                style: { fontSize: "11px", cssClass: "" }
              }
            },
          
          
          };
    }


    render() {
        return (
            <div style={{width: '45%',  height: 'auto', backgroundColor: '#fff' ,boxShadow: '0px 9px 7px 0px rgba(27,109,172,0.22)', alignSelf: 'center'}}>
                <Chart options={this.state.options} series={this.state.series} type="bar"/>
            </div>
        )
    }
}

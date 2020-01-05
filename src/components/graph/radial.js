import React, { Component } from 'react';
import Chart from 'react-apexcharts';


export default class Radial extends Component {
    constructor(props){
        super(props);
        this.state = {
          
            series: [76, 67, 61],
            options: {
              chart: {
                // height: 390,
                type: 'radialBar',
                toolbar: {
                  show: true,
                  tools: {
                    download: true,
                    selection: true,
                    zoom: true,
                    zoomin: true,
                    zoomout: true,
                    pan: true,
                    reset: true | '<img src="/static/icons/reset.png" width="20">',
                    customIcons: []
                  },
                  autoSelected: 'zoom' 
                },
              },
              plotOptions: {
                radialBar: {
                  offsetY: 0,
                  startAngle: 0,
                  endAngle: 270,
                  hollow: {
                    margin: 5,
                    size: '30%',
                    background: 'transparent',
                    image: undefined,
                  },
                  dataLabels: {
                    name: {
                      show: false,
                    },
                    value: {
                      show: false,
                    }
                  }
                }
              },
              colors: ['#12CBC4', '#1289A7', '#0652DD', '#0077B5'],
              labels: ['Desktop', 'Android', 'IOS'],
              legend: {
                show: true,
                floating: true,
                fontSize: '18px',
                position: 'left',
                offsetX: 100,
                offsetY: 40,
                labels: {
                  useSeriesColors: true,
                },
                markers: {
                  size: 0
                },
                formatter: function(seriesName, opts) {
                  return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
                },
                itemMargin: {
                  horizontal: 3,
                }
              },
              title: {
                text: 'Device Chart'
              },
              responsive: [{
                breakpoint: 480,
                options: {
                  legend: {
                      show: false
                  }
                }
              }]
            },
          
          
          };
    }

    render() {
        return (
            <div style={{ width: '40%',  height: 'auto', backgroundColor: '#fff' ,boxShadow: '0px 9px 7px 0px rgba(27,109,172,0.22)', alignSelf: 'center'}}>
                <Chart options={this.state.options} series={this.state.series} type="radialBar" />
            </div>
        )
    }
}

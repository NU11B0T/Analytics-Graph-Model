import React, { Component } from 'react';
import Chart from 'react-apexcharts';


export default class PieChart extends Component {
    constructor(props){
        super(props);
        this.state = {
          
            series: [44, 55, 13, 33],
            options: {
              chart: {
                // width: 380,
                type: 'pie',
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
              labels: ["Slack", "Viber", "Wechat", "Whatsapp"],
              dataLabels: {
                enabled: false
              },
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200
                  },
                  legend: {
                    show: false
                  }
                }
              }],
              legend: {
                position: 'right',
                offsetY: 40,
                // height: 230,
              },
              title: {
                text: 'Social Chart'
              }
            },
          
          
          };

    }

    render() {
        return (
            <div style={{ width: '45%',  height: 'auto', backgroundColor: '#fff' ,boxShadow: '0px 9px 7px 0px rgba(27,109,172,0.22)', display: 'flex' }}>
              <div style={{ width: '500px',  height: 'auto', marginLeft: 'auto', marginRight: 'auto'}}>  
                <Chart options={this.state.options} series={this.state.series} type="pie"  />
              </div>
            </div>
        )
    }
}

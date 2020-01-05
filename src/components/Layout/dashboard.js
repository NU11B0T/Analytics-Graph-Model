import React, { Component } from 'react';
import Navbar from '../navbar/navBar';
import IndiaMap from '../maps/india';
import WorldMap from '../maps/hworld';
import LineChart from '../graph/line';
import BarChart from '../graph/bar';
import HeatMap from '../graph/heatmap';
import PieChart from '../graph/pie';
import RadialChart from '../graph/radial';

export default class Dashboard extends Component {
    render() {
        return (
            <div style={{ marginTop: '0px'}}>
               <Navbar /> 
               {/* <WorldMap /> */}
               <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px'}}>
                    <LineChart />
                    <BarChart />
               </div>
               <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px'}}>
                    <HeatMap />
                    <PieChart />
               </div>
               <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px'}}>
                    <RadialChart />
                    <WorldMap />
               </div>
            </div>
        )
    }
}

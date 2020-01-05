import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

import indiaMap from '../../data/topojson/india/india-districts.json';
import tamilnadu from '../../data/topojson/tamilnadu/tamilnadu.topo.json';


export default class India extends Component {
    render() {
        
        const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";
        
        return (
            <div style={{ width: '500px', height:'400px', borderRadius: '1px', borderColor: 'black', borderStyle: 'Solid'}}>
                <ComposableMap 
                projection="geoMercator"    
                projectionConfig={{
                    // rotate: [-78.0, -10, 0],
                    // scale: 100
                }}>
                    <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                        geographies.map(geo => console.log(geo) || <Geography key={geo.rsmKey} geography={geo} />)
                        }
                    </Geographies>
                </ComposableMap>
            </div>
        )
    }
}

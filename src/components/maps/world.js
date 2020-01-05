import React from "react";
import { Typography } from "antd";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const markers = [
  { markerOffset: 25, name: "Santiago", coordinates: [-70.6693, -33.4489] },
  { markerOffset: 25, name: "New York", coordinates: [ -74.0060, 40.7128,] },
  { markerOffset: 25, name: "Italy", coordinates: [12.5674, 41.8719] },
  { markerOffset: 25, name: "India", coordinates: [78.9629, 20.5937] },
];

const { Title } = Typography;
const MapChart = () => {
  return (
    <div style={{ width: '600px',  height: 'auto', backgroundColor: '#fff' ,boxShadow: '0px 9px 7px 0px rgba(27,109,172,0.22)', alignSelf: 'flex-start'}}>
    <div style={{ fontFamily: 'Rubik', fontSize: '18px', textAlign: 'center', backgroundColor: '#fff'}}>DataCenter Location</div>
    <div style={{  backgroundColor: '#fff' ,boxShadow: '0px 9px 7px 0px rgba(27,109,172,0.22)'}}>
    <ComposableMap
      projection="geoMercator"
    //   projectionConfig={{
    //     rotate: [58.0, 20.0],
    //     scale: 400
    //   }}
    >
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies
            // .filter(d => d.properties.REGION_UN === "Americas")
            .map(geo => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#EAEAEC"
                stroke="#D6D6DA"
              />
            ))
        }
      </Geographies>
      {markers.map(({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={coordinates}>
          <circle r={10} fill="#F00" stroke="#fff" strokeWidth={2} />
          <text
            textAnchor="middle"
            y={markerOffset}
            style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
          >
            {name}
          </text>
        </Marker>
      ))}
    </ComposableMap>
    </div>
    </div>
  );
};

export default MapChart;

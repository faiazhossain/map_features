'use client'
import * as React from 'react';
import Map from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';
const page = () => {
  return (
    <Map
    initialViewState={{
      longitude: 90.37839,
      latitude: 23.76663,
      zoom: 14
    }}
    style={{width: "100%", height: "98vh"}}
    mapStyle="https://map.barikoi.com/styles/osm-liberty/style.json?key=NDE2NzpVNzkyTE5UMUoy"
  />
  );
}

export default page
'use client'
import Map from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";

const ReactMapGL = ({url}) => {
  return (
    <Map
      initialViewState={{
        longitude: 90.37839,
        latitude: 23.76663,
        zoom: 14,
      }}
      style={{ width: "100%", height: "98vh" }}
      mapStyle="http://localhost:3000/api/map"
    />
  );
};

export default ReactMapGL;

'use client'
import Map, { Marker } from "react-map-gl/maplibre";
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
    >
      <Marker longitude={90.37839} latitude={23.76663}>
        <div>Marker</div>
      </Marker>
      </Map>
  );
};

export default ReactMapGL;

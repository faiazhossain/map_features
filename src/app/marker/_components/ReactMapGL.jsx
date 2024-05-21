'use client'
import Map, { Marker } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";

const ReactMapGL = () => {
  return (
    <Map
      initialViewState={{
        longitude: 90.36401,
        latitude: 23.82378,
        zoom: 18,
      }}
      style={{ width: "100%", height: "98vh" }}
      mapStyle="http://localhost:3000/api/map"
    >
      <Marker longitude={90.36401} latitude={23.82378} draggable anchor="bottom" />
      </Map>
  );
};

export default ReactMapGL;

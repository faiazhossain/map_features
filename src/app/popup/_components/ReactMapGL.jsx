"use client";
import Map, { Popup } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import { useState } from "react";

const ReactMapGL = () => {
  const [showPopup, setShowPopup] = useState(true);
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
      {showPopup && (
        <Popup
          latitude={23.82378}
          longitude={90.36401}
          anchor="bottom"
          onClose={() => setShowPopup(false)}
        >
          You are here
        </Popup>
      )}
    </Map>
  );
};

export default ReactMapGL;

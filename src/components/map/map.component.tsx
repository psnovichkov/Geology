"use client";
import * as tt from "@tomtom-international/web-sdk-maps";
import "@tomtom-international/web-sdk-maps/dist/maps.css";
import { useState, useRef, useEffect } from "react";

const POCATELLO = { lng: -112.452911, lat: 42.880363 };

// function Map() {
//   return <div>placeholder for map</div>;
// }

function Map() {
  const [map, setMap] = useState<tt.Map>();
  const mapContainer = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (mapContainer.current == null) {
      return;
    }
    let map = tt.map({
      key: "oCXobN6PCKcWwBJBI6ARrCoWXPWckRUg",
      container: mapContainer.current.id,
      center: POCATELLO,
      zoom: 10,
      language: "en-GB",
    });

    map.addControl(new tt.FullscreenControl());
    map.addControl(new tt.NavigationControl());

    setMap(map);
    return () => {
      map.remove();
    };
    //eslint-disable-next-line
  }, []);
  return (
    <div className="container">
      <nav className="nav">
        <h1> Geofencing in React</h1>
      </nav>
      <div
        style={{ height: "500px" }}
        ref={mapContainer}
        className="map"
        id="map"
      />
    </div>
  );
}

export default Map;

//https://api.tomtom.com/geofencing/1/projects/project?key=oCXobN6PCKcWwBJBI6ARrCoWXPWckRUg&adminKey=VNEnGS8vliZvIDdSVY1I7BcWgsQXdjg44vP7Jm03UaoeG2Q2

//https://api.tomtom.com/geofencing/1/projects/9fd0769e-5d6b-4225-b2da-b1106a8e1e4e/fence?key=oCXobN6PCKcWwBJBI6ARrCoWXPWckRUg&adminKey=VNEnGS8vliZvIDdSVY1I7BcWgsQXdjg44vP7Jm03UaoeG2Q2
//

//API_KEY: oCXobN6PCKcWwBJBI6ARrCoWXPWckRUg
//ADMIN_KEY: VNEnGS8vliZvIDdSVY1I7BcWgsQXdjg44vP7Jm03UaoeG2Q2
//PROJECT_ID: 9fd0769e-5d6b-4225-b2da-b1106a8e1e4e




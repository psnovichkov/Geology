//API_KEY: AIzaSyCK7obmyQyE1pnxCDG7XbwFSzGjQ2UOXZ0

import {
  Rectangle,
  GoogleMap,
  DrawingManager,
  useJsApiLoader,
  Polygon,
} from "@react-google-maps/api";
import type { NextPage } from "next";
import React from "react";
import { ReactHTMLElement, useMemo } from "react";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

export default function MyGoogleMap(): JSX.Element {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCK7obmyQyE1pnxCDG7XbwFSzGjQ2UOXZ0",
  });
  const [map, setMap] = React.useState<google.maps.Map>();
  const onLoad = React.useCallback(function callback(map: google.maps.Map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    if (map == null) {
      return;
    }
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: google.maps.Map) {
    setMap(undefined);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={20}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      {/* <DrawingManager drawingMode={google.maps.drawing.OverlayType.MARKER} /> */}
    </GoogleMap>
  ) : (
    <></>
  );
}

// const MyGoogleMap: JSX.Element = () => {
//   const libraries = useMemo(() => ["places"], []);
//   const mapCenter = useMemo(
//     () => ({ lat: 27.672932021393862, lng: 85.31184012689732 }),
//     []
//   );

//   const mapOptions = useMemo<google.maps.MapOptions>(
//     () => ({
//       disableDefaultUI: true,
//       clickableIcons: true,
//       scrollwheel: false,
//     }),
//     []
//   );

//   const { isLoaded } = useJsApiLoader({
//     googleMapsApiKey: "AIzaSyCK7obmyQyE1pnxCDG7XbwFSzGjQ2UOXZ0",
//     libraries: libraries as any,
//   });

//   if (!isLoaded) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div>
// hello
//     </div>
//   );
// };

// export default MyGoogleMap;

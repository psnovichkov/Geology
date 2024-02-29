//API_KEY: AIzaSyCK7obmyQyE1pnxCDG7XbwFSzGjQ2UOXZ0

import {
  Rectangle,
  GoogleMap,
  DrawingManager,
  useJsApiLoader,
  Polygon,
  Libraries,
} from "@react-google-maps/api";
import type { NextPage } from "next";
import React from "react";
import { ReactHTMLElement, useMemo } from "react";

const containerStyle = {
  width: "700px",
  height: "600px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const libraries: Libraries = ["drawing"];

export default function MyGoogleMap(): JSX.Element {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCK7obmyQyE1pnxCDG7XbwFSzGjQ2UOXZ0",
    libraries: libraries,
  });
  const [overlay, setOverlay] =
    React.useState<google.maps.drawing.OverlayCompleteEvent>();
  const [map, setMap] = React.useState<google.maps.Map>();
  const [drawingManager, setDrawingManager] =
    React.useState<google.maps.drawing.DrawingManager>();
  const onMapLoad = React.useCallback(function callback(map: google.maps.Map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    if (map == null) {
      return;
    }
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onDrawingManagerLoad = React.useCallback(function callback(
    drawingManager: google.maps.drawing.DrawingManager
  ) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!

    if (drawingManager == null) {
      return;
    }

    setDrawingManager(drawingManager);
  },
  []);

  const onUnmount = React.useCallback(function callback(map: google.maps.Map) {
    setMap(undefined);
  }, []);

  const handleOnRectangleComplete = (rectangle: google.maps.Rectangle) => {
    console.log("##################", rectangle.getBounds());
  };

  const handleOnMarkerComplete = (marker: google.maps.Marker) => {
    console.log("##################", marker.getPosition()?.lat());
    console.log("##################", marker.getPosition()?.lng());
  };

  const handleOverlayComplete = (
    e: google.maps.drawing.OverlayCompleteEvent
  ) => {
    if (overlay) overlay.overlay?.setMap(null);
    setOverlay(e);
  };

  const deleteOverlay = () => {
    if (overlay) overlay.overlay?.setMap(null);
  };

  return isLoaded ? (
    <div>
      <div className="text-right">
        <button
          type="button"
          onClick={deleteOverlay}
          className="mb-1 bg-secondary-100 hover:bg-secondary-200 text-white font-bold py-2 px-4 rounded"
        >
          Clear Location
        </button>
      </div>

      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={20}
        onLoad={onMapLoad}
        onUnmount={onUnmount}
      >
        {/* Child components, such as markers, info windows, etc. */}
        <DrawingManager
          drawingMode={google.maps.drawing?.OverlayType.RECTANGLE}
          onRectangleComplete={handleOnRectangleComplete}
          onMarkerComplete={handleOnMarkerComplete}
          onOverlayComplete={handleOverlayComplete}
          onLoad={onDrawingManagerLoad}
          options={{
            drawingControl: true,
            drawingControlOptions: {
              drawingModes: [
                google.maps.drawing?.OverlayType.RECTANGLE,
                google.maps.drawing.OverlayType.MARKER,
              ],
            },
          }}
        />
      </GoogleMap>
    </div>
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

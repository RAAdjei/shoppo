// import React from "react";
// import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";

// interface MapProps {
//   coordinates: { lat: number; lng: number } | null;
// }

// const GoogleMapComponent: React.FC<MapProps> = ({ coordinates }) => {
//   const GOOGLE_MAP_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY;
//   return (
//     <LoadScript googleMapsApiKey={GOOGLE_MAP_API_KEY ?? ""}>
//       <GoogleMap
//         mapContainerStyle={{ width: "100%", height: "400px" }}
//         center={coordinates || { lat: 5.6037, lng: -0.187 }}
//         zoom={coordinates ? 15 : 10}
//       >
//         {coordinates && <Marker position={coordinates} />}
//       </GoogleMap>
//     </LoadScript>
//   );
// };

// export default GoogleMapComponent;



import React from "react";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";

interface MapProps {
  locations: { lat: number; lng: number }[];
}

const GoogleMapComponent: React.FC<MapProps> = ({ locations }) => {
  const GOOGLE_MAP_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY;
  return (
    <LoadScript googleMapsApiKey={GOOGLE_MAP_API_KEY ?? ""}>
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "100vh" }}
        center={locations[0] || { lat: 0, lng: 0 }}
        zoom={10}
      >
        {locations.map((location, index) => (
          <Marker key={index} position={location} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
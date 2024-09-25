// import React from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';

// // Fix for default marker icon issue with Webpack
// delete (L.Icon.Default.prototype as any)._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
//   iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
//   shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
// });

// interface MapProps {
//     coordinates: { lat: number; lng: number } | null;
//     locations: any[];
//   }

// const MapWithMarkers: React.FC<MapProps> = ({ coordinates, locations }) => {
//   return (
//     <MapContainer
//     center={coordinates || { lat: 5.6037, lng: -0.187 }}
//     zoom={coordinates ? 15 : 10}
//     style={{ width: '100%', height: '400px' }}
//   >
//     <TileLayer
//       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//     />
//     {coordinates && <Marker position={coordinates} />}
//   </MapContainer>
// );
// };



//     <MapContainer center={[5.6037, -0.187]} zoom={10} style={{ width: '100%', height: '400px' }}>
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//       />
//       {locations.map((location) => (
//         <Marker key={location.id} position={[location.latitude, location.longitude]}>
//           <Popup>
//             {location.name}<br />{location.address}
//           </Popup>
//         </Marker>
//       ))}
//     </MapContainer>
//   );
// };

// export default MapWithMarkers;



import React from 'react'
import { MapContainer,TileLayer } from "react-leaflet"
import "leaflet/dist/leaflet.css";

const MapWithMarkers = () => {
  return (
    <div>
      <MapContainer center={[5.614818, -0.205874]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url={'https://tile.openstreetmap.org/{z}/{x}/{y}.png'}/>
      </MapContainer>
    </div>
  )
}

export default MapWithMarkers
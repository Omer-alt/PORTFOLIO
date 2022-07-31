import React from 'react'
// import 'leaflet/dist/leaflet.css';
// import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'

// const MapLeaflet = () => {
//   return (
//     <div >
//         <MapContainer style={{height:"350px"}}  center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
//             <TileLayer
                
//             />
//             <Marker position={[51.505, -0.09]}>
//                 <Popup>
//                 A pretty CSS3 popup. <br /> Easily customizable.
//                 </Popup>
//             </Marker>
//         </MapContainer>
//     </div>
//   )
// }
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '350px'
};

const center = {
  lat: 3.845184 ,
  lng: 11.464533
};


const MapLeaflet = () => {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyCUELW5Z001vaZFu3gvGZZYr8oY3Ai6sQs"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        <Marker 
          position={{
            "lat": 3.87212,
            "lng":  11.44755
          }}
        ></Marker>

        
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default MapLeaflet
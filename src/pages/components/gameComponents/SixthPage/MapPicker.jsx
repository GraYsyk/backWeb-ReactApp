import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import { useState } from 'react';
import { MapContainer, Marker, TileLayer, useMapEvent } from 'react-leaflet';

L.Marker.prototype.options.icon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconAnchor: [12, 41],
});

export function MapPicker() {
  const [marker, setMarker] = useState(null);

  return (
    <MapContainer center={[20, 0]} zoom={2} zoomControl={false} scrollWheelZoom={false} doubleClickZoom={false} style={{ height: '300px', width: '900px'}}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <ClickHandler onMapClick={setMarker}/>
      { marker && (<Marker position={marker} />) }
    </MapContainer>
  );
}

function ClickHandler({ onMapClick }){
  useMapEvent({
    click(e) { onMapClick(e.latlng); }
  });
  return null;
}
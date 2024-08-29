import { useEffect } from 'react';
import { TileLayer, Marker, Popup, MapContainer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useMapContext } from '../../hooks';
import styles from './Map.module.css';

const Map = () => {
  const {
    locations,
    selectedLocationId,
    map,
    setSelectedLocationId,
    handleMapReady,
  } = useMapContext();

  useEffect(() => {
    if (map && selectedLocationId !== null) {
      const location = locations.find((loc) => loc.id === selectedLocationId);
      if (location) {
        map.flyTo([location.lat, location.lng], 13, {
          animate: true,
          duration: 1.5,
        });
      }
    }
  }, [map, selectedLocationId, locations]);

  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={2}
      className={styles.mapContainer}
      whenReady={(e) => handleMapReady(e.target)}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {locations.map((location) => (
        <Marker
          key={location.id}
          position={[location.lat, location.lng]}
          eventHandlers={{
            click: () => setSelectedLocationId(location.id),
          }}
        >
          <Popup>
            <strong>{location.name}</strong>
            <br />
            {location.description}
            <br />
            <a href={location.link} target="_blank" rel="noopener noreferrer">
              More info
            </a>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;

import React, { createContext, useState } from 'react';
import { Map as LeafletMap } from 'leaflet';
import { ILocation } from '../data/types/locations';

interface MapContextProps {
  selectedLocationId: number | null;
  setSelectedLocationId: (id: number | null) => void;
  map: LeafletMap | null;
  locations: ILocation[];
  setLocations: (locations: ILocation[]) => void;
  filteredLocations: ILocation[];
  setFilteredLocations: (locations: ILocation[]) => void;
  handleMapReady: (map: LeafletMap) => void;
}

export const MapContext = createContext<MapContextProps | undefined>(undefined);

interface MapProviderProps {
  children: React.ReactNode;
  initialLocations: ILocation[];
}

export const MapProvider = ({
  children,
  initialLocations,
}: MapProviderProps) => {
  const [selectedLocationId, setSelectedLocationId] = useState<number | null>(
    null
  );
  const [mapInstance, setMapInstance] = useState<LeafletMap | null>(null);
  const [locations, setLocations] = useState<ILocation[]>(initialLocations);
  const [filteredLocations, setFilteredLocations] =
    useState<ILocation[]>(initialLocations);

  const handleMapReady = (map: LeafletMap) => {
    setMapInstance(map);
  };

  const contextValue = {
    selectedLocationId,
    setSelectedLocationId,
    map: mapInstance,
    locations,
    setLocations,
    filteredLocations,
    setFilteredLocations,
    handleMapReady,
  };

  return (
    <MapContext.Provider value={contextValue}>{children}</MapContext.Provider>
  );
};

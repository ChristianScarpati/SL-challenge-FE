import { useContext } from 'react';
import { MapContext } from '../contexts/MapContext';

const useMapContext = () => {
  const context = useContext(MapContext);
  if (!context) {
    throw new Error('useMapContext must be used within a MapProvider');
  }
  return context;
};

export default useMapContext;

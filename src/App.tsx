import { useState } from 'react';
import './App.css';
import { Sidebar } from './components/SideBar';
import { SearchBar } from './components/SearchBar';
import { Map } from './components/Map';
import { Box } from '@chakra-ui/react';
import { MapProvider } from './contexts/MapContext';
import locations from './data/locations.json';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <MapProvider initialLocations={locations}>
      <Box display="flex" height="100vh" width="100vw" position={'relative'}>
        <Sidebar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />

        <Box
          flexGrow={1}
          width={isSidebarOpen ? ['100%', '100%', 'calc(100% - 220px)'] : '50%'}
          transition="width 0.5s ease"
          position="relative"
        >
          <SearchBar />
          <Box
            position="relative"
            display="flex"
            justifyContent="center"
            alignItems="center"
            height={['60vh', '60vh', 'calc(90vh - 5rem)']}
            width="100%"
          >
            <Map />
          </Box>
        </Box>
      </Box>
    </MapProvider>
  );
}

export default App;

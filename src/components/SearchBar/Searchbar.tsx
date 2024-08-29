import React, { useState, useCallback } from 'react';
import { Box, Button, Input } from '@chakra-ui/react';
import styles from './SearchBar.module.css';
import { useMapContext } from '../../hooks';

const SearchBar: React.FC = () => {
  const { locations, setFilteredLocations } = useMapContext();
  const [query, setQuery] = useState('');

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(event.target.value);
    },
    []
  );

  const handleSearch = useCallback(() => {
    if (query.trim() === '') {
      setFilteredLocations([...locations]);
      return;
    }

    const filteredLocations = locations.filter((location) =>
      location.name.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredLocations([...filteredLocations]);
  }, [query, locations, setFilteredLocations]);

  const handleReset = useCallback(() => {
    setQuery('');
    setFilteredLocations([...locations]);
  }, [locations, setFilteredLocations]);

  return (
    <Box className={styles.searchBarContainer}>
      <Input
        type="text"
        value={query}
        onChange={handleInputChange}
        onKeyDown={(event) => event.key === 'Enter' && handleSearch()}
        placeholder="Search for a location..."
        className={styles.searchInput}
      />
      <Button onClick={handleReset} className={styles.resetButton}>
        X
      </Button>

      <Button onClick={handleSearch} className={styles.searchButton}>
        Search
      </Button>
    </Box>
  );
};

export default SearchBar;

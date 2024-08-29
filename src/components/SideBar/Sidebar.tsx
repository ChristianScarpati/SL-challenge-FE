import React from 'react';
import {
  Box,
  Heading,
  UnorderedList,
  ListItem,
  IconButton,
  useBreakpointValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { ChevronRightIcon, ChevronLeftIcon } from '@chakra-ui/icons';
import styles from './Sidebar.module.css';
import { useMapContext } from '../../hooks';

interface SidebarProps {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
}

const MotionBox = motion(Box);

const Sidebar: React.FC<SidebarProps> = ({ toggleSidebar, isSidebarOpen }) => {
  const { filteredLocations, setSelectedLocationId } = useMapContext();

  const iconLeft: string | undefined = useBreakpointValue({
    base: isSidebarOpen ? '90px' : '10px',
    sm: isSidebarOpen ? '120px' : '15px',
    md: isSidebarOpen ? '220px' : '20px',
    lg: isSidebarOpen ? '240px' : '25px',
    xl: isSidebarOpen ? '340px' : '30px',
  });

  return (
    <>
      <IconButton
        icon={
          isSidebarOpen ? (
            <ChevronLeftIcon boxSize={6} />
          ) : (
            <ChevronRightIcon boxSize={6} />
          )
        }
        onClick={toggleSidebar}
        position="fixed"
        top="10px"
        left={iconLeft}
        zIndex="10"
        aria-label="Toggle Sidebar"
        variant="solid"
        bg="teal.500"
        color="white"
        _hover={{ bg: 'teal.600' }}
        borderRadius="full"
        boxShadow="md"
        transition="left 0.5s ease"
        className={styles.toggleButton}
      />
      {isSidebarOpen && (
        <MotionBox
          w={['6rem', '10rem', '14rem', '16rem', '20rem']}
          pt={[4, 6, 8, 10]}
          pos="relative"
          alignItems="center"
          initial={{ x: '-100%' }}
          animate={{ x: isSidebarOpen ? 0 : '-100%' }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className={styles.sidebarContainer}
        >
          <Heading
            as="h3"
            fontSize={['md', 'xl', '2xl', '3xl']}
            textAlign={['center', 'left']}
            className={styles.heading}
          >
            Choose a Place
          </Heading>

          <UnorderedList
            pt={2}
            width="100%"
            textAlign="center"
            className={styles.locationList}
          >
            {filteredLocations.map((location) => (
              <ListItem
                className={styles.locationItem}
                key={location.id}
                onClick={() => setSelectedLocationId(location.id)}
                cursor="pointer"
                _hover={{ color: 'teal.500' }}
                pl={1.5}
                pr={1.5}
                fontSize={['xs', 'sm', 'md', 'lg', 'xl']}
                transition="background-color 0.3s ease, color 0.3s ease"
              >
                {location.name}
              </ListItem>
            ))}
          </UnorderedList>
        </MotionBox>
      )}
    </>
  );
};

export default Sidebar;

import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { ImHome } from"react-icons/im";
import { ImImages } from"react-icons/im";
import { ImFolder } from"react-icons/im";

export default function BottomNav() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Home" icon={<ImHome />} />
        <BottomNavigationAction label="Posts" icon={<ImImages />} />
        <BottomNavigationAction label="Profile" icon={<ImFolder />} />
      </BottomNavigation>
    </Box>
  );
}
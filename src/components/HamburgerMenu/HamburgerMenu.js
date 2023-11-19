import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (isOpen) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setOpen(isOpen);
  };

  return (
    <div>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <List>
          <ListItem button key={'Home'}>
            <ListItemText primary={'Home'} />
          </ListItem>
          <ListItem button key={'About'}>
            <ListItemText primary={'About'} />
          </ListItem>
          <ListItem button key={'Contact'}>
            <ListItemText primary={'Contact'} />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default HamburgerMenu;

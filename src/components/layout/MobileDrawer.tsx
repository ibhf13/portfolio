import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { NavItem } from './types';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
  onItemClick: (sectionId: string) => void;
}

const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, onClose, navItems, onItemClick }) => (
  <Drawer
    anchor="right"
    open={isOpen}
    onClose={onClose}
    ModalProps={{ keepMounted: true }}
  >
    <Box sx={{ width: 250, bgcolor: 'background.paper' }}>
      <List>
        {navItems.map((item) => (
          <ListItem
            button
            key={item.key}
            onClick={() => onItemClick(item.key)}
          >
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </Box>
  </Drawer>
);

export default MobileDrawer;

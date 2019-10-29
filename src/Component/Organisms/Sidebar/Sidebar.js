import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import { DrawerWidth, DrawerBackground } from '../../../Common/Helpers/StylesHelper';
import SidebarList from '../../Molecules/Sidebar/SidebarList/SidebarList';
import SidebarButton from '../../Molecules/Sidebar/SidebarButton/SidebarButton';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'    
  },  
  drawer: {
    width: DrawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: DrawerWidth,
    background: DrawerBackground,
    overflow: 'hidden',
    height: '100%',
    '&:hover': {
      overflowY: 'auto',
    },
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
  drawerHeader: {
    display: 'flex',
    position: 'fixed',
    width: DrawerWidth,
    background: DrawerBackground,
    zIndex: 1000,
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end'
  }
}));

const Sidebar = (props) => {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <CssBaseline />     
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={props.open}
        classes={{
          paper: classes.drawerPaper,
        }}>
        <SidebarButton
          class={classes.drawerHeader} 
          iconClick={props.handleDrawerClose} />
        <Divider style={{marginTop: '56px'}}/>
        <SidebarList />
        <Divider />
      </Drawer>
    </div>
  );
}

export default React.memo(Sidebar);
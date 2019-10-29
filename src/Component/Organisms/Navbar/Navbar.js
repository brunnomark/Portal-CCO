import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import AccountCircle from '@material-ui/icons/AccountCircle';
import clsx from 'clsx';
import { Labels } from '../../../Common/Helpers/LabelHelper';
import Sidebar from '../Sidebar/Sidebar';
import { DrawerWidth } from '../../../Common/Helpers/StylesHelper';
import NotificationBadge from '../../Molecules/Notification/NotificationBadge';
import DesktopMenu from '../../Molecules/Menu/Desktop/DesktopMenu';
import MobileMenu from '../../Molecules/Menu/Mobile/MobileMenu';
import TitleSection from '../../Molecules/Menu/Sections/Toolbar/TitleSection';
import MainSection from '../../Molecules/Menu/Sections/Main/MainSection';
import Searchbar from '../../Molecules/Toolbar/Searchbar/Searchbar';
import Styles from "../../../Common/Styles/_variables.scss";

const useStyles = makeStyles(theme => ({
    grow: {
      flexGrow: 1,
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        background: Styles.primary,
        boxShadow: '1px 0px 7px ' + Styles.primary
    },
    appBarShift: {
        width: `calc(100% - ${DrawerWidth}px)`,
        marginLeft: DrawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      width: theme.spacing(7),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'rgba(53, 51, 51, 0.5)',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: 200,
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    logo: {
      display: 'flex',
      height: '50px',
      width: '50px',
      padding: '5px 5px 0 0',
      margin: '0 5px 0 0' 
    }
}));

const Navbar = (props) => {
  const classes = useStyles();
  const [badgeNotificationCount, setbadgeNotificationCount] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(props.open);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  // const handleNotificationClose = () => {
  //   setbadgeNotificationCount(0);
  //   handleMobileNotificationClose();
  //   // código adicional
  // };

  const handleNotificationOpen = event => {
    setbadgeNotificationCount(event.target.value);
    // abrir dropdown Desktop
  };

  // const handleMobileNotificationClose = () => {
  //   setbadgeNotificationCount(0);
  //   handleNotificationClose();
  // };

  const handleMobileNotificationOpen = event => {
    setbadgeNotificationCount(event.target.value);
    // abrir dropdown Mobile
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
    props.menuHandler();
  };

  const handleDrawerClose = () => {
    setOpen(false);
    props.menuHandler();
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (    
    <DesktopMenu
      anchorElHandler={anchorEl}
      anchorOriginClasses={{ vertical: 'top', horizontal: 'right' }}
      menuId={menuId}
      transformOriginClasses={{ vertical: 'top', horizontal: 'right' }}
      isMenuOpen={isMenuOpen}
      MenuCloseHandler={handleMenuClose}
      MenuItems = {[
        { onClickHandler: handleMenuClose, Label: Labels.Profile },
        { onClickHandler: handleMenuClose, Label: Labels.MyAccount },
        { onClickHandler: props.logout, Label: Labels.Logout, }
      ]}
    />
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <MobileMenu 
      anchorElHandler={mobileMoreAnchorEl}
      anchorOriginClasses={{ vertical: 'top', horizontal: 'right' }}
      menuId={mobileMenuId}
      transformOriginClasses={{ vertical: 'top', horizontal: 'right' }}
      isMenuOpen={isMobileMenuOpen}
      MenuCloseHandler={handleMobileMenuClose}      
      MenuItems= {[
        { 
          onClickHandler: handleMobileNotificationOpen, 
          IconAriaLabel: "show " + badgeNotificationCount + " new notifications",
          IconColor: "inherit",
          Component: <NotificationBadge badgeCount={badgeNotificationCount} badgeColor="secondary" />,
          Label: Labels.Notifications},
        { 
          onClickHandler: handleProfileMenuOpen, 
          IconAriaLabel: "account of current user",
          IconAriaControl: "primary-search-account-menu",
          IconHaspopup: "true",
          IconColor: "inherit",
          Component: <AccountCircle />,
          Label: Labels.Profile}
      ]}
      />
  );

  return (
    <div className={classes.grow}>
      <AppBar 
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}>
        <Toolbar>
          <TitleSection 
            classes={classes}
            isOpen={open}
            onClickHandler={handleDrawerOpen}/>
          <Searchbar classes={classes} placeHolder={Labels.Search} />
          <div className={classes.grow} />
          <MainSection 
            classes={classes}
            handleNotificationOpen={handleNotificationOpen}
            badgeNotificationCount={badgeNotificationCount}
            handleProfileMenuOpen={handleProfileMenuOpen}
            handleMobileMenuOpen={handleMobileMenuOpen}
            IconAriaControl={{
              desktop: menuId, 
              mobile: mobileMenuId
            }}/>
        </Toolbar>
      </AppBar>
      <Sidebar open={open} handleDrawerClose={handleDrawerClose} />
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}

export default React.memo(Navbar);
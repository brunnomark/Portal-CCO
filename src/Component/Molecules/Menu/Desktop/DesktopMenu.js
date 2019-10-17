import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import BaseMenu from '../BaseMenu';

const DesktopMenu = (props) => {
    const menuItems = props.MenuItems.map((menuItem, index) => {
        return (
            <MenuItem 
                key={`desktop-menu-${menuItem.Label + '-' + index}`} 
                onClick={menuItem.onClickHandler}>
                {menuItem.Label}                
            </MenuItem>);
    });

    return (
        <BaseMenu            
            anchorEl={props.anchorElHandler}
            anchorOrigin={props.anchorOriginClasses}
            id={props.menuId}
            keepMounted
            transformOrigin={props.transformOriginClasses}
            open={props.isMenuOpen}
            onClose={props.MenuCloseHandler}
            Items={menuItems}>
        </BaseMenu>
    );
};

export default DesktopMenu;
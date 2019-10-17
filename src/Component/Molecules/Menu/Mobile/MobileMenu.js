import React from 'react';
import MenuItemIcon from '../MenuItem/MenuItemIcon';
import BaseMenu from '../BaseMenu';

const MobileMenu = (props) => {
    const menuItemsIcons = props.MenuItems.map((menuItemIcon, index) => {
        return (
            <MenuItemIcon
                key={`mobile-menu-${menuItemIcon.Label + '-' + index}`} 
                menuItemClick={menuItemIcon.onClickHandler}
                IconAriaLabel={menuItemIcon.IconAriaLabel}
                IconAriaControl={menuItemIcon.IconAriaControl}
                IconHaspopup={menuItemIcon.IconHaspopup}
                IconColor={menuItemIcon.IconColor}
                Component={menuItemIcon.Component}
                Label={menuItemIcon.Label}/>
        );
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
            Items={menuItemsIcons}>
        </BaseMenu>
    );
};

export default MobileMenu;
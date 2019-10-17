import React from 'react';
import Menu from '@material-ui/core/Menu';

const BaseMenu = (props) => {
    return (
        <Menu
            anchorEl={props.anchorEl}
            anchorOrigin={props.anchorOrigin}
            id={props.menuId}
            keepMounted
            transformOrigin={props.transformOrigin}
            open={props.open}
            onClose={props.onClose}> 
            {props.Items}
        </Menu>
    );
};

export default BaseMenu;
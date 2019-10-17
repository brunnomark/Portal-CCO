import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';

class MenuItemIcon extends React.Component {   
    render() {
        return (
            <MenuItem onClick={this.props.menuItemClick}>
                <IconButton
                    aria-label={this.props.IconAriaLabel}
                    aria-controls={this.props.IconAriaControl}
                    aria-haspopup={this.props.IconHaspopup}
                    color={this.props.Iconcolor}
                >
                {this.props.Component}
                </IconButton>
                <p>{this.props.Label}</p>
            </MenuItem>);
    }
};

export default MenuItemIcon;

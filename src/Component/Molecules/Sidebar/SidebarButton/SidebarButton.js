import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { useTheme } from '@material-ui/core/styles';

const IconStyles = Object.assign({
  color: 'white'
});

const SidebarButton = (props) => {
    const theme = useTheme();
    return (
        <div className={props.class}>
            <IconButton style={IconStyles} onClick={props.iconClick}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
        </div>);
};

export default React.memo(SidebarButton);
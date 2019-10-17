import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import MoreIcon from '@material-ui/icons/MoreVert';

const MobileSection = (props) => (
    <div className={props.class}>
        <IconButton
            aria-label={props.IconAriaLabel}
            aria-controls={props.IconAriaControl}
            aria-haspopup={props.IconHaspopup}
            onClick={props.onClickHandler}
            color={props.IconColor}>
            <MoreIcon />
        </IconButton>
    </div>
);

export default MobileSection;
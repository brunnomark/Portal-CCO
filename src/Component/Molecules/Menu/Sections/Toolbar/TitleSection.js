import React from 'react';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import { Labels } from '../../../../../Common/Helpers/LabelHelper';
import LogoVLI from '../../../../../Common/Images/vli-logo.png';

const TitleSection = (props) => (
    <React.Fragment>
        <IconButton
            edge="start"
            className={clsx(props.classes.menuButton, props.isOpen && props.classes.hide)}
            color="inherit"
            aria-label="open drawer"
            onClick={props.onClickHandler}>
            <MenuIcon />
            </IconButton>
            <img className={props.classes.logo} src={LogoVLI} alt=""/>
            <Typography className={props.classes.title} variant="h6" noWrap>            
            {Labels.PortalCCO}           
        </Typography>
    </React.Fragment>
);

export default TitleSection;
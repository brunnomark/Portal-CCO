import React from 'react';
import { NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
    default:{
      textDecoration: 'none'
    }
});

const routeHelper = (props) => {
    const { classes } = props;
    return (
        props.route ? 
            <NavLink
                to={props.route.path}
                exact={props.route.exactPath}
                className={classes.default}>
                {props.children}
            </NavLink>
        : props.children
    );
};

export default withStyles(styles)(routeHelper);
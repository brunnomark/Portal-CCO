import React from 'react';
import RouteHelper from '../../../../Common/Helpers/RouteHelper';
import ListItem from '../../../../../node_modules/@material-ui/core/ListItem';
import ListItemIcon from '../../../../../node_modules/@material-ui/core/ListItemIcon';
import ListItemText from '../../../../../node_modules/@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import { withRouter, matchPath } from 'react-router-dom';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import Styles from '../../../../Common/Styles/_variables.scss';

const styles = () => ({
    icon:{
      color: Styles.gray
    },
    listItemText:{
      color: Styles.white,
      fontSize: '1em'
    },
    listItemTextActive:{
      color: Styles.activeLink,
      fontSize: '1em'
    },
    activeItem: {
      textDecoration: 'none',
      backgroundColor: 'rgba(0, 0, 0, 0.1)'
    }
});

class SidebarListItem extends React.Component {
    checkActiveLink = () => {
      return (this.props.item.route ?
          matchPath(this.props.item.route.path, {
          path: this.props.location.pathname
      }) : null);
    }

    render () {
      const activeLink = this.checkActiveLink();

      return (
        <RouteHelper navlinkClick={this.activeLinkHandler} route={this.props.item.route}>
          <ListItem button 
              disabled={!(this.props.item.items || this.props.item.route)}
              onClick={this.props.clicked}
              className={activeLink ? this.props.classes.activeItem : null}>
              <ListItemIcon
                className={this.props.classes.icon}>{this.props.item.icon}
              </ListItemIcon>
              <ListItemText
                  classes={{primary: activeLink ? this.props.classes.listItemTextActive : this.props.classes.listItemText}}
                  primary={this.props.item.name} />
              {this.props.submenu ?
              (this.props.open ? 
                  <ExpandMore style={{ color: 'white'}} /> 
                  : <ExpandLess style={{ color: 'white'}} />) 
              : null}    
          </ListItem>
      </RouteHelper>);
    }
};

export default React.memo(withRouter(withStyles(styles)(SidebarListItem)));

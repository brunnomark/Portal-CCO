import React from 'react';
import List from '../../../../../node_modules/@material-ui/core/List';
import ListItem from '../../../../../node_modules/@material-ui/core/ListItem';
import ListItemIcon from '../../../../../node_modules/@material-ui/core/ListItemIcon';
import ListItemText from '../../../../../node_modules/@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import { Labels } from '../../../../Common/Helpers/LabelHelper';

const styles = theme => ({
  icon:{
    color: 'gray'
  },
  listItemText:{
    color: 'white'
  }
});

const SidebarList = (props) => {
    const { classes } = props;
    return(
        <List>
            {Object.keys(Labels.Sidebar).map(itemKey => {
                return [...Array(Labels.Sidebar[itemKey])].map(item => (
                <ListItem button key={item.name}>
                    <ListItemIcon
                        className={classes.icon}>{item.icon}</ListItemIcon>
                    <ListItemText 
                        classes={{primary: classes.listItemText}}
                        primary={item.name} />
                </ListItem>
                ))}
            )}
        </List>);
};

export default withStyles(styles)(SidebarList);
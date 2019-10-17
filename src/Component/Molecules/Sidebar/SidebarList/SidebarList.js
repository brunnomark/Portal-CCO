import React from 'react';
import List from '../../../../../node_modules/@material-ui/core/List';
import ListItem from '../../../../../node_modules/@material-ui/core/ListItem';
import ListItemIcon from '../../../../../node_modules/@material-ui/core/ListItemIcon';
import ListItemText from '../../../../../node_modules/@material-ui/core/ListItemText';
import { Labels } from '../../../../Common/Helpers/LabelHelper';

const SidebarList = (props) => (
    <List>
        {Object.keys(Labels.Sidebar).map(itemKey => {
            return [...Array(Labels.Sidebar[itemKey])].map(item => (
            <ListItem button key={item.name}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.name} />
            </ListItem>
            ))}
        )}
    </List>
);

export default SidebarList;
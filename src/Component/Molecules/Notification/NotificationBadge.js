import React from 'react';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';

const NotificationBadge = (props) => (
    <Badge badgeContent={props.badgeCount} color={props.badgeColor}>
        <NotificationsIcon />
    </Badge>
);

export default NotificationBadge;
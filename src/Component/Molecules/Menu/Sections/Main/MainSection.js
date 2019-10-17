import React from 'react';
import DesktopSection from '../../../Menu/Sections/Desktop/DesktopSection';
import MobileSection from '../../../Menu/Sections/Mobile/MobileSection';
import NotificationBadge from '../../../Notification/NotificationBadge';
import AccountCircle from '@material-ui/icons/AccountCircle';

const MainSection = (props) => (
    <React.Fragment>
        <div className={props.classes.grow} />        
        <DesktopSection
            class={props.classes.sectionDesktop}
            SectionItems= {[
            { 
                onClickHandler: props.handleNotificationOpen,
                IconAriaLabel: "show " + props.badgeNotificationCount + " new notifications",
                IconColor: "inherit",
                Component: <NotificationBadge badgeCount={props.badgeNotificationCount} badgeColor="secondary" />
            },
            { 
                onClickHandler: props.handleProfileMenuOpen, 
                IconAriaLabel: "account of current user",
                IconAriaControl: props.IconAriaControl.desktop,
                IconHaspopup: "true",
                IconColor: "inherit",
                edge: "end",
                Component: <AccountCircle />
            }
        ]}/>
        <MobileSection 
            class={props.classes.sectionMobile}
            IconAriaLabel="show more"
            IconAriaControl={props.IconAriaControl.mobile}
            IconHaspopup= "true"
            onClickHandler={props.handleMobileMenuOpen}
            IconColor="inherit"
            />
    </React.Fragment>
);

export default MainSection;
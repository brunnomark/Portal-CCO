import React from 'react';
import { DrawerWidth } from '../../../Common/Helpers/StylesHelper';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import './Layout.scss';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(7, 2, 10, 2),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: 0,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: DrawerWidth,
    }
}));

const Layout = (props) => {
    const classes = useStyles();
    React.useEffect(() => {
        document.body.classList.add('background-gray');
        return () => {
            document.body.classList.remove('background-gray');
        };
    });

    return (
        <main className={clsx(classes.content, { [classes.contentShift]: props.open })}>
            {props.children}
        </main>
    );
}

export default Layout;

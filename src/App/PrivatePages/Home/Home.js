import React, { useEffect, useState } from 'react';
import { DrawerWidth } from '../../../Common/Helpers/StylesHelper';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Labels } from '../../../Common/Helpers/LabelHelper';
import Grid from '../../../Component/Molecules/Grid/Grid';
import GridBuilder from '../../../Component/Molecules/Grid/GridBuilder';
import './Home.scss';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },  
  drawer: {
    width: DrawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: DrawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
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

const Home = (props) => {
  const [components, setComponent] = useState([]);

  const addComponentHandler = (component) => {
    const newComponents = [
      ...components
    ];
    newComponents.push(component);
    setComponent(newComponents);
  }

  const removeComponentHandler = () => {
    const newComponents = [
      ...components
    ];
    newComponents.pop();
    setComponent(newComponents);
  }

  const closeComponentHandler = (key) => {
    const newComponents = [
      ...components
    ]
    .filter(item => {
      return item.key !== key;
    });
    setComponent(newComponents);
  }

  const classes = useStyles();
  useEffect(() => {
    document.body.classList.add('background-gray');
    return () => {
      document.body.classList.remove('background-gray');
    };
  });

  return (
    <div className="home">
      <main className={clsx(classes.content, { [classes.contentShift]: props.open })}>
        <h2>{Labels.Home}</h2>
        <GridBuilder
          addComponent={addComponentHandler}
          removeComponent={removeComponentHandler}/>
        <Grid
          Components={components}
          closeComponent={closeComponentHandler}>
        </Grid>
      </main>
    </div>
  );
}

export default Home;
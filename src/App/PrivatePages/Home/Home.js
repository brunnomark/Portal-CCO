import React, { useState } from 'react';
import { Labels } from '../../../Common/Helpers/LabelHelper';
import Grid from '../../../Component/Molecules/Grid/Grid';
import GridBuilder from '../../../Component/Molecules/Grid/GridBuilder';
import './Home.scss';

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

  return (
    <div className="home">      
        <h2>{Labels.Home}</h2>
        <GridBuilder addComponent={addComponentHandler} removeComponent={removeComponentHandler}/>
        <Grid Components={components} closeComponent={closeComponentHandler} />
    </div>
  );
}

export default React.memo(Home);
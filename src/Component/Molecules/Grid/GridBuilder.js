import React from 'react';
import LogoVLI from '../../../Common/Images/vli-logo.png';
import Button from '@material-ui/core/Button';
import { Labels } from '../../../Common/Helpers/LabelHelper';

const graphs = [
    <img src={LogoVLI} alt=""/>, 
    <p>Olá mundo!</p>
];

const GridBuilder = (props) => {
    const getComponent = () => {
        const index = Math.round(Math.random());
        return graphs[index];
    }

    return (
        <React.Fragment>
            <Button 
                variant="contained" 
                color="primary"
                onClick={() => props.addComponent(getComponent())}>
                {Labels.AddGraph}
            </Button>
            <Button 
                variant="contained" 
                color="secondary"
                onClick={() => props.removeComponent(getComponent())}>
                {Labels.RemoveGraph}
            </Button>
        </React.Fragment>);
};

export default GridBuilder;

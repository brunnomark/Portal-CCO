import React from 'react';
import Button from '@material-ui/core/Button';
import { Labels } from '../../../Common/Helpers/LabelHelper';

const graphs = [
    <iframe title="Test" src="https://www.chartjs.org/samples/latest/scales/filtering-labels.html"></iframe>,    
    <iframe title="Test2" src="https://www.chartjs.org/samples/latest/charts/line/multi-axis.html"></iframe>,
    <iframe title="Test3" src="https://www.chartjs.org/samples/latest/scales/linear/min-max.html"></iframe>,
    <iframe title="Test4" src="https://www.chartjs.org/samples/latest/charts/bar/stacked-group.html"></iframe>
];

let newCounter = 0;

class GridBuilder extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            items: graphs.map((item, index) => {
                return {
                    data: item,
                    dataGrid: {
                        i: index.toString(),
                        x: index * graphs.length,
                        y: 0,
                        w: 4,
                        h: 3,
                        minW: 3, 
                        maxW: 12, 
                        minH: 3,
                        maxH: 6
                    },
                    key: null
                };
            }),
            newCounter: 0
        };
    }

    getComponentIndex = () => {
        const min = 0;
        const max = graphs.length - 1;
        return Math.floor(Math.random() * (max - min + 1) + min);
        //return graphs[index];
    }

    addItem = () => {
        const index = this.getComponentIndex();
        const newItems = [
            ...this.state.items
        ];
        newItems[index].key = newCounter;
        this.setState({ items: newItems });
        this.props.addComponent(this.state.items[index], newCounter);
        newCounter++;
    }

    render () {
        return (
            <React.Fragment>
                <Button 
                    variant="contained" 
                    color="primary"
                    onClick={this.addItem}>
                    {Labels.AddGraph}
                </Button>
                <Button 
                    variant="contained" 
                    color="secondary"
                    onClick={this.props.removeComponent}>
                    {Labels.RemoveGraph}
                </Button>
            </React.Fragment>);
    }
};

export default GridBuilder;

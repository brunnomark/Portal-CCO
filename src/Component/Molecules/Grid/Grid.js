import React from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon  from '@material-ui/icons/Close';
import { SmallCloseButton } from '../../../Common/Helpers/StylesHelper';
import './Grid.scss';

const ResponsiveGridLayout = WidthProvider(Responsive);

const styles = Object.assign({
  display: 'flex',
  alignItems: 'center', 
  background: 'rgba(53, 51, 51, 0.5)',
  border: '1px solid black',
  borderRadius: '4px',
  transform: 'translate(50px, 50px)'
  // maxHeight: '400px',
  // maxWidth: '400px'
});

const IconStyles = Object.assign({
  position: 'absolute',
  fontSize: '0.5rem',
  top: 0,
  right: 0,
  padding: 0
});

class Grid extends React.PureComponent {
  render() {  
    const items = this.props.Components.map((component, index) => {        
      return (
          <div 
            key={index} 
            style={styles} 
            className="layout-item" 
            data-grid={component.dataGrid}>
            {/* data-grid={{x: 0, y: 0, w: 5, h: 3, minW: 3, maxW: 12, minH: 3, maxH: 6}}>*/}
            <IconButton style={IconStyles} aria-label="delete" onClick={() => this.props.closeComponent(component.key)}>
              <CloseIcon style={SmallCloseButton} />
            </IconButton>
            {component.data}
            {/* {component} */}
          </div>);
    })

    // const layouts = {
    //    i: 'a', x: 1, y: 0, w: 3, h: 2, minw: 2, maxw: 4      
    // };
    return (
        <ResponsiveGridLayout 
          className="layout" //layouts={layouts}
          rowHeight={60}
          breakpoints={{lg: 900, md: 1200, sm: 768, xs: 480, xxs: 10}}
          cols={{lg: 4, md: 20, sm: 25, xs: 25, xxs: 1}}>
          {items}
        </ResponsiveGridLayout>
    )
  }
}

export default Grid;
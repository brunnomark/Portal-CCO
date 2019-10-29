import React from 'react';
import List from '../../../../../node_modules/@material-ui/core/List';
import { Labels } from '../../../../Common/Helpers/LabelHelper';
import Collapse from '@material-ui/core/Collapse';
import SidebarListItem from '../SidebarListItem/SidebarListItem';
import Styles from "../../../../Common/Styles/_variables.scss";

const style = {
  paddingLeft: Styles.paddingLeftSidebarList,
  fontSize: Styles.fontSizeSidebarList
}

class SidebarList extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        open: []
      }
    }

    componentWillMount() {
      const cachedMenu = JSON.parse(localStorage.getItem('SideBarState'));
      console.log(JSON.parse(localStorage.getItem('SideBarActiveMenu')));
      if (cachedMenu != null) {
        //const newMenu = {}
        this.setState({ open: cachedMenu });
      }
    }

    componentWillUpdate() {
      localStorage.setItem('SideBarState', JSON.stringify(this.state.open));
    }

    handleClick = (key) => {
      const newValue = this.state.open;
      newValue[key] = !newValue[key];
      //localStorage.setItem('SideBarActiveMenu', JSON.stringify(Object.assign({index: key, value: newValue[key]})));
      this.setState(newValue);
    };    

    renderListItems = (item, parentId, collapseMenu) => {
      let menu = null;
      let submenu = null;

      if (item.items) {
        submenu = Object.keys(item.items).map(itemKey => {
          return this.renderListItems(item.items[itemKey], item.id, true);
        })
      }
      
      const sidebarListItem = (
        <SidebarListItem
          item={item}
          collapse={collapseMenu}
          submenu={submenu}
          open={this.state.open[item.id]}
          clicked={submenu ? () => this.handleClick(item.id) : null} />
      );

      if (collapseMenu) {
        menu = (
        <React.Fragment key={item.id + item.name}>
          <Collapse 
            in={this.state.open[parentId]} 
            timeout="auto"
            style={style}
            unmountOnExit>
              <List component="div" disablePadding>
                {sidebarListItem}
                {submenu}
              </List>
          </Collapse>
        </React.Fragment>);
      }
      else {
        menu = (
        <React.Fragment key={item.id + item.name}>
          {sidebarListItem}
          {submenu}
        </React.Fragment>);
      }
      return menu;
    }

    render() {
      return(
          <List>
              {Object.keys(Labels.Sidebar).map(itemKey => {
                  return [...Array(Labels.Sidebar[itemKey])].map((item, index) => (
                    this.renderListItems(item, item.id)
                  ))}
              )}
          </List>);
    }
};

export default SidebarList;
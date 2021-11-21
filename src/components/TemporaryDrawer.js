import React, {Component} from 'react';

import { withStyles } from '@material-ui/core/styles';

import { SwipeableDrawer, List, Divider, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Home, Settings, Cloud, ArrowDropDown, AspectRatio, LinearScale, BorderAll } from '@material-ui/icons';
import { NavLink } from 'react-router-dom';

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

const pages = [
  {
    title: 'Home',
    path: '/',
    icon: <Home />
  },
  {
    title: 'Card',
    path: '/card',
    icon: <BorderAll />
  },
  {
    title: 'React Select',
    path: '/react-select',
    icon: <ArrowDropDown />
  },
  {
    title: 'Jumbotron',
    path: '/jumbotron',
    icon: <AspectRatio />
  },
  {
    title: 'Carousel',
    path: '/carousel',
    icon: <LinearScale />
  },
]

class TemporaryDrawer extends Component {
  render() {
    const { classes } = this.props;
    const style_unset = { all: "unset" };
    const sideList = (
      <div className={ classes.list }>
        <List>
          {
            pages.map((item,idx) => (
              <NavLink key={ item.title } className={"unactivePage"} activeClassName="activePage" exact to={ item.path } style={style_unset}>
                <ListItem button>
                  <ListItemIcon>{ item.icon }</ListItemIcon>
                  <ListItemText primary={ item.title } />
                </ListItem>
              </NavLink>
            ))
          }
        </List>
        <Divider />
        <List>
          <NavLink className={"unactivePage"}  activeClassName="activePage" exact to="/settings" style={style_unset}>
            <ListItem button key={'Settings'}>
              <ListItemIcon><Settings /></ListItemIcon>
              <ListItemText primary={'Settings'} />
            </ListItem>
          </NavLink>
          <ListItem button key={'Version'}>
            <ListItemIcon><Cloud /></ListItemIcon>
            <ListItemText primary={'Version'} secondary={"v0.1"}/>
          </ListItem>
        </List>
      </div>
    );

    return (
      <div>
        <SwipeableDrawer open={this.props.isDrawerOpen} onClose={this.props.toggleDrawer(false)} onOpen={this.props.toggleDrawer(true)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.props.toggleDrawer(false)}
            onKeyDown={this.props.toggleDrawer(false)}
          >
            { sideList }
          </div>
        </SwipeableDrawer>
      </div>
    );
  }
}

export default withStyles(styles)(TemporaryDrawer);
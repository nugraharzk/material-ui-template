import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Material UI Imports
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { CssBaseline } from "@material-ui/core";

// Component Imports
import AppBar from "./components/AppBar";

// Page Imports
import HomePage from "./components/pages/HomePage";
import Card from "./components/pages/Card";
import ReactSelect from "./components/pages/ReactSelect";
import Jumbotron from "./components/pages/Jumbotron";
import Carousel from "./components/pages/Carousel";
import NoPageFound from "./components/pages/NoPageFound";
import SettingsPage from "./components/pages/SettingsPage";

// Action Imports
import { setSettings } from "./actions/settings-actions";

// Local Storage Operations
import { getLocalSettings, setLocalSettings } from "./services/settingsOperations";

class App extends Component {
  constructor(props) {
    super(props);
    // Settings init
    let settings = getLocalSettings();
    if (settings===null || settings===undefined)
      setLocalSettings(this.props.settings);
    else
      this.props.setSettings(settings);
  }

  render() {
    const theme = createMuiTheme(this.props.settings);
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline/>
        <Router>
          <AppBar/>
            <Switch>
              <Route path="/" exact /*strict*/ component={HomePage}/>
              <Route path="/card" exact /*strict*/ component={Card}/>
              <Route path="/react-select" exact /*strict*/ component={ReactSelect}/>
              <Route path="/jumbotron" exact /*strict*/ component={Jumbotron}/>
              <Route path="/carousel" exact /*strict*/ component={Carousel}/>
              <Route path="/settings" exact /*strict*/ component={SettingsPage}/>
              <Route exact /*strict*/ component={NoPageFound}/>
            </Switch>
        </Router>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {...state, ...props};
};

const mapDispatchToProps = {
  setSettings
};

export default connect(mapStateToProps,mapDispatchToProps)(App);

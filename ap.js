/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';
import Auth from './utils/Auth'

import Login from './components/Login';
import CreatorHome from './components/CreatorHome';
import ConsumerHome from './components/ConsumerHome'
import Register from "./components/Register";
import SideBarCre from './components/CreatorSideBar';
import Settings from './components/Settings';
import AnalyticsBase from './components/AnalyticsBase';
import Search from './components/Search';
import SideBarCon from './components/ConsumerSideBar';
import SettingsB from './components/SettingsB';
import Upload from './components/Upload';

export default class locketz extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.state = {
      loggedIn: false,
      userType: false,
      token: false
    };
    this.auth = new Auth();
  }

  renderScene (route, navigator) {
    if(route.id == 'Register') {
      return <Register navigator={navigator} />
    }
    if(route.id == 'Login') {
      return <Login  navigator={navigator} />
    }
    if(route.id == 'CreatorHome') {
      return <CreatorHome navigator={navigator} />
    }
    if(route.id == 'ConsumerHome'){
      return <ConsumerHome navigator={navigator}/>
    }
    if(route.id == 'SideBarCre'){
        return <SideBarCre navigator={navigator}/>
    }
    if(route.id == 'Settings'){
        return <Settings navigator={navigator}/>
    }
    if(route.id == 'AnalyticsBase'){
        return <AnalyticsBase navigator={navigator}/>
    }
    if (route.id == 'SideBarCon') {
        return <SideBarCon navigator={navigator}/>
    }
    if (route.id == 'Search') {
        return <Search navigator={navigator}/>
    }
    if(route.id == 'SettingsB') {
        return <SettingsB navigator={navigator} />
    }
    if(route.id == 'Upload') {
        return <Upload navigator={navigator} />
    }
  }

  render() {
    let initialRoute = {id: 'Login'};
    if (this.auth.getToken()) {
      if (!this.auth.getUserType()) {
        initialRoute = {id: 'CreatorHome'}
      }
      
    }
    return (
      <Navigator
        style={{ flex:1 }}
        initialRoute={ initialRoute }
        renderScene={ this.renderScene } />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('locketz', () => locketz);
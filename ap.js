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
import Register from "./components/Register";

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
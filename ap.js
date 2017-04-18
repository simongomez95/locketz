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
  View
} from 'react-native';
import Auth from './utils/Auth'

import Login from './components/Login';
import CreatorHome from './components/CreatorHome';

export default class locketz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      userType: false,
      token: false
    };
    this.auth = new Auth();
  }

  componentWillMount() {

  }

  login(userType, token) {
    this.setState({
      loggedIn: true,
      userType: userType,
      token: token
    });
    this.auth.setToken(token)
  }

  render() {
    if (this.state.loggedIn) {
      if (this.state.userType) {
        return (
          <CreatorHome/>
        );
      }

    } else {
      return (
        <Login login={this.login.bind(this)} userType={this.state.userType}/>
      )
    }
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
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

import Login from './components/Login';
import CreatorHome from './components/CreatorHome';

export default class locketz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            token: false
        };
    }

    render() {
        return (
            <CreatorHome></CreatorHome>
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
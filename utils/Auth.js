/**
 * Created by nekothecat on 4/16/17.
 */

import { AsyncStorage } from 'react-native';
import config from '../config/Config';

class Auth {

  signUp (email, username, password, confirmPassword, userType) {
    const url = config.siteUrl + '/user/create';
    if (!email || !username || !password || !confirmPassword || !userType) {
      return false;
    } else {
      return fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: {
          email: email,
          username: username,
          password: password,
          confirmPassword: confirmPassword,
          userType: userType
        }
      });
    }
  }

  signIn (email, password) {
    const url = config.siteUrl +'/auth';
    if (!email || !password) {
      return false;
    } else {
      return fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: {
          email: email,
          password: password
        }
      });
    }
  }

  async getToken () {
    let token = await AsyncStorage.getItem('token');
    return token;
  }

}
/**
 * Created by nekothecat on 4/16/17.
 */

import { AsyncStorage, Alert } from 'react-native';
import config from '../config/Config';

class Auth {

  signUp (email, username, password, confirmPassword, userType) {
    const url = config.siteUrl + '/user/create';

    if (!email || !username || !password || !confirmPassword) {
      Alert.alert(
        'Missing Field',
        'FALTA UN CAMPO U PIECE OF SHIT',
        [
          {text: 'OK :(', onPress: () => console.log('OK Pressed')},
        ],
        { cancelable: false }
      );
      return false;
    } else {
      return fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          username: username,
          password: password,
          confirmPassword: confirmPassword,
          userType: userType
        })
      }).then((response) => response.json())
        .then((res) => {
          this.setUserData(res.token, res.user.userType);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }

  signIn (email, password) {
    const url = 'http://34.205.177.234/auth';
    if (!email || !password) {
      Alert.alert(
        'Missing Field',
        'FALTA UN CAMPO U PIECE OF SHIT',
        [
          {text: 'OK :(', onPress: () => console.log('OK Pressed')},
        ],
        { cancelable: false }
      );
      return false;
    } else {
      return fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password.toString()
        })
      }).then((response) => response.json()).
      then((res) => {
        this.setUserData(res.token, res.user.userType);
      })
        .catch((error) => {
          console.error(error);
        });
    }
  }

  async getToken () {
    let token = await AsyncStorage.getItem('token');
    return token;
  }

  async getUserType () {
    let type = await AsyncStorage.getItem('userType');
    return type;
  }

  async setUserData (token, userType) {
    try {
      await AsyncStorage.setItem('token', token);
      await AsyncStorage.setItem('userType', userType.toString());
    } catch (error) {
      console.log("error saving data")
    }
  }
}

export default Auth;
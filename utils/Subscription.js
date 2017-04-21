/**
 * Created by nekothecat on 4/17/17.
 */

import Auth from './Auth';
import config from '../config/Config';

class Subscription {

  token = Auth.getToken();

  follow (followUser) {
    const url = config.siteUrl + '/consumer/follow';
    if (!followUser) {
      return false;
    } else {
      return fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.token
        },
        body: JSON.stringify({
          followUser: followUser
        })
      }).then((response) => response.json())
        .catch((error) => {
          console.error(error);
        });
    }
  }

  getFollowers () {
    const url = config.siteUrl + '/creator/getFollowers';
    return fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      }
    }).then((response) => response.json())
      .catch((error) => {
        console.error(error);
      });
  }

  getFollowing () {
    const url = config.siteUrl + '/consumer/getFollowing';
    return fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      }
    }).then((response) => response.json())
      .catch((error) => {
        console.error(error);
      });
  }
}

export default Subscription;
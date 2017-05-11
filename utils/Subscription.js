/**
 * Created by nekothecat on 4/17/17.
 */

import Auth from './Auth';
import Config from '../config/Config';

class Subscription {

  auth = new Auth();
  config = new Config();


  async getToken() {
    const token = await this.auth.getToken();
    return token;
  }

  follow (followUser, switchSeguido) {
    const url = 'http://34.205.177.234/consumer/follow';
    this.auth.getToken().then((token) => {
      if (!followUser) {
        return false;
      } else {

        fetch(url, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
          },
          body: JSON.stringify({
            followUser: followUser
          })
        }).then((res) => {
          if (res.status == 200) {
            switchSeguido();
          }
        })
          .catch((error) => {
            console.error(error);
          });
      }
    })

  }

  getFollowers () {
    const url = this.config.siteUrl + '/creator/getFollowers';
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
    const url = this.config.siteUrl + '/consumer/getFollowing';
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
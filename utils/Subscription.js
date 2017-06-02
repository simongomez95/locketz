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
            //ESTO ES HORRIBLE PERO ES LA UNICA MANERA DE QUE FUNCIONE
            switchSeguido();
          }
        })
          .catch((error) => {
            console.error(error);
          });
      }
    })

  }

  searchUser (searchName, renderFunction) {
    const url = 'http://34.205.177.234/consumer/searchUsers';
    this.auth.getToken().then((token) => {
      if (!searchName) {
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
            searchName: searchName
          })
        })
          .then((res) => {
          if (res.err) {
            return res.err;
          } else {
            return res.json();
          }
        }).then((results) => {
          renderFunction(results);
        })
          .catch((error) => {
            console.error(error);
          });
      }
    })

  }

  isFollowed(id, callback) {
    this.getFollowing((res) => {
      try {
        let idArray = [];
        res.following.map((item, index) => {
          if (typeof res.following[index] !== 'object') {
            console.log("Aiura");
          }
          else {
            idArray.push(res.following[index].id);
          }

        });
        //console.log("idArray" + JSON.stringify(idArray));
        if(idArray.includes(id)) {

          callback();
        }
      } catch (err) {
        console.log(err);
      }
    });
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

  async getFollowing (callback) {
    const url = 'http://34.205.177.234/consumer/getFollowing';
    this.auth.getToken().then((token) => {
      return fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        }
      }).then((res) => {
        if (res.err) {
          return res.err;
        } else {
          return res.json();
        }
      }).then((results) => {
        callback(results);
      })
        .catch((error) => {
          console.error(error);
        });
    });
  }
}

export default Subscription;
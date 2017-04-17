/**
 * Created by nekothecat on 4/17/17.
 */

import config from '../config/Config'



class Content {

  token = Auth.getToken();

  uploadPhoto (photo) {
    const url = config.siteUrl + '/creator/uploadPhoto';
    if (!photo) {
      return false;
    } else {
      return fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.token
        },
        file: {
          photo: photo
        }
      });
    }
  }

}
/**
 * Created by nekothecat on 4/17/17.
 */

import config from '../config/Config'
import RNFetchBlob from 'react-native-fetch-blob'



class Content {

  token = Auth.getToken();

  // uploadPhoto (photo) {
  //   const url = config.siteUrl + '/creator/uploadPhoto';
  //   if (!photo) {
  //     return false;
  //   } else {
  //     return fetch(url, {
  //       method: 'POST',
  //       headers: {
  //         'Accept': 'application/json',
  //         'Content-Type': 'application/json',
  //         'Authorization': 'Bearer ' + this.token
  //       },
  //       file: {
  //         photo: photo
  //       }
  //     }).then((response) => response.json())
  //       .catch((error) => {
  //         console.error(error);
  //       });
  //   }
  // }

  uploadPhoto (photo) {
    const url = config.siteUrl + '/creator/uploadPhoto';
    RNFetchBlob.fetch('POST', url, {
      // dropbox upload headers
      Authorization : 'Bearer ' + this.token,
      'Content-Type' : 'application/octet-stream',
      // Change BASE64 encoded data to a file path with prefix `RNFetchBlob-file://`.
      // Or simply wrap the file path with RNFetchBlob.wrap().
    }, RNFetchBlob.wrap(photo))
      .then((res) => {
        console.log(res.text())
      })
      .catch((err) => {
        // error handling ..
      })
  }
}

export default Content;
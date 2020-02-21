// amplify
import AmplifyAuth from '@aws-amplify/auth';
import AmplifyStorage from '@aws-amplify/storage';

// smashem helpers
import Store from "./Store";

/**
 * Wrapper for AWS Amplify Storage class providing helper methods
 */
class Storage_1 {

  /**
   * Check if environment exists
   */
  checkEnv() {
    AmplifyAuth.currentUserInfo()
    .then(info => {
      /**
       * Will create environment if it doesn't exist
       */
      this.createUserEnv(info)
    })
    .catch(error => {
      // TODO: deal with error
      console.log(error)
    })
  }

  /**
   * Create user storage
   * @param {Type of config entity} entity 
   * @param {Data Object} dataObject 
   */
  createUserEnv(info, level='private') {
    
    // save data to s3
    let Email = info['attributes']['email']
    let File = `${Email}.json`;

    return AmplifyStorage.put(
      File,
      'Hello World!',
      {level: level, contentType: 'application/json'}
    )
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
  }
}

var Storage = window.Storage = new Storage_1();

export default Storage;
// amplify
import AmplifyAuth from '@aws-amplify/auth';

class Auth_1 {
  // check authentication state of current request
  checkAuthState() {
    AmplifyAuth.currentAuthenticatedUser({
      bypassCache: true
    }).then(response => {
      let user = {username:response.username,...response.attributes}
      console.log('--- user ---',user);
      if(user.username) {
        let data = {
          user: user,
          authenticated: true
        }
        console.log('--- success ---',data);
      }
    }).catch(error => {
      let data = {
        error: true,
        trace: error
      }
      console.log('--- error ---',data);
    });
  }

  // sign in user
  signIn(username, password) {
    AmplifyAuth.signIn({
      username, // Required, the username
      password, // Required, the password
    }).then(response => {
      let user = {username:response.username,...response.attributes}
      if(user.email_verified && user.username) {
        let data = {
          user, 
          authenticated: true
        }
        console.log('--- success ---',data);
      }
    }).catch(error => {
      let data = {
        error: true,
        trace: error,
        authenticated: false
      }
      console.log('--- error ---',data);
    });
  }

  // signup user
  signUp(username, password) {
    AmplifyAuth.signUp({
      username, // Required, the username
      password, // Required, the password
    }).then(response => {
        let user = response.user;
        let data = {
          registered: true,
          user, 
          authenticated: false
        }
        console.log('--- success ---',data);
    }).catch(error => {
      let data = {
        error: true,
        trace: error,
        authenticated: false
      }
      console.log('--- error ---',data);
    });
  }

  // sign out the user
  signOut() {
    // By doing this, you are revoking all the auth tokens(id token, access token and refresh token)
    // which means the user is signed out from all the devices
    // Note: although the tokens are revoked, the AWS credentials will remain valid until they expire (which by default is 1 hour)
    AmplifyAuth.signOut({ global: true })
      .then(response => {
        let data = {
          authenticated: false
        }
      })
      .catch(error => {
        let data = {
          error: error,
          authenticated: false
        }
      });
  }
}

var Auth = window.Auth = new Auth_1();

export default Auth;


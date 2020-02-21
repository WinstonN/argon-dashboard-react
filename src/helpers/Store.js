// MobX for state management
import { decorate, observable, autorun, reaction } from "mobx"

/**
 * Mobx state store global class
 */
class Store_1 {
  constructor() {
    // setup initial state
    this.state = observable.map({
      auth: {
        user: {
          firstname: 'Guest',
          loading:false,
          error: false,
        },
        authenticated: false,
        error: false
      },
      app: {
        user: {
          loading:false,
          error: false,
        },
        settings: {
          loading:false,
          error: false
        },
        domains: {
          loading:false,
          error: false
        },
        tests: {
          loading:false,
          error: false
        }
      }
    })
  }
}

// decorate
decorate(Store_1, {
  state: observable,
});

// initialise class as store
var Store = window.Store = new Store_1();

// debug
autorun(() => {
  console.log('autorun');
  console.log(Store.state)
});

reaction(() => JSON.stringify(Store.state), json => {
  sessionStorage.setItem('store',json);
}, {
  delay: 500,
});

let json = sessionStorage.getItem('store');
if(json) {
  Object.assign(Store.state, JSON.parse(json));
}

export default Store;
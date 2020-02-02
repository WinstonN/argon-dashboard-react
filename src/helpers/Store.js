// MobX for state management
import { decorate, observable } from "mobx"

/**
 * Mobx state store global class
 */
class Store_1 {
  constructor() {
    // setup initial state
    this.state = observable.map({
      auth: {
        authenticated: false,
        error: false
      },
      app: {
        user: {
          loading:false,
          error: false
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
  state: observable
});

// initialise class as store
var Store = window.Store = new Store_1();

// debug
// autorun(() => {
//   console.log('autorun');
//   console.log(get(Store, 'state'));
// });

export default Store;
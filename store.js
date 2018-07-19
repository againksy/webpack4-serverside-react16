import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';

let devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

let store = createStore(
  reducers,
  window.__PRELOADED_STATE__,
  'undefined' !== typeof window && !!window.chrome && !!window.chrome.webstore ?
    compose(
      applyMiddleware(),
      devTools
    )
  :
    compose(
      applyMiddleware(),
    )

)

export default store;

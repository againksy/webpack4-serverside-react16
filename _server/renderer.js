import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import reducers from '../reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import React from 'react';
import InitialComponent from '../components/InitialComponent';

export function safeStringify(obj) {
  return JSON.stringify(obj)
    .replace(/<\/(script)/ig, '<\\/$1')
    .replace(/<!--/g, '<\\!--')
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
}

export default (req, res) => {
  const store = createStore(reducers, {...res.state,
  });


  let html = renderToStaticMarkup(<Provider store={store}><InitialComponent/></Provider>);

  const preloadedState = store.getState();

  const state = {...preloadedState,
    ...res.state
  };


  if('undefined' !== typeof res.redirectUrl) {
    res.redirect(res.redirectUrl);
  } else {
    res.render(res.template || 'index',
      { html: html,
        // comment the safeStringify function to see the render broken, if using just  JSON.stringify with special symbols, that can broke render
        // you will se this error: 'Uncaught SyntaxError: Invalid or unexpected token'
        state: safeStringify(state),
        // state: JSON.stringify(state),
        ...res.params, env: process.env.NODE_ENV
      });
  }
};

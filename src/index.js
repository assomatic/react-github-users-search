import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { GithubProvider } from './context/context';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain='dev-n0qg9jjf.us.auth0.com'
      clientId='dWNBT5hRHGYzFyGPXyzz9dAkeLFNEYLt'
      redirectUri={window.location.origin}
      cacheLocation='localstorage'
    >
      <GithubProvider>
        <App />
      </GithubProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// Domain
// dev - n0qg9jjf.us.auth0.com

// Domain for now
// http://localhost:3000

// Client ID
// dWNBT5hRHGYzFyGPXyzz9dAkeLFNEYLt

// Client Secret
// KyihLWj_oBF40JeYPKgcsyZeck5_UjiI6fTBf6YriV0LrJxzPuIJ-U83jeB8a7Oj

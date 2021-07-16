import React from 'react'
import {
  // BrowserRouter as Router,
  HashRouter
} from 'react-router-dom'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import { Auth0Provider } from '@auth0/auth0-react'

import App from './App'

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Auth0Provider
      domain="kjw-00.au.auth0.com"
      clientId="Z53G9NYAZ1N6j0Wq7a8dII6pfWmJt8hN"
      redirectUri={window.location.origin}
    >
      <Provider store={store}>
        {/* // changed from Router to HashRouter to make refresh/manual URL work */}
        <HashRouter>
          <App />
        </HashRouter>
      </Provider>
    </Auth0Provider>,
    document.getElementById('app')
  )
})

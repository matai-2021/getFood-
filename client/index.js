import React from 'react'
import {
  BrowserRouter as Router
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
      clientId="dJNHf2F6MBNdsIgPUeSW0OHdaquBnUDH"
      redirectUri={window.location.origin}
    >
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </Auth0Provider>,
    document.getElementById('app')
  )
})

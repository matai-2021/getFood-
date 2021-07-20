import React from 'react'
import {
  BrowserRouter as Router
  // useHistory
  // HashRouter
} from 'react-router-dom'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import { Auth0Provider } from '@auth0/auth0-react'

import App from './App'

// const onRedirectCallback = (appState) => {
//   const history = useHistory()
//   // Use the router's history module to replace the url
//   history.push(appState?.returnTo || window.location.pathname)
// }

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Auth0Provider
      domain="kjw-00.au.auth0.com"
      clientId="dJNHf2F6MBNdsIgPUeSW0OHdaquBnUDH"
      redirectUri={window.location.origin}
      // onRedirectCallback={onRedirectCallback}
    >
      <Provider store={store}>
        {/* // changed from Router to HashRouter to make refresh/manual URL work */}
        <Router>
          <App />
        </Router>
      </Provider>
    </Auth0Provider>,
    document.getElementById('app')
  )
})

import React from 'react'
import {
  // BrowserRouter as Router,
  HashRouter
} from 'react-router-dom'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './redux/store'

import App from './App'

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      {/* // changed from Router to HashRouter to make refresh/manual URL work */}
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>,
    document.getElementById('app')
  )
})

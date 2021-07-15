import React from 'react'
import { Route } from 'react-router-dom'
// import { useAuth0 } from '@auth0/auth0-react'

import Header from './components/Header'
import Home from './pages/Home/Home'
import Profile from './pages/Profile/Profile'
import Error from './components/Error/Error'
import AddItem from './pages/admin/AddItem/AddItem'

// import { cacheUser } from './auth-utils'

export default function App () {
//   cacheUser(useAuth0)
  console.log('this is App.jsx')
  return (
    <>
      <Error />
      <Header />
      <main className='container'>
        <Route exact path='/' component={Home} />
        <Route path='/profile' component={Profile} />
        <Route path='/profile/new' component={AddItem} />
      </main>
    </>
  )
}

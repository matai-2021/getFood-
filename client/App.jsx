import React from 'react'
import { Route } from 'react-router-dom'
// import { useAuth0 } from '@auth0/auth0-react'

import Header from './components/Header'
import Home from './pages/Home'
import Profile from './pages/Profile'
import ProfileSetup from './pages/ProfileSetUp'
import Error from './components/Error'
import AddItem from './pages/AddItem'
import About from './pages/About'
import MyItems from './pages/MyItems'
import ItemListing from './pages/ItemListing'
import ItemDetails from './components/ItemDetails'
// import { cacheUser } from './auth-utils'

import { useAuth0 } from '@auth0/auth0-react'

export default function App () {
//   cacheUser(useAuth0)
  const { isAuthenticated } = useAuth0()

  return (
    <>
      <Error />
      <Header />
      <main className='container'>
        { !isAuthenticated && (
          <Route exact path='/' component={Home} />
        )}
        { isAuthenticated && (
          <Route exact path='/' component={ItemListing} />
        )}
        <Route path='/profile' component={Profile} />
        <Route path='/profilesetup' component={ProfileSetup} />
        <Route path='/about' component={About} />
        <Route path='/myitems' component={MyItems} />
        <Route path='/itemnew' component={AddItem} />
        <Route path='/item/:id' component={ItemDetails} />
      </main>
    </>
  )
}

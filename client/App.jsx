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
import ItemListing from './components/ItemListing'
import ItemDetails from './components/ItemDetails'
// import { cacheUser } from './auth-utils'

export default function App () {
//   cacheUser(useAuth0)
  return (
    <>
      <Error />
      <Header />
      <main className='container'>
        <Route exact path='/' component={Home} />
        <Route path='/' component={ItemListing} /> {/* Show Item Listing when logged in? */}
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/profilesetup' component={ProfileSetup} />
        <Route exact path='/about' component={About} />
        <Route exact path='/myitems' component={MyItems} />
        <Route exact path='/item/new' component={AddItem} />
        <Route exact path='/item/:id' component={ItemDetails} />
      </main>
    </>
  )
}

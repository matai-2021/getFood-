import React from 'react'
import { Route } from 'react-router-dom'
// import { useAuth0 } from '@auth0/auth0-react'

import Header from './components/Header'
import Home from './pages/Home'
import Profile from './pages/Profile'
import ProfileSetup from './pages/ProfileSetUp'
import AddItem from './pages/AddItem'
import EditItemForm from './components/EditItemForm'
import About from './pages/About'
import MyItems from './pages/MyItems'
import ItemListing from './pages/ItemListing'
import ItemDetails from './components/ItemDetails'
import Footer from './components/Footer'
import AddMsg from './components/Messages/AddMsg'
import DeleteMsg from './components/Messages/DeleteMsg'
import ClaimMsg from './components/Messages/ClaimMsg'
import UnclaimMsg from './components/Messages/UnclaimMsg'
// import { cacheUser } from './auth-utils'

import { useAuth0 } from '@auth0/auth0-react'

export default function App () {
//   cacheUser(useAuth0)
  const { isAuthenticated } = useAuth0()

  return (
    <>
      <div className='page-container'>
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
          <Route path='/edititem/:id' component={EditItemForm} />
          <Route path='/item/:id' component={ItemDetails} />
          <Route path='/addMsg' component={AddMsg} />
          <Route path='/deleteMsg' component={DeleteMsg} />
          <Route path='/claimMsg' component={ClaimMsg} />
          <Route path='/unclaimMsg' component={UnclaimMsg} />
        </main>
      </div>
      <Footer />
    </>
  )
}

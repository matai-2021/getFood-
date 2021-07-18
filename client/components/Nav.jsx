import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

// // React-Icons Import
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoClose } from 'react-icons/io5'

export default function Nav () {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0() // isLoading, user

  const [open, setOpen] = useState(false)

  function handleRegister () {
    loginWithRedirect({
      redirectUri: `${window.location.origin}`,
      screen_hint: 'signup'
    })
  }

  function handleLogin () {
    loginWithRedirect({ redirectUri: `${window.location.origin}/profile` })
  }

  function handleLogoff () {
    logout()
    // logout({ returnTo: window.location.origin })
  }

  const toggleMenu = () => {
    setOpen(!open)
  }

  return (
    <nav className="nav" >
      {open && <div className='nav-menu-toggle' onClick={toggleMenu}>
        <Link to="/" className='nav-link'>Home</Link>
        <Link to="/about" className='nav-link'>About Us</Link>
        <Link to="/myitems" className='nav-link'>My Items</Link>

        { isAuthenticated && (
          <>
            <Link to="/profile" className='nav-link'>My Profile</Link>
            <a href="/" onClick={handleLogoff} className='nav-link'>Log out</a>
          </>
        )}

        { !isAuthenticated && (
          <>
            <a href="/" onClick={handleLogin} className='nav-link'>Sign in</a>
            <a href="/" onClick={handleRegister} className='nav-link'>Register</a>
          </>
        )}

        <div className='close-btn' onClick={toggleMenu} ><IoClose/></div>
      </div>
      }
      {!open && <div className='nav-menu'>
        <Link to="/" className='nav-link'>Home</Link>
        <Link to="/about" className='nav-link'>About</Link>
        <Link to="/myitems" className='nav-link'>My Items</Link>

        { isAuthenticated && (
          <>
            <Link to="/profile" className='nav-link'>My Profile</Link>
            <a href="/" onClick={handleLogoff} className='nav-link'>Log out</a>
          </>
        )}

        { !isAuthenticated && (
          <>
            <a href="/" onClick={handleLogin} className='nav-link'>Sign in</a>
            <a href="/" onClick={handleRegister} className='nav-link'>Register</a>
          </>
        )}

        <div className='hamburger' onClick={toggleMenu} ><GiHamburgerMenu/></div>
      </div>
      }
    </nav>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'

import Nav from './Nav'
// import WaitIndicator from '../components/WaitIndicator/WaitIndicator'

export default function Header () {
  return (
    <header className="header-container">
      <p>getFood! (Change to logo here, always stay up)</p>

      <Link className="logo-wrapper" to="/">
        <img src='public/images/getFood-logo-01.svg' alt="getFood" className='logo-image' />
      </Link>
      <Nav />
    </header>

  )
}

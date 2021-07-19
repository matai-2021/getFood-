import React from 'react'
import { Link } from 'react-router-dom'

import Nav from './Nav'
// import WaitIndicator from '../components/WaitIndicator/WaitIndicator'

export default function Header () {
  return (
    <header className="header-container">
      <Link className='logo-image' to="/">
        <img src='/images/getFood-logo.svg' alt="getFood" className='logo-image' />
      </Link>
      <Nav />
    </header>

  )
}

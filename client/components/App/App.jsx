import React, { useEffect } from 'react'

function App () {
  useEffect(() => {
  }, [])

  return (
    <>
      <main className='container'>
        <h1>Welcome to getFood()</h1>
        <p>A food conserving project by getFood()!</p>
        <p>Please log in to get started, or checkout our About page</p>
      </main>
    </>
  )
}

export default App

/*
export default function Header () {
  return (
    <header className="header-container">
      <Link className="logo-wrapper" to="/">
        <img src='/images/gardenzLogo.svg' alt="gardenzlogo" className='logo-image' />
      </Link>
      <WaitIndicator />
      <Nav />
    </header>
  )
}

*/

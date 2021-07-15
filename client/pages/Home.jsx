import React from 'react'
import { Link } from 'react-router-dom'

export default function Home () {
  return (
    <>
      <main className='container'>
        <h1 className='page-title'>Welcome to getFood</h1>
        <p>A food conserving project by getFood</p>
        <p>Please log in to get started, or checkout our About page</p>
      </main>
      <div className='is-flex'>
        <Link to='/event/new' className='button'>Add New Event</Link>
      </div>
    </>
  )
}

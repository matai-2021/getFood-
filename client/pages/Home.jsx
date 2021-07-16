import { Color } from 'jest-matcher-utils/node_modules/chalk'
import React from 'react'
// import { Link } from 'react-router-dom'

export default function Home () {
  return (
    <section className='flex-container'>
      <main className='container'>
        <h1 className='page-title'>Welcome to getFood</h1>
        <p>A food conserving project by getFood</p>
        <p>Please log in to get started, or checkout our About page</p>
      </main>
    </section>
  )
}

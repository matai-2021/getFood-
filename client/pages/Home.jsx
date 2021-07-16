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
      <section className='card-container'>
        <button>Go back</button>
        <div style={{ width: '90%', height: '200px', backgroundColor: 'pink' }}>Image will go here</div>
        <article>
          <h1>Bag of potatoes</h1>
          <h1>Pick up location: LA</h1>
          <h1>Description Description Description Description
        Description Description Description Description Description
          </h1>
          <button>Edit item</button>
          <button>Delete item</button>
        </article>
      </section>
    </section>
  )
}

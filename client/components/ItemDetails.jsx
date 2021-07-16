import React from 'react'

export default function ItemDetails () {
  return (
    <>
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
    </>
  )
}

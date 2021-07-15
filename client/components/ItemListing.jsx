import React from 'react'
import { Link } from 'react-router-dom'

export default function ItemListing ({ events }) {
  return (
    <>

      <section>
        <div className='is-flex'>
          <Link to='/item/new' className='button'>Add New Item</Link>
        </div>
      </section>
    </>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'

export default function Home () {
  return (
    <div className='delete-msg'>
      <h3>Item was deleted successfully!</h3>
      <Link to='/myitems'>Go back to My Items</Link>
    </div>
  )
}

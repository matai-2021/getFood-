import React from 'react'
import { Link } from 'react-router-dom'

export default function Home () {
  return (
    <div className='add-msg'>
      <h3>Item was added successfully!</h3>
      <Link to='/'>Go back to Home</Link>
    </div>
  )
}

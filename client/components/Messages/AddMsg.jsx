import React from 'react'
import { Link } from 'react-router-dom'
import { GrStatusGood } from 'react-icons/gr'

export default function AddMsg () {
  return (
    <div className='add-msg'>
      <GrStatusGood className='msg-icon'/>
      <h3>Item was added successfully!</h3>
      <Link to='/'>Go back to Home</Link>
    </div>
  )
}

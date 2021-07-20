import React from 'react'
import { Link } from 'react-router-dom'
import { GrStatusGood } from 'react-icons/gr'

export default function DeleteMsg () {
  return (
    <div className='delete-msg'>
      <GrStatusGood className='msg-icon'/>
      <h3>Item was deleted successfully!</h3>
      <Link to='/myitems'>Go back to My Items</Link>
    </div>
  )
}

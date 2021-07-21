import React from 'react'
import { Link } from 'react-router-dom'
import { GrStatusGood } from 'react-icons/gr'

export default function EditMsg () {
  return (
    <div className='add-msg'>
      <GrStatusGood className='msg-icon'/>
      <h3>Item was updated successfully!</h3>
      <Link to='/myitems'>Go back to My Items</Link>
    </div>
  )
}

import React from 'react'
// import { useHistory } from 'react-router-dom'

// import { addItem } from './addItemHelper'

import ItemForm from '../components/ItemForm'

export default function AddItem () {
//   const history = useHistory()

  function submitEvent (event) {
    // addItem(event, history.push)
  }

  return (
    <ItemForm
      action='Create Item'
      submitEvent={submitEvent}
    />
  )
}

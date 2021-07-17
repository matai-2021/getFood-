import React from 'react'
// import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addItem } from '../redux/itemsSlice'

import ItemForm from '../components/ItemForm'

export default function AddItem () {
  const dispatch = useDispatch()
  // const history = useHistory()

  function submitEvent (event) {
    dispatch(addItem(event))
    // history.push('/')
  }

  return (
    <ItemForm
      submitEvent={submitEvent}
    />
  )
}

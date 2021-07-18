import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../redux/itemsSlice'

import ItemForm from '../components/ItemForm'

export default function AddItem () {
  const dispatch = useDispatch()

  function submitEvent (event) {
    dispatch(addItem(event))
  }

  return (
    <ItemForm
      submitEvent={submitEvent}
    />
  )
}

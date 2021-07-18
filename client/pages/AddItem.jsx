import React from 'react'
import { useDispatch } from 'react-redux'
// import { useHistory } from 'react-router-dom'
// import { getItems } from '../redux/itemsSlice'
// import { useParams } from 'react-router'
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

import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../redux/itemsSlice'

import ItemForm from '../components/ItemForm'

export default function AddItem () {
  const dispatch = useDispatch()

  function submitItem (item) {
    dispatch(addItem(item))
  }

  return (
    <div className='add-item-form'>
      <ItemForm
        submitItem={submitItem}
      />
    </div>
  )
}

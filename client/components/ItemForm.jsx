// used for adding item
import React, { useState } from 'react'

export default function ItemForm (props) {
  const [form, setForm] = useState(props.formData || {
    name: '',
    date: '',
    quantity: 0,
    description: ''
  })

  function handleChange (e) {
    setForm(e.target.value)
  }

  function handleSubmit (e) {
    e.preventDefault()
    props.submitEvent(form)
    setForm({})
  }

  const { name, description } = form
  // below might be not good
  return (
    <>
      <div>
        <h2 className='title is-5 mb-4'>Item Details</h2>
        <form>
          <div className="field">
            <label
              htmlFor='name'
              className='label'>Item Name</label>
            <input
              id='name'
              name='name'
              className='input is-normal'
              type='text'
              placeholder='item name'
              value={name}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label
              htmlFor='description'
              className='label'
            >Description</label>
            <textarea
              id='description'
              name='description'
              className='textarea is-normal'
              placeholder='item description'
              value={description}
              onChange={handleChange}
            />
          </div>
          <button
            className='button mt-4'
            onClick={handleSubmit}
          >{props.action}</button>
        </form>
      </div>
      {/* We could implement Item preview like in gardenz */}
    </>
  )
}

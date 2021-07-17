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

  const { name, date, description } = form
  // below might be not good
  return (
    <>
      <div>
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
              htmlFor='date'
              className='label'
            >Date</label>
            <textarea
              id='date'
              name='date'
              className='textarea is-normal'
              placeholder='date'
              value={description}
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
      <div className='column is-half'>
      </div>
    </>
  )
}

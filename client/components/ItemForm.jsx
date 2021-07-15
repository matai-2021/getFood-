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

  }

  function handleSubmit (e) {
    e.preventDefault()
    props.submitEvent(form)
  }

  const { name, date, description } = form
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
              placeholder='event name'
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
              placeholder='event description'
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
        <h2 className='title is-5 mb-4'>Item Preview</h2>
        <div className='box'>
          {name
            ? <h2 className='title is-5 is-flex-grow-1'>{name}</h2>
            : <h2 className='title is-5 is-flex-grow-1'>Your name here</h2>
          }
          {date
            ? <p>{date}</p>
            : <p>Your date here</p>
          }
          {description
            ? <p>{description}</p>
            : <p>Your description here</p>
          }

        </div>
      </div>
    </>
  )
}

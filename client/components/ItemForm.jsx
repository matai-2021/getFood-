import React, { useState } from 'react'

export default function ItemForm (props) {
  const [form, setForm] = useState({
    name: '',
    quantity: '',
    expiryDate: '',
    location: '',
    description: '',
    email: '',
    img: null
  })

  function handleChange (e) {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })
  }

  function handleSubmit (e) {
    e.preventDefault()
    props.submitEvent(form)
  }

  function handleImg (e) {
    if (e.target.files && e.target.files[0]) {
      const img = e.target.files[0]
      setForm({
        ...form,
        img: URL.createObjectURL(img)
      })
    }
  }

  const { name, quantity, expiryDate, location, description, email } = form

  return (
    <>
      <div>
        <h2 className='title is-5 mb-4'>Item Details</h2>
        <form onSubmit={handleSubmit}>
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
          <div className="field">
            <label
              htmlFor='expiryDate'
              className='label'
            >Expiry Date</label>
            <textarea
              id='expiryDate'
              name='expiryDate'
              className='textarea is-normal'
              placeholder='exp date'
              value={expiryDate}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label
              htmlFor='quantity'
              className='label'
            >Quantity</label>
            <textarea
              id='quantity'
              name='quantity'
              className='textarea is-normal'
              placeholder='quantity'
              value={quantity}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label
              htmlFor='location'
              className='label'
            >Location</label>
            <textarea
              id='location'
              name='location'
              className='textarea is-normal'
              placeholder='item location'
              value={location}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label
              htmlFor='email'
              className='label'
            >Email:</label>
            <textarea
              id='email'
              name='email'
              className='textarea is-normal'
              placeholder='email'
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label
              htmlFor='img'
              className='label'
            >Image:</label>
            <input
              type="file"
              name="img"
              onChange={handleImg}
            />
          </div>
          <button className='btn-grad'>
            Create Item
          </button>
        </form>
      </div>
    </>
  )
}

import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

export default function ItemForm (props) {
  const history = useHistory()
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
    history.push('/message')
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
        <h2 className='form-title2'>Item Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="fieldleftinput">
            <label
              htmlFor='name'
              className='labelgrey'>Item Name:</label>
          </div>
          <div className="field">
            <input
              id='name'
              name='name'
              className='form-box'
              type='text'
              placeholder='item name'
              value={name}
              onChange={handleChange}
            />
          </div>
          <div className="fieldleftinput">
            <label
              htmlFor='description'
              className='labelgrey'
            >Description:</label>
          </div>
          <div className="field">
            <textarea
              id='description'
              name='description'
              className='form-box'
              placeholder='item description'
              value={description}
              onChange={handleChange}
            />
          </div>
          <div className="fieldleftinput">
            <label
              htmlFor='expiryDate'
              className='labelgrey'
            >Expiry Date:</label>
          </div>
          <div className="field">
            <textarea
              id='expiryDate'
              name='expiryDate'
              className='form-box'
              placeholder='exp date'
              value={expiryDate}
              onChange={handleChange}
            />
          </div>
          <div className="fieldleftinput">
            <label htmlFor='quantity' className='labelgrey'>Quantity:</label>
          </div>
          <div className="field">
            <textarea id='quantity'
              name='quantity'
              className='form-box'
              placeholder='quantity'
              value={quantity}
              onChange={handleChange}
            />
          </div>
          <div className="fieldleftinput">
            <label
              htmlFor='location'
              className='labelgrey'
            >Location:</label>
          </div>
          <div className="field">
            <textarea
              id='location'
              name='location'
              className='form-box'
              placeholder='item location'
              value={location}
              onChange={handleChange}
            />
          </div>
          <div className="fieldleftinput">
            <label
              htmlFor='email'
              className='labelgrey'
            >Email:</label>
          </div>
          <div className="field">
            <textarea
              id='email'
              name='email'
              className='form-box'
              placeholder='email'
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label
              htmlFor='img'
              className='labelgrey'
            >Image:  </label>
          </div>
          <div className="field">
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

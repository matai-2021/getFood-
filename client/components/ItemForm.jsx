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
    props.submitItem(form)
    history.push('/addMsg')
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
        <div className='heading-container'>
          <h1 className='page-title'>Add Item</h1>
          <div className='horizontal-line'></div>
        </div>
        {/*  */}

        <form className="add-item-form-wrapper" onSubmit={handleSubmit}>
          <div className="fieldleftif">
            <label
              htmlFor='name'
              className='labelif'>Item Name:</label>
          </div>
          <div className="fieldif">
            <input
              id='name'
              name='name'
              className='form-boxif'
              type='text'
              placeholder='Your item name'
              value={name}
              onChange={handleChange}
            />
          </div>
          <div className="fieldleftif">
            <label
              htmlFor='description'
              className='labelif'
            >Description:</label>
          </div>
          <div className="fieldif">
            <input
              id='description'
              name='description'
              className='form-boxif'
              placeholder='e.g. "In good condition, stored in a bag"'
              value={description}
              onChange={handleChange}
            />
          </div>
          <div className="fieldleftif">
            <label
              htmlFor='expiryDate'
              className='labelif'
            >Expiry Date:</label>
          </div>
          <div className="fieldif">
            <input
              id='expiryDate'
              name='expiryDate'
              className='form-boxif'
              placeholder='Expiry date if applicable'
              value={expiryDate}
              onChange={handleChange}
            />
          </div>
          <div className="fieldleftif">
            <label htmlFor='quantity' className='labelif'>Quantity:</label>
          </div>
          <div className="fieldif">
            <input id='quantity'
              name='quantity'
              className='form-boxif'
              placeholder='Quantity'
              value={quantity}
              onChange={handleChange}
            />
          </div>
          <div className="fieldleftif">
            <label
              htmlFor='location'
              className='labelif'
            >Pickup location:</label>
          </div>
          <div className="fieldif">
            <input
              id='location'
              name='location'
              className='form-boxif'
              placeholder='Pickup location for this item'
              value={location}
              onChange={handleChange}
            />
          </div>
          <div className="fieldleftif">
            <label
              htmlFor='email'
              className='labelif'
            >Email:</label>
          </div>
          <div className="fieldif">
            <input
              id='email'
              name='email'
              className='form-boxif'
              placeholder='Email for contact'
              value={email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor='img'
              className='labelif'
            >Image:  </label>
          </div>
          <div className="fieldif">
            <input
              type="file"
              name="img"
              onChange={handleImg}
            />
          </div>
          <div className='imgcenter'>
            <button className='btn-grad'>
            Create Item
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

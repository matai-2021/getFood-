import React from 'react'

export default function MySingleItem (props) {
  const {
    id,
    name,
    email,
    description,
    quantity,
    img,
    expiryDate,
    handleDelete,
    handleEdit
  } = props

  return (
    <section className='item-container'>
      <div className='item-details'>
        <h1 className='item-title'>
          {name}
        </h1>
        <div className='horizontal-line-single-item'></div>
        <p className='page-paragraph'>
          Description: {description}
        </p>
        <p className='page-paragraph'>
          Expiry Date:{expiryDate}
        </p>
        <p className='page-paragraph'>
          Quantity: {quantity}
        </p>
        <p className='page-paragraph'>
          email: {email}
        </p>
        <div className='btn-wrapper'>
          <button className='item-details-btn'
            onClick={() => handleEdit(id)}>
            Edit
          </button>
          <button className='item-details-btn'
            onClick={() => handleDelete(id)}>
            Delete
          </button>
        </div>
      </div>
      <div className='item-img'>
        <img src={img} alt={img} />
      </div>
    </section>
  )
}

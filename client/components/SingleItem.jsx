import React from 'react'

export default function SingleItem (props) {
  const {
    name,
    email,
    description,
    quantity,
    img,
    expiryDate
  } = props

  return (
    <section className='item-container'>
      <div className='item-details'>
        <p>
          <strong>Name: </strong>{name}
        </p>
        <p>
          <strong>Description: </strong>{description}
        </p>
        <p>
          <strong>Expiry Date: </strong>{expiryDate}
        </p>
        <p>
          <strong>Quantity: </strong>{quantity}
        </p>
        <p>
          <strong>email: </strong>{email}
        </p>
      </div>
      <div className='item-img'>
        <img src={img} alt={img} />
      </div>
    </section>
  )
}

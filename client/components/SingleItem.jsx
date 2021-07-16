import React from 'react'
import { Link } from 'react-router-dom'

export default function SingleItem (props) {
  const {
    id,
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

        <Link to={`/items/${id}`}className='item-link'>View More...</Link>
      </div>
      <div className='item-img'>
        <img src={img} alt={img} />
      </div>
    </section>
  )
}

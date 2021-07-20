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
    <section className='card-container'>
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
        <Link to={`/item/${id}`}className='item-details-btn'>Item Details</Link>
      </div>
      <div className='item-img'>
        <img src={img} alt={img} />
      </div>
    </section>
  )
}

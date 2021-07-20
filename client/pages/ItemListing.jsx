import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getItems } from '../redux/itemsSlice'
import { Link } from 'react-router-dom'

// Components
import SingleItem from '../components/SingleItem'

export default function ItemListing () {
  const items = useSelector(state => state.items)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getItems())
  }, [])

  return (
    <section className='items-wrapper'>
      <div className='item-heading-container'>
        <h1 className='item-heading'>Live Feed</h1>
        <Link to='/itemnew' className='btn-grad add-item-btn'>Add Item</Link>
      </div>
      {items.map(item => (
        !item.isClaimed &&
        <React.Fragment key={item.id} >
          <SingleItem
            id={item.id}
            name={item.name}
            description={item.description}
            expiryDate={item.expiryDate}
            quantity={item.quantity}
            email={item.email}
            img={item.img}
          />
        </React.Fragment>
      )).reverse()}
    </section>
  )
}

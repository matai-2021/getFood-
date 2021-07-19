import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getItems } from '../redux/itemsSlice'
import { Link } from 'react-router-dom'

// Components
import SingleItem from '../components/SingleItem'

export default function ItemListing () {
  const items = useSelector(state => state.items)
  const dispatch = useDispatch()
  // console.log(items)

  useEffect(() => {
    dispatch(getItems())
  }, [])

  return (
    <section className='items-wrapper'>
      <Link to='/itemnew' className='btn-grad'>Add Item</Link>
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
      ))}
    </section>
  )
}

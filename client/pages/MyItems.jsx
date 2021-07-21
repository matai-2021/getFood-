import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getItems, deleteItem } from '../redux/itemsSlice'
import { Link, useHistory } from 'react-router-dom'

// Components
import MySingleItem from '../components/MySingleItem'

export default function ItemDetails () {
  const dispatch = useDispatch()
  const history = useHistory()
  const items = useSelector(state => state.items.filter(item => item.isClaimed))

  useEffect(() => {
    dispatch(getItems())
  }, [])

  const handleDelete = (itemId) => {
    dispatch(deleteItem({ id: itemId }))
    history.push('/deleteMsg')
  }

  const handleEdit = (itemId) => {
    history.push(`/edititem/${itemId}`)
  }

  return (
    <section className='items-wrapper'>
      <div className='item-heading-container'>
        <h1 className='item-heading'>My Items</h1>
        <Link to='/itemnew' className='btn-grad'>Add New Item</Link>
      </div>
      {items.length ? items.map(item => (
        <React.Fragment key={item.id} >
          <MySingleItem
            id={item.id}
            name={item.name}
            description={item.description}
            expiryDate={item.expiryDate}
            quantity={item.quantity}
            email={item.email}
            img={item.img}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        </React.Fragment>
      )).reverse() : <h1>No Items Found</h1>}
    </section>
  )
}

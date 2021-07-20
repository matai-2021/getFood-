import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getItems, deleteItem } from '../redux/itemsSlice'
import { Link, useHistory } from 'react-router-dom'

export default function ItemDetails () {
  const history = useHistory()
  const dispatch = useDispatch()
  const items = useSelector(state => state.items.filter(item => item.isClaimed))

  useEffect(() => {
    dispatch(getItems())
  }, [])

  const handleDelete = (itemId) => {
    dispatch(deleteItem({ id: itemId }))
    history.push('/delete')
  }

  return (
    <>
      <section className='card-container'>
        <Link to={'/'}className='link-button'>Go back</Link>
        {
          items.length
            ? items.map(item => (
              <React.Fragment key={item?.id}>
                <img className='card-img'
                  src={item?.img}
                  alt={item?.name}
                />
                <article>
                  <h1 className='item-title'>{item?.name}</h1>
                  <h1 className='page-paragraph'>Pick up location: {item?.location}</h1>
                  <h1 className='page-paragraph'>Description: {item?.description}</h1>
                  <h1 className='page-paragraph'>Quantity: {item?.quantity}</h1>
                  <h1 className='page-paragraph'>Exp. Data: {item?.expiryDate}</h1>
                  <h1 className='page-paragraph'>Date Created: {item?.dateCreated}</h1>
                  <h1 className='page-paragraph'>Email: {item?.email}</h1>
                </article>
                <article>
                  <button className='btn-grad'>Edit</button>
                  <button className='btn-grad' onClick={() => handleDelete(item?.id)}>Delete</button>
                </article>
              </React.Fragment>
            )) : <h1>No Items Found</h1> }

      </section>
    </>
  )
}

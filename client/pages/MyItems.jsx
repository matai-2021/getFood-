import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getItems, deleteItem } from '../redux/itemsSlice'
import { Link, useHistory } from 'react-router-dom'
import { withAuthenticationRequired } from '@auth0/auth0-react'

// Components
import MySingleItem from '../components/MySingleItem'

const loading = <img src='./images/loading-buffering1.gif'/>

function ItemDetails () {
  const dispatch = useDispatch()
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

  const history = useHistory()

  return (
    <section className='items-wrapper'>
      <div className='item-heading-container'>
        <h1 className='item-heading'>My Claims</h1>
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
      )) : <h1 className='fontparagraph'>No Items Found</h1>}
    </section>
  )
}

export default withAuthenticationRequired(ItemDetails, {
  displayName: 'Loading',
  onRedirecting: () => (loading)
})

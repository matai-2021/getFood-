import React from 'react'
// import { Link } from 'react-router-dom'

export default function HomeDrawing () {
  return (
    <section className='home-parent'>
      <div className='home-child-right'>
        {/* <Link className='logo-image' to="/"> */}
        <img src='/images/gfood drawing-02.svg' alt="getFood" className='logo-image' />
        {/* </Link> */}
      </div>
      <div className='home-child-left'>
        {/* <Link className='logo-image' to="/"> */}
        <img className='logo-image'src='/images/gfood drawing-01.svg' alt="getFood"/>
        {/* </Link> */}
      </div>
    </section>
  )
}

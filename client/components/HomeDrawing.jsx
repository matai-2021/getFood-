import React from 'react'
// import { Link } from 'react-router-dom'

export default function HomeDrawing () {
  return (
    <section className='home-parent'>
      <div className='home-child-right'>
        <img src='/images/gfood drawing-02.svg' alt="getFood" className='logo-image' />
      </div>
      <div className='home-child-left'>
        <img className='logo-image'src='/images/gfood drawing-01.svg' alt="getFood"/>
      </div>
    </section>
  )
}

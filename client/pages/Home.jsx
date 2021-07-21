import React from 'react'
import HomeDrawing from '../components/HomeDrawing'

export default function Home () {
  return (
    <>
      <section className='home-center-container'>
        <div className='home-center-sub-container'>
          <section className='heading-container'>
            <h1 className='page-title'>Welcome to getFood</h1>
            <div className='horizontal-line'></div>
            <p className='page-paragraph'>A food conserving project by the getFood group</p>
            <p className='page-paragraph'>Please log in to get started, or checkout our About page</p>
          </section>
        </div>
      </section>
      <HomeDrawing/>
    </>
  )
}

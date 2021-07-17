import React from 'react'

export default function About () {
  return (
    <>
      <main className='container'>
        <h1>About</h1>
        <p>Fight waste. Help your neighbours. Save our planet. Feel amazing!</p>
        <div className="parent flex-container">
          <div className="child flex-row">
            <h2>Our Story</h2>
            <img className="img-holder" src="https://christihegstad.com/content/uploads/2017/11/Plant-Grow-Seedling-Sunshine-.jpg"/>
            <p>Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <a className="button" href="https://www.trademe.co.nz/c/community/article/our-story">Read more</a>
          </div>
          <div className="child flex-row">
            <h2>Vision & Values</h2>
            <img className="img-holder" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQKg7kMLOxRLbsBt-Gs9d_l75wVO9LfZAUcw&usqp=CAU"/>
            <p>Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <a className="button" href="https://www.trademe.co.nz/c/community/article/vision-and-values">Read more</a>
          </div>
          <div className="child flex-row">
            <h2>Community Rules</h2>
            <img className="img-holder" src="https://ychef.files.bbci.co.uk/976x549/p0842qj5.jpg"/>
            <p>Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <a className="button" href="#">Read more</a>
          </div>
        </div>
      </main>
    </>
  )
}

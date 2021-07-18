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
            <img
              className="img-holder"
              src="https://christihegstad.com/content/uploads/2017/11/Plant-Grow-Seedling-Sunshine-.jpg"
            />
            <p>
              Founded in 2021, getFood connects neighbours with each other and with local
              businesses so surplus food can be shared, not thrown away.
            </p>
            <a className="button" href="https://www.trademe.co.nz/c/community/article/our-story">Read more</a>
          </div>
          <div className="child flex-row">
            <h2>Vision & Values</h2>
            <img
              className="img-holder"
              src="https://media.istockphoto.com/photos/enjoying-lunch-with-friends-picture-id1171787426?k=6&m=1171787426&s=612x612&w=0&h=cvdOLV4T-QGC60hZT4p8u7FHPHsUKA12FnswVCL2WB4="
            />
            <p>
              getFood is for everybody. It’s a mind-set, not a demographic.
              We hate waste of any variety. We’re caring in our actions and words.
            </p>
            <a className="button" href="https://www.trademe.co.nz/c/community/article/vision-and-values">Read more</a>
          </div>
          <div className="child flex-row">
            <h2>Community Rules</h2>
            <img
              className="img-holder"
              src="https://thehappyfrog.com.au/wp-content/uploads/2019/07/Walking-together-iStock-668218790.jpg"
            />
            <p>getFood is only as good as the community around it. Therefore,
              we have some rules that we expect our members to honour in
              order to keep everyone safe.
            </p>
            <a className="button" href="#">Read more</a>
          </div>
        </div>
      </main>
    </>
  )
}

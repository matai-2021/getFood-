import React from 'react'

export default function About () {
  return (
    <section className='about-page-container'>
      <div className='heading-container'>
        <h1 className='page-title'>About</h1>
        <div className='horizontal-line'></div>
        <p className='page-paragraph'>Fight waste. Help your neighbours. Save our planet. Feel amazing.</p>
      </div>
      <div className="parent flex-container">
        <div className="child flex-row">
          <h2 className='page-sub-title'>Our Story</h2>
          <img
            className="img-holder"
            src="https://christihegstad.com/content/uploads/2017/11/Plant-Grow-Seedling-Sunshine-.jpg"
          />
          <p className='page-paragraph'>
              Founded in 2021, getFood connects neighbours with each other and with local
              businesses so surplus food can be shared, not thrown away.
          </p>
          <a target='_blank' className="btn-grad" href="https://www.google.com" rel="noreferrer">Read more</a>
        </div>
        <div className="child flex-row">
          <h2 className='page-sub-title'>Vision & Values</h2>
          <img
            className="img-holder"
            src="https://media.istockphoto.com/photos/enjoying-lunch-with-friends-picture-id1171787426?k=6&m=1171787426&s=612x612&w=0&h=cvdOLV4T-QGC60hZT4p8u7FHPHsUKA12FnswVCL2WB4="
          />
          <p className='page-paragraph'>
              getFood is for everybody. It’s a mind-set, not a demographic.
              We hate waste of any variety. We’re caring in our actions and words.
          </p>
          <a target='_blank' className="btn-grad" href="https://www.google.com" rel="noreferrer">Read more</a>
        </div>
        <div className="child flex-row">
          <h2 className='page-sub-title'>Community Rules</h2>
          <img
            className="img-holder"
            src="https://thehappyfrog.com.au/wp-content/uploads/2019/07/Walking-together-iStock-668218790.jpg"
          />
          <p className='page-paragraph'>getFood is only as good as the community around it. Therefore,
              we have some rules that we expect our members to honour in
              order to keep everyone safe.
          </p>
          <a target='_blank' className="btn-grad" href="https://www.google.com" rel="noreferrer">Read more</a>
        </div>
      </div>
    </section>
  )
}

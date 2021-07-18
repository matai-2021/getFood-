import React from 'react'
import { AiFillFacebook, AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai'

export default function Footer () {
  return (
    <footer className="footer">
      <h3>&copy; getFood</h3>
      <ul className="social-list">
        <li className="social-list-item">
          <a
            className="social-list-link"
            href="https://facebook.com"
            target='_blank' rel="noreferrer"
          >
            <AiFillFacebook/>
          </a>
        </li>
        <li className="social-list-item">
          <a
            className="social-list-link"
            href="https://www.instagram.com"
            target="_blank" rel="noreferrer"
          >
            <AiFillInstagram/>
          </a>
        </li>
        <li className="social-list-item">
          <a
            className="social-list-link"
            href="https://twitter.com/"
            target="_blank" rel="noreferrer"
          >
            <AiFillTwitterCircle/>
          </a>
        </li>
      </ul>
    </footer>
  )
}

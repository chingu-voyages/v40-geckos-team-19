import React from 'react'
import './Footer.css'
import { RiFacebookFill, RiInstagramFill } from 'react-icons/ri'

const Footer = () => {
  return (
    <footer>
        <div className="footer_container">
            <div className='content-list'>
                <div className='item'>
                    <h5>MY ACCOUNT</h5>
                    <ul>
                        <li>Something</li>
                        <li>Something</li>
                        <li>Something</li>
                    </ul>
                </div>
                <div className='item'>
                    <h5>MY ACCOUNT</h5>
                    <ul>
                        <li>Something</li>
                        <li>Something</li>
                        <li>Something</li>
                    </ul>
                </div>
                <div className='item'>
                    <h5>MY ACCOUNT</h5>
                    <ul>
                        <li>Something</li>
                        <li>Something</li>
                        <li>Something</li>
                    </ul>
                </div>
            </div>
            <div className='social'>
                <h5>Follow us</h5>
                <div className='links'>
                <a href="/">
                    <RiFacebookFill />
                </a>
                <a href="/">
                    <RiInstagramFill />
                </a>
                <a href="/">
                    <RiFacebookFill />
                </a>
                <a href="/">
                    <RiFacebookFill />
                </a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
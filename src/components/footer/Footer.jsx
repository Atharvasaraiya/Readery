import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'
import { Link } from 'react-router-dom';
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  const context = useContext(myContext);
  const { mode } = context;
  return (
    <div>
      <footer className="text-gray-600 body-font bg-gray-300" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }}>
        <div className="container px-5 py-24 mx-auto" >
          <div className="flex flex-wrap md:text-left text-center order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3" style={{ color: mode === 'dark' ? 'white' : '' }}>CATEGORIES</h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '' }}>Home</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '' }}>Order</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '' }}>Local For Vocal</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '' }}>Cart</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 uppercase" style={{ color: mode === 'dark' ? 'white' : '' }}>Customer Service</h2>
              <nav className="list-none mb-10">
                <li>
                  <Link to={'/returnpolicy'} className="text-gray-600 hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '' }}>Return Policy</Link>
                </li>
                <li>
                  <Link to={'/about'} className="text-gray-600 hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '' }}>About</Link>
                </li>
                <li>
                  <Link to={'/contact'} className="text-gray-600 hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '' }}>Contact Us</Link>
                </li>
              </nav>
            </div>

            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3" style={{ color: mode === 'dark' ? 'white' : '' }}>Services</h2>
              <nav className="list-none mb-10">
                <li>
                  <Link to={'/privacypolicy'} className="text-gray-600 hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '' }}>Privacy</Link>
                </li>

              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <img src="https://ecommerce-sk.vercel.app/pay.png" alt="" />
            </div>
          </div>

        </div>

        <div className="bg-gray-200" style={{ backgroundColor: mode === 'dark' ? 'rgb(55 57 61)' : '', color: mode === 'dark' ? 'white' : '', }}>
          <div className="container px-5 py-3 mx-auto flex items-center sm:flex-row flex-col">
            <Link to={'/'} className='flex'>
              <div className="flex ">
                <h1 className=' text-2xl font-bold text-black  px-2 py-1 rounded' style={{ color: mode === 'dark' ? 'white' : '', }}>Readery</h1>
              </div>
            </Link>

            <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4  " style={{ color: mode === 'dark' ? 'white' : '' }}>
              
              <a href="https://www.linkedin.com/in/atharvasaraiya/" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank" style={{ color: mode === 'dark' ? 'white' : '' }}>Copyright © 2024 . Readery.com. All Rights Reserved</a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">

            
           <div style={{ display: 'flex', gap: '10px' }}>
  <a href="https://www.linkedin.com/in/atharvasaraiya/" target="_blank" rel="noopener noreferrer">
    <FaFacebookSquare style={{ fontSize: '20px' }} />
  </a>
  <a href="https://www.linkedin.com/in/atharvasaraiya/" target="_blank" rel="noopener noreferrer">
    <FaTwitterSquare style={{ fontSize: '20px' }} />
  </a>
  <a href="https://www.linkedin.com/in/atharvasaraiya/" target="_blank" rel="noopener noreferrer">
    <FaLinkedin style={{ fontSize: '20px' }} />
  </a>
</div>

            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
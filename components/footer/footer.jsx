import React from 'react'
import {BsInstagram, BsTwitter, BsFacebook} from 'react-icons/bs';


function footer() {
  return (
    <div>
        <div className="footer w-full max-w-screen-lg mt-10">
            <div className="flex items-center justify-between mx-10 mb-5">
              <h1 className='text-5xl font-semibold mt-0'>Avenue<span className='text-blue-600'>25</span></h1>
              <div className="flex flex-col items-start justify-around">
                <h2 className='font-semibold text-xl'>Contact Us</h2>
                <a href="mailto:" className='text-lg hover:text-blue-600 font-semibold mb-0'>info@avenue25.co.za</a>
                <ul className='flex items-center justify-around'>
                  <li><a href="" className=' hover:text-blue-600'><BsInstagram className=' text-lg'/></a></li>
                  <li><a href="" className=' hover:text-blue-600'><BsTwitter className=' text-lg' /></a></li>
                  <li><a href="" className=' hover:text-blue-600'><BsFacebook className=' text-lg' /></a></li>
                </ul>
              </div>
            </div>
            <hr />
            <div className="footerContent">
              <p>&copy; 2022 Avenue 25</p>
              <ul className='flex '>
                  <li><a href="">Privacy Policy</a></li>
                  <li><a href="">Code of Ethics</a></li>
              </ul>
            </div>
        </div>
    </div>
  )
}

export default footer
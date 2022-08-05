import Head  from 'next/head'
import React from 'react'
import Layout from '../components/Layout'

export default function contact() {
  return (
    <div>
        <Head>
          <title>Avenue25 Contact</title>
          <meta  content='Contact page with conact for of the official Avenue 25 page '/>
        </Head>
        <Layout >
            <div className="contact">
                <div className="contactText">
                  <h2>Contact Us</h2>
                  <p>Have any questions or queries ? Get in touch with us and we will help you</p>
                </div>
                <form action="" className="contactForm" >
                  <input type="text" name='Name' placeholder='Name' />
                  <input type="tel" name="Phone Number" id="" placeholder='Phone Number' />
                  <input type="email" name="Email" id="" placeholder='Email'/>
                  <input type="text" name="Message" placeholder='Message' />
                  <a href="">Submit</a>
                </form>
            </div>
        </Layout>
    </div>
  )
}

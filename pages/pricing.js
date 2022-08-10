import Head from 'next/head'
import React, {useState}from 'react'
import ProductSlider from '../components/Swiper/ProductSlider'
import Layout from '../components/Layout'


export default function pricing() {

  const [Price, setPrice] = useState([
    {Package: 'Junior Packge', Cost:'350', Deals:['Maintenance', 'SSl Certificate', 'Domain Name', 'Emails'], id:"1"},
    {Package: 'Junior Packge', Cost:'350', Deals:['Maintenance', 'SSl Certificate', 'Domain Name', 'Emails'], id:"2"},
    {Package: 'Junior Packge', Cost:'350', Deals:['Maintenance', 'SSl Certificate', 'Domain Name', 'Emails'], id:"3"},
  ])
  return (

    
    <>
        <Head>
          <title>Avenue25</title>
        </Head>

        <Layout >
            <ProductSlider price={Price} />
            <ProductSlider />
            
        </Layout>
    </>
  )
}

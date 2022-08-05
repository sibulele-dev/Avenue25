import Head from 'next/head'
import React from 'react'
import ProductSlider from '../components/Swiper/ProductSlider'
import Layout from '../components/Layout'
export default function pricing() {
  return (
    <>
        <Head>
          <title>Avenue25</title>
        </Head>

        <Layout >


            
            <ProductSlider />
        </Layout>
    </>
  )
}

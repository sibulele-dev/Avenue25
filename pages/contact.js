import Head from "next/head";
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import Banner from "../components/Banner/Banner";
import axios from "axios";
import { useRouter } from "next/router";

export default function contact() {

  // const [name, setName] = useState("");
  // const [tel, setTel] =useState("");
  // const [email, setEmail] =useState("");
  // const [message, setMessage] =useState("");

  const [form, setForm]= useState({fullname: '',tel: '',email: '',message: ''});

  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();
  const [errors, setErrors] =useState({});


  useEffect( () => {
    if(submitting){
      if(Object.keys(errors).length === 0){
        createClient()
      }
      else {
        setSubmitting(false)
      }
    }
  }, [errors])


  const createClient = async() =>{
    try {
        const res = await fetch('https//localhost:3000/api/Client', {
          method: 'POST',
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
          },  
          body: JSON.stringify(form)
        });
        router.push('/')
      
    } catch (error) {
      console.log(error)
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()


    let errs =validate();
    setErrors(errs)
    setSubmitting(true)
  }

  const handleChange = (e) => {
    setForm({
      ...form,//spreads out current form state

      [e.target.name]: e.target.value
    })
  }

  const validate = () => {
    let err = {}


    if(!form.fullname) {
      err.fullname ="Please enter your Name "
    }

    if(!form.email) {
      err.email ="Please enter your email "
    }

    if(!form.tel) {
      err.tel ="Please enter your Phone number "
    }

    if(!form.message) {
      err.message ="Please enter your Message, Query or Text "
    }

    return err;
  }
  return (
    <div className="">
      
      <Head>
        <title>Avenue25 Contact</title>
        <meta content="Contact page with conact for of the official Avenue 25 page " />
      </Head>
      <Layout>
        <Banner>
          <div className="text-center pt-40 max-w-screen-md mx-auto text-white">
            <h2 className="text-3xl md:text-5xl font-semibold text-white mb-5">
              Simply reaching out can really put alot of things in motion
            </h2>
            <p className="text-lg text-white mt-2 font-medium"></p>
          </div>
        </Banner>
        <div>
        <div className="text-center w-full">

      </div>
      <div
        className="max-w-screen-xl mt-24 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">Lets talk about everything!</h2>
            <div className="text-gray-700 mt-8">
              Hate forms? Send us an <a className="underline cursor-pointer text-blue-600" href="mailto:info@avenue25.co.za" >email</a> instead.
            </div>
          </div>
          <div className="mt-8 text-center">
            <img className="hidden md:block h-[28rem]" src="https://ik.imagekit.io/knqnox49e/options_dOGT6nF1Z.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661166859877" alt="Lady with options" />
          </div>
        </div>

        {/* you can use isSubmitting to put a loader when submitting and a form whe not submitting */}
        <form className="" onSubmit={handleSubmit} method="POST">
          <div>
            <span className="uppercase text-sm text-gray-600 font-bold">Full Name</span>
            <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text" placeholder="Jane Doe" name="fullname"  onChange={handleChange} />
          </div>
          <div className="mt-8">
            <span className="uppercase text-sm text-gray-600 font-bold">Email</span>
            <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" placeholder="janedoe@domain.com"
              type="email"  name="email" onChange={handleChange} />
          </div>
          <div className="mt-8">
            <span className="uppercase text-sm text-gray-600 font-bold">Phone</span>
            <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" placeholder="+27 (12) 345 6789"
              type="tel"  name="tel" onChange={handleChange} />
          </div>
          <div className="mt-8">
            <span className="uppercase text-sm text-gray-600 font-bold">Message</span>
            <textarea
              className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" name="message"  onChange={handleChange}></textarea>
          </div>
          <div className="mt-8">
            <button
              className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline" type="submit">
              Send Message
            </button>
          </div>
        </form>
      </div>
        </div>
        <br />
          <br />
          <br />
          <br />
          <br />
      </Layout>
    </div>
  );
}

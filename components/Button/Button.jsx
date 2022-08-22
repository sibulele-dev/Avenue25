import React from 'react'

const Button = (props) => {
  return (
    <button onClick={() => (`location.href={props.link}`)}className='bg-blue-500 py-1 px-2 rounded-md hover:bg-blue-600 text-base text-white capitalize'>
        {props.children}
    </button>
  )
}

export default Button
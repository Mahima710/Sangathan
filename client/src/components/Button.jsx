import React from 'react'
import '../assets/css/Login.css'



export const Button = ({Content}) => {
  return (
    <button type='submit' onClick={(e)=>Content.onclick(e)} className='button'>
    <p className='content'>{Content}</p>
    </button>
  )
}




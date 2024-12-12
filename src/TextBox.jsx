import React from 'react'
import { useState } from 'react'

function TextBox(props) {
   
  return (
    <>
      <input type="text" className='textbox' value={props.value} readOnly/>
    </>
  )
}

export default TextBox

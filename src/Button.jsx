import React from 'react'

function Button(props) {
   
  return (
    <>
      <input type="button" className={props.className} value={props.val} onClick={() => props.onClick(props.val)}/>
    </>
  )
}

export default Button

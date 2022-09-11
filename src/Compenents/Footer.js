import React from 'react'
export const Footer = () => {
  let footerstyle = {
      position: "absolute",
      top: "91.5%",
      width: "100%",
      // height: "auto",
      color: "red"
  }
  return (
    <div className='bg-dark text-light py-3 ' style = {footerstyle}>
      <p className='text-center'>
        Copyright &copy; MytodosList.com 

      </p>
    </div>
  )
}

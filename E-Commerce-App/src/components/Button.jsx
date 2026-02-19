import React from 'react'

const Button = ({ name, className }) => {
  return (
    <div>
       <button className={`text-white px-3 py-2 border rounded ${className}`}>{name}</button>
    </div>
  )
}

export default Button

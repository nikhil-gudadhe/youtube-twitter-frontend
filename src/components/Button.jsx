import React from 'react'

function Button({
    type = "button",
    className = "",
    bgColor = "blue",
    textColor = "text-white",
    children,
    ...props
}) {
  return (
    <button
    className={`${className} ${type} ${bgColor} ${textColor} hover:scale-110 duration-100 ease-in`}
    {...props}
    >
        {children}  
    </button>
  )
}

export default Button
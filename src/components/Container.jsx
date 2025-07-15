import React from 'react'

const Container = ({ children, className }) => {
  return (
    <div className={`max-w-screen-xl mx-auto px-4 py-2 ${className}`}>
      {children}
    </div>
  )
}

export default Container
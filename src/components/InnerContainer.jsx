import React from 'react'

const InnerContainer = ({children}) => {
  return (
    <div className='flex-1'>{children}</div>
  )
}

export default InnerContainer
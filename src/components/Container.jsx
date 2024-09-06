import React from 'react'

const Container = ({children}) => {
  return (
    <div className='flex gap-20'>
        {children}
    </div>
  )
}

export default Container
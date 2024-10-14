import React from 'react'

const Item = ({item, index}) => {
  return (
    <div>
        <div key={index} className='flex p-3 mt-12 shadow-md '>
            <div className='w-28 h-28 rounded-xl'>
                <img className='max-w-full h-auto rounded-3xl' src={`https://spoonacular.com/cdn/ingredients_100x100/` + item.image } alt="" />
            </div>
            <div className='ml-14'>
                <div className='text-xl font-semibold'>{item.name}</div>
                <div className='font-semibold mt-3'>{item.amount}{item.unit}</div>
            </div>
            
            </div>
    </div>
  )
}

export default Item
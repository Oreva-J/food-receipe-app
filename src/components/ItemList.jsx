import React from 'react'
import Item from './Item'

const ItemList = ({loading, food}) => {
  return (
    <div className='h-auto'>

<div className=' transition duration-500 hover:translate-y-1 '>
        {
        loading? "loading...": food.extendedIngredients.map((item, index) => <Item item={item} index={index} />)
        }
        </div>

    </div>
  )
}

export default ItemList
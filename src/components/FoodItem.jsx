import React from 'react'

const FoodItem = ({food, setFoodId}) => {
  return (
    <div className=''>
        <div>
            <img src={food.image} alt="" />
            <h1>{food.title}</h1>
            <button onClick={()=>setFoodId(food.id)}>View receipe</button>
        </div>
    </div>
  )
}

export default FoodItem
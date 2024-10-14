import React from 'react'

const FoodItem = ({food, setFoodId}) => {
  return (
    <div className=''>
        <div className='flex flex-col gap-3 items-center mb-10'>
            <img src={food.image} alt="" />
            <h1 className='text-2xl font-medium '>{food.title}</h1>
            <button className='text-slate-100 p-2 rounded-xl bg-green-700 transition duration-700 hover:scale-110' onClick={()=>setFoodId(food.id)}>View receipe</button>
        </div>
    </div>
  )
}

export default FoodItem
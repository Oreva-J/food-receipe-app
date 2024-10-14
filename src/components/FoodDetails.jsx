import React, { useEffect, useState } from 'react'
import ItemList from './ItemList';

  
const FoodDetails = ({foodId}) => {
  const [food, setFood] = useState({})
  const [loading, setLoading] = useState(true)

  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const api_key = "383c6c7c826d439aafe401e28b240171";

  useEffect(() =>{
    async function fetchFood(){
      const res = await fetch(`${URL}?apiKey=${api_key}`)
      const data = await res.json()
      console.log(data)
      setFood(data)
      setLoading(false)
    }
    fetchFood()
}
  ,[foodId])

  return (
    <div>
      {/* food instruction card*/}
      <div className='max-w-[600px] m-5 p-5 shadow-md rounded-xl'>
        
      
       <h1 className='text-3xl mb-5 font-semibold'>{food.title}</h1>
       <img className='max-w-[100%] h-auto mb-2 rounded-md' src={food.image} alt="" />
       <div className='flex justify-between mb-5 font-semibold'> 
             <span>⌚ {food.readyInMinutes} minutes</span>
             <span> 👨‍👩‍👧serves {food.servings}</span>
             <span> 🥕 {food.vegetarian? food.vegetarian : "non-vegetarian" }</span>
        </div>
        <span className='font-semibold'>${food.pricePerServing} Per Serving</span>
        <hr className='my-10' />


         {/* Food instruction */}
      <h2 className='text-3xl mb-10 text-stone-700 font-medium'>Instructions</h2>
      <ol className='p-0 rounded-md text-stone-400 font-medium list-decimal text-lg '>
          {loading? <p>Loading...</p> : food.analyzedInstructions[0].steps.map((step, index)=>( <li key={index}>{step.step}</li> )) }
      </ol>

      <hr className='my-10' />

       {/* food ingredients */}
       <div>
        <h1 className='text-3xl mb-10 text-stone-700 font-medium'>Ingredients</h1>
        {/* ingrediets card */}
        <ItemList food={food} loading={loading} />
       
       </div>
       </div>
     </div>

  )
}

export default FoodDetails
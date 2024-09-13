import React, { useEffect, useState } from 'react'

  
const FoodDetails = ({foodId}) => {
  const [food, setFood] = useState({})
  const [loading, setLoading] = useState(true)

  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const api_key = "31c445093a694c7b8eac5307df77c43a";

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
      <div className='w-full'>
        
       <h1>{foodId}</h1>
       <h1 className='text-2xl mb-5 font-semibold'>{food.title}</h1>
       <img className='w-[100%] mb-2 rounded-md' src={food.image} alt="" />
       <div className='flex flex-wrap gap-2'> 
             <span>⌚ {food.readyInMinutes} minutes</span>
             <span> 👨‍👩‍👧serves {food.servings}</span>
             <span> 🥕 {food.vegetarian? food.vegetarian : "non-vegetarian" }</span>
             <span>${food.pricePerServing} Per Serving</span>
        </div>
       </div>
       {/* food ingredients */}
       <div>
        <h1>Ingredients</h1>
        {/* ingrediets card */}

        {
        loading? "loading...": food.extendedIngredients.map((item) => <div>
            <img src={`https://spoonacular.com/cdn/ingredients_100x100/` + item.image } alt="" />
            {item.name}
            <h3>{item.amount}{item.unit}</h3>
            </div>)
        }
        
        
          
        
       
       </div>

     </div>

  )
}

export default FoodDetails
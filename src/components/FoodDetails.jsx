import React, { useEffect, useState } from 'react'

  
const FoodDetails = ({foodId}) => {
  const [food, setFood] = useState({})

  const URL = `https://api.spoonacularr.com/recipes/${foodId}/information`;
  const api_key = "31c445093a694c7b8eac5307df77c43a";

  useEffect(() =>{
    async function fetchFood(){
      const res = await fetch(`${URL}?apiKey=${api_key}`)
      const data = await res.json()
      console.log(data)
      setFood(data)
    }
    fetchFood()
}
  ,[foodId])

  return (
    <div>
      Food Details
       <h1>{foodId}</h1>
       <h1>{food.title}</h1>
       <img src={food.image} alt="" />

     </div>

  )
}

export default FoodDetails
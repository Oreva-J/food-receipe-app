import React from 'react'
import FoodItem from './FoodItem'

const FooodList = ({foodData, setFoodId}) => {
  return (
    <div>
        {foodData.map((food) => <FoodItem key={food.title} setFoodId={setFoodId} food={food} />)}
    </div>
  )
}

export default FooodList
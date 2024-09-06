import React from 'react'
import FoodItem from './FoodItem'

const FooodList = ({foodData, setFoodId}) => {
  return (
    <div>
        {foodData.map((food) => <FoodItem setFoodId={setFoodId} food={food} />)}
    </div>
  )
}

export default FooodList
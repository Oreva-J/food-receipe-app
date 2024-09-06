import React, { useState } from 'react'
import Search from './components/Search'
import FooodList from './components/FooodList'
import Container from './components/Container'
import InnerContainer from './components/InnerContainer'
import FoodDetails from './components/FoodDetails'


const App = () => {
  const [foodData, setFoodData] = useState([])
  const [foodId, setFoodId] = useState("")
  return (
    <div className='p-20'> 
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          <FooodList setFoodId={setFoodId} foodData={foodData} />
          <h1>hello</h1>
        </InnerContainer>
        <InnerContainer>
          <FoodDetails foodId={foodId} />
        </InnerContainer>
      </Container>
    </div>
  )
}

export default App

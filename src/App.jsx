import React, { useState } from 'react'
import Search from './components/Search'
import FooodList from './components/FooodList'
import Container from './components/Container'
import InnerContainer from './components/InnerContainer'
import FoodDetails from './components/FoodDetails'
import Header from './components/pages/Header'
import Footer from './components/pages/Footer'


const App = () => {
  const [foodData, setFoodData] = useState([])
  const [foodId, setFoodId] = useState("680975")
  return (
    <div>
      <Header />
    <div className='p-10 flex flex-col '> 
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          <FooodList setFoodId={setFoodId} foodData={foodData} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetails foodId={foodId} />
        </InnerContainer>
      </Container>
    </div>
    <Footer />
    </div>
  )
}

export default App

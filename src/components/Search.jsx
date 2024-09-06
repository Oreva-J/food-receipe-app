import React, { useEffect, useState } from 'react'

const URL = "https://api.spoonacularr.com/recipes/complexSearch";

const api_key = "417bb17385cf42e9b1712c7ac199df58";



const Search = ({foodDaa, setFoodData}) => {
    const [query, setQuery] = useState("")

    useEffect(()=>{
        async function fetch_Api(){
          const res = await fetch(`${URL}?query=${query}&apiKey=${api_key}`);
          const data = await res.json();
          console.log(data.results)
          setFoodData(data.results)
        }
        fetch_Api()
    }, [query])
    
    
  return (
    <div>
      <input type="text"  placeholder='Search' onChange={(e) => setQuery(e.target.value)} value={query}
      className=''/>
    </div>
  )
}

export default Search

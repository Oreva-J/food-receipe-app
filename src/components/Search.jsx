import React, { useEffect, useState } from 'react'

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const api_key = "31c445093a694c7b8eac5307df77c43a";



const Search = ({foodDaa, setFoodData}) => {
    const [query, setQuery] = useState("pizza")

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

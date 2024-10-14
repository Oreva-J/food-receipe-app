import React, { useEffect, useState } from 'react'
import { BiSearch } from 'react-icons/bi';

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const api_key = "383c6c7c826d439aafe401e28b240171";



const Search = ({foodData, setFoodData}) => {
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
    <div className='w-full border grid'>
      <div className='flex flex-1  relative mx-auto '>
        <BiSearch size={25} className="absolute top-[25%] left-4" />
        <input className='pl-12 py-2 rounded-md ring ring-green-800 outline-none ' type="text"  placeholder='Search' onChange={(e) => setQuery(e.target.value)} value={query}
        />
      </div>
    </div>
  )
}

export default Search

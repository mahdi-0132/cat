"use client"
import { useState } from 'react'
import { Search } from 'lucide-react'
function SearchBox() {
const [ search , setSearch] = useState("")

  return (
    <div className= " flex items-center py-2 px-9 pr-3 rounded-lg mr-20  bg-black gap-3 border ">
        <Search className= "text-white ml-4 borde"/>
        <input
         type= "text" 
        placeholder= "جستجو..."
        className= "w-full outline-none placeholder-white "
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        />
    </div>
  ) 
}

export default SearchBox
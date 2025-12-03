"use client"
import { useState } from 'react'
import { ChevronDown } from 'lucide-react' 
import Link from 'next/link'


function DropdownHonar() {
    const [ open , setOpen] = useState (false)
  return (
    <div className="relative group"
    onMouseEnter={()=> setOpen(true)}
    onMouseLeave={()=>setOpen(false)}
    >
        <button className= "flex items-center gap-1 text-lg text-red-600 font-bold">
            
            <ChevronDown
            className= {`transition-transform duration-300 ${
                open ? "rotate-180" : "rotate-0"
                }`}
                size={20}
            />
        </button>

        <div className= {`
         absolute top-7 left-0 bg-white shadow-md p-3 rounded-lg w-40 
         transition-all duration-300
          ${ open ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2"} `}>

            <ul className= " flex flex-col gap-2">
                <li> <Link href= "#" className= " hover:text-black"> مشاهدات بیشتر</Link> </li>
                <li> <Link href= "#" className= " hover:text-black"> مشاهدات بیشتر</Link> </li>
                <li> <Link href= "#" className= " hover:text-black"> مشاهدات بیشتر</Link> </li>
            </ul>
          </div>

    </div>
  )
}

export default DropdownHonar
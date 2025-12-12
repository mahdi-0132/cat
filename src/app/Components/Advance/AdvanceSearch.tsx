"use client"
import { ChevronDown } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import AdvanceSearchBox, { AdvanceSearch1, AdvanceSearch2, AdvanceSearch3, AdvanceSearch4, AdvanceSearch5, AdvanceSearch6, AdvanceSearch7, AdvanceSearch9 } from './AdvanceSearchBox'
import Ahh from "@/public/button.png"
import kony from "@/public/icons8-button-50.png"
interface IHomeSearch {
  title: string
  imdb_rating: number
  runtime: string
  genre: string
  image_url: string
  plot_summary: string
  age_rating: string
}
function AdvanceSearch({ children }: any) {

  const [open, setOpen] = useState(false)

  const [MovieOptions, setMovieOptions] = useState<IHomeSearch[]>([])
  const [genre , setGenere] = useState<IHomeSearch[]>([])
  const [imdbScoreFrom , setImdbScoreFrom ] = useState<IHomeSearch[]>([])
  const [imdbScoreTo , setImdbScoreTo ] = useState<IHomeSearch[]>([])
  const [ageAverage , setAgeAverage] = useState<IHomeSearch[]>([])
  const [ imdbRange , setImdbRange] = useState<IHomeSearch[]>([])



  useEffect(() => {
    fetch("http://localhost:3001/genres")
      .then((res) => res.json())
      .then((data) =>  {
        const formatted = data.comedy.map((item : any, index :number) => ({
  id: index,
  name: item.title,
  value: item.title,
}));

      setMovieOptions(formatted)
      })
  }, [])



  useEffect(() => {
    fetch("http://localhost:3001/suggestions")
      .then((res) => res.json())
      .then((data) =>  {
        const formatted = data.movies?.map((item : any, index :number) => ({
  id: index,
  name: item.genre,
  value: item.genre
}));

      setGenere(formatted)
      })
  }, [])


  useEffect(() => {
    fetch("http://localhost:3001/suggestions")
      .then((res) => res.json())
      .then((data) =>  {
        const formatted = data.movies?.map((item : any, index :number) => ({
  id: index,
  name: item.imdb_rating,
  value: item.imdb_rating
}));

      setImdbScoreFrom(formatted)
      })
  }, [])



   useEffect(() => {
    fetch("http://localhost:3001/genres")
      .then((res) => res.json())
      .then((data) =>  {
        const formatted = data.action?.map((item : any, index :number) => ({
  id: index,
  name: item.imdb_rating,
  value: item.imdb_rating
}));

      setImdbScoreTo(formatted)
      })
  }, [])


   useEffect(() => {
    fetch("http://localhost:3001/suggestions")
      .then((res) => res.json())
      .then((data) =>  {
        const formatted = data.series?.map((item : any, index :number) => ({
  id: index,
  name: item.title,
  value: item.title
}));

      setImdbRange(formatted)
      })
  }, [])

  
   useEffect(() => {
    fetch("http://localhost:3001/genres")
      .then((res) => res.json())
      .then((data) =>  {
        const formatted = data.action?.map((item : any, index :number) => ({
  id: index,
  name: item.age_rating,
  value: item.age_rating
}));

      setAgeAverage(formatted)
      })
  }, [])



   const yearFrom =[
    {id : 0 , name:"1990" , value: "gag"},
    {id : 1 , name:"1992" , value: "gag"},
    {id : 2 , name:"1996" , value: "gag"},
    {id : 3 , name:"2000" , value: "gag"},
   ]
    const yearTo =[
    {id : 0 , name:"2010" , value: "gag"},
    {id : 1 , name:"2015" , value: "gag"},
    {id : 2 , name:"2020" , value: "gag"},
    {id : 3 , name:"2025" , value: "gag"},
   ]
    const coulity =[
    {id : 0 , name:"480 K" , value: "gag"},
    {id : 1 , name:"780 K" , value: "gag"},
    {id : 2 , name:"1080 K" , value: "gag"},
    {id : 3 , name:"4 K" , value: "gag"},
   ]

      const country =[
    {id : 0 , name:"امریکا" , value: "gag"},
    {id : 1 , name:"اسپانیا" , value: "gag"},
    {id : 2 , name:"انگلیس" , value: "gag"},
    {id : 3 , name:"کانادا" , value: "gag"},
   ]
  // if (!MovieOptions) return <p className='font-bold text-white'> درحال بارگذاری...</p>


  return (

    <div className="w-fit mx-auto mt-10 " >

      <div className='flex justify-between border rounded-lg bg-black py-4'>

        <span className='text-2xl mr-4'>جستجوی پیشرفته فیلم و سریال</span>

        <button
          onClick={() => setOpen(perv => !perv)}

          className="flex items-center gap-1 ml-10  text-red-600">

          <ChevronDown
            className={`transition-transform duration-300 ${open ? "rotate-180" : ""
              }`}
            size={50}
          />

        </button>
      </div>

      <div className={` overflow-hidden transition-all duration-500 ${open ? "max-h-[1000px] " : "max-h-0"} `}>
        <div className="bg-neutral-700 rounded-lg p-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          <AdvanceSearchBox label="نام " options={MovieOptions} />

          <AdvanceSearch1 label= "ژانر" options={genre} />
          
          <AdvanceSearch2 label = "سال انتشار از" options={yearFrom} />
          
          <AdvanceSearch3 label = "سال انتشار تا" options={yearTo} />
          
          <AdvanceSearch4 label = "کشور" options={country} />
          
          <AdvanceSearch5 label = "کیفیت" options={coulity} />

          <AdvanceSearch6 label = "امتیاز IMDB از" options={imdbScoreFrom} />

          <AdvanceSearch7 label = "امتیاز IMDB تا" options={imdbScoreTo} />

          <label className='mr-2'>بازیگران
            <input type='text' placeholder='Brad pitt' className='mt-1 bg-neutral-800 rounded-3xl px-10 py-3'></input></label>
          
             <label className='mr-2'>کارگردان
            <input type='text' placeholder='goat' className='mt-1 bg-neutral-800 rounded-3xl px-10 py-3'></input></label>

            <AdvanceSearch5 label = "رده سنی" options={ageAverage} />

            <AdvanceSearch9 label = "ترتیب IMDB" options={imdbRange} />

            <label className='flex items-center mr-5'> دوبله<img className='mr-3' src= "/icons8-button-50.png" /> </label>
            <label className='flex items-center mr-5'>  زیرنویس<img className='mr-3' src= "/button.png" /> </label>

            <button className='px-10 py-4 bg-red-600 rounded-xl'> اعمال فیلتر و جستجو </button>
              
        </div>
      </div>

    </div>

  )
}


export default AdvanceSearch
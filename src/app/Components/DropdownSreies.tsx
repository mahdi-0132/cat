"use client"
import { useCallback, useEffect, useState } from 'react'
import { ArrowLeft, ChevronDown } from 'lucide-react'


interface IHomeDropDownMovie {
    title: string
    imdb_rating: number
    runtime: string
    genre: string
    image_url: string
    plot_summary: string
    age_rating: string
}


function DropdownSeries() {
     const [open, setOpen] = useState(false)
        const [allMovie, setAllMovie] = useState<IHomeDropDownMovie[]>([])
        const [displayMovie, setDisplayMovie] = useState<IHomeDropDownMovie[]>([])
        const [loding, setLoding] = useState(false)
    
        const NUMBER_MOVIE_TOSHOW = 2
    
        const fetchMovie = useCallback(async () => {
            setLoding(true)
            try {
                const response = await fetch("http://localhost:3001/suggestions")
                const data = await response.json()
                setAllMovie(data.movies)
    
                const randomMovies = getRandomMovies(data.movies, NUMBER_MOVIE_TOSHOW)
                setDisplayMovie(randomMovies)
            } catch (error) {
                console.error("Error fetching data:", error)
            } finally {
                setLoding(false)
            }
        }, [])
    
        useEffect(() => {
            fetchMovie()
        }, [fetchMovie])
    
    
    
        const getRandomMovies = (movies: IHomeDropDownMovie[], count: number) => {
            const shuffeld = [...movies].sort(() => 0.5 - Math.random())
            return shuffeld.slice(0, count)
        }
    
    
        const handleDropdownMovies = () => {
            setOpen(true)
            if (allMovie.length > 0) {
                const newRandomMovies = getRandomMovies(allMovie, NUMBER_MOVIE_TOSHOW)
                setDisplayMovie(newRandomMovies)
            }
        }
    
    
  return (
    <div className="relative group"
            onMouseEnter={handleDropdownMovies}
            onMouseLeave={() => setOpen(false)}
        >

            <button className="flex items-center gap-1 text-right text-red-600 font-medium">

                <ChevronDown
                    className={`transition-transform duration-300 ${open ? "rotate-180" : "rotate-0"
                        }`}
                    size={20}
                />
            </button>

            <div
                className={`
         absolute top-7 left-0 bg-gray-600/50 backdrop-blur-sm shadow-md rounded-lg  
         transition-all duration-300
          ${open ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2"} `}>


                {displayMovie.map((movie, index) => (
                    <div className='flex flex-col'key={index}>

                        <div className='w-96 flex justify-between text-center mt-8 mx-4' >
                            <img className='max-w-full max-h-56 object-cover rounded-2xl'
                                src={movie.image_url} />
                            <div className='flex-col mr-8'>
                                <h2 className='font-bold text-2xl'> {movie.title} </h2>
                                <p className='max-w-48'> {movie.plot_summary} </p>
                                <div className='flex items-center justify-center mt-5'>
                                    <span className=''> {movie.runtime}</span>
                                    <img src="/icons8-clock-24.png" width={24} height={24} /><span className='mr-5'>10/</span>
                                    <span className=' ml-3 text-2xl text-yellow-400'> {movie.imdb_rating} </span>
                                    <img src="/imdb.webp" width={24} height={24} />
                                </div>
                            </div>

                        </div>
                            <div className=''>
                                <button className='flex items-center mx-auto mt-6'>
                                    <span className='ml-2'> مشاهده</span>
                                    <ArrowLeft size={18} />
                                </button>

                                <p className='border-b-4 mt-6 w-96 mb-4 mx-4'></p>
                            </div>
                    </div>

                ))}

            </div>

        </div>
  )
}

export default DropdownSeries
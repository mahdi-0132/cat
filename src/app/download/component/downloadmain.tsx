"use client"
import { useState } from 'react'
import Seasons from './downloadSeasons'

function Downloadmain() {
    const [active, setActive] = useState(false)
    const [active1, setActive1] = useState(false)
    const [active2, setActive2] = useState(false)
    return (
        <section className='w-full h-full mt-20'>
            <div className='w-full h-32 flex items-center'>
                <h1 className='font-bold text-5xl mr-40'> دانلود</h1>
            </div>
            <div className='flex items-center justify-center gap-5'>
                <button
                    onClick={() => setActive(!active)}
                    className={`
                             flex items-center gap-2 px-14 py-3 rounded-lg
                             transition-all duration-300
                             ${active
                             ? 'bg-red-600 text-white'
                             : 'border-2 border-red-600 text-gray-300 hover:bg-red-500/75 hover:text-white'}  `}   >
                                <span className='font-bold'>دوبله</span>
                </button>

                <button
                    onClick={() => setActive1(!active1)}
                    className={`
                        flex items-center gap-2 px-14 py-3 rounded-lg
                        transition-all duration-300
                        ${active1
                        ? 'bg-red-600 text-white'
                        : 'border-2 border-red-600 text-gray-300 hover:bg-red-500/75 hover:text-white'}  `}   >
                                <span className='font-bold'>زیرنویس</span>
                </button>

                <button
                    onClick={() => setActive2(!active2)}
                    className={`
                        flex items-center gap-2 px-14 py-3 rounded-lg
                                 transition-all duration-300
                                 ${active2
                                 ? 'bg-red-600 text-white'
                                 : 'border-2 border-red-600 text-gray-300 hover:bg-red-500/75 hover:text-white'}  `}   >
                                <span className='font-bold'>زبان اصلی</span>
                </button>

            </div>
                      <Seasons/>
    
                      
        </section>
    )
}

export default Downloadmain
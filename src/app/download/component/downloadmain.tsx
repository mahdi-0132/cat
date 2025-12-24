"use client"
import { useState } from 'react'
import Seasons from './downloadSeasons'

function Downloadmain() {
    const [active, setActive] = useState(false)
    const [active1, setActive1] = useState(false)
    const [active2, setActive2] = useState(false)
    
    return (
        <section className='w-full min-h-screen mt-4 sm:mt-8 md:mt-12 lg:mt-20 px-2 sm:px-4 md:px-6 lg:px-8'>
            <div className='w-full h-16 sm:h-20 md:h-24 lg:h-32 flex items-center justify-center sm:justify-start'>
                <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center sm:text-right mr-0 sm:mr-8 md:mr-16 lg:mr-40'>
                    دانلود
                </h1>
            </div>
            
            <div className='flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-5 px-2 sm:px-0 mb-6 sm:mb-8 md:mb-10'>
                <button
                    onClick={() => {
                        setActive(!active)
                        if (active1) setActive1(false)
                        if (active2) setActive2(false)
                    }}
                    className={`
                        w-full sm:w-auto flex items-center justify-center gap-2 
                        px-6 sm:px-10 md:px-12 lg:px-14 py-2 sm:py-2.5 md:py-3 
                        rounded-lg text-sm sm:text-base md:text-lg
                        transition-all duration-300
                        ${active
                            ? 'bg-red-600 text-white'
                            : 'border border-red-600 sm:border-2 text-gray-300 hover:bg-red-500/75 hover:text-white'}  
                    `}>
                    <span className='font-bold'>دوبله</span>
                </button>

                <button
                    onClick={() => {
                        setActive1(!active1)
                        if (active) setActive(false)
                        if (active2) setActive2(false)
                    }}
                    className={`
                        w-full sm:w-auto flex items-center justify-center gap-2 
                        px-6 sm:px-10 md:px-12 lg:px-14 py-2 sm:py-2.5 md:py-3 
                        rounded-lg text-sm sm:text-base md:text-lg
                        transition-all duration-300
                        ${active1
                            ? 'bg-red-600 text-white'
                            : 'border border-red-600 sm:border-2 text-gray-300 hover:bg-red-500/75 hover:text-white'}  
                    `}>
                    <span className='font-bold'>زیرنویس</span>
                </button>

                <button
                    onClick={() => {
                        setActive2(!active2)
                        if (active) setActive(false)
                        if (active1) setActive1(false)
                    }}
                    className={`
                        w-full sm:w-auto flex items-center justify-center gap-2 
                        px-6 sm:px-10 md:px-12 lg:px-14 py-2 sm:py-2.5 md:py-3 
                        rounded-lg text-sm sm:text-base md:text-lg
                        transition-all duration-300
                        ${active2
                            ? 'bg-red-600 text-white'
                            : 'border border-red-600 sm:border-2 text-gray-300 hover:bg-red-500/75 hover:text-white'}  
                    `}>
                    <span className='font-bold'>زبان اصلی</span>
                </button>
            </div>
            
            <div className='px-2 sm:px-4 md:px-6 lg:px-8'>
                <Seasons/>
            </div>
        </section>
    )
}

export default Downloadmain